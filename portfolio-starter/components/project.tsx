"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { apiRequest } from "@/lib/utils"

interface Project {
  id: number
  name: string
  description: string
  technologies?: string[]
  link?: string
  media?: Array<{ url: string; type?: "image" | "video" }>
}

export async function Projects() {
  try {
    const data = await apiRequest("project")
    const defaultProjects: Project[] = data?.user || []
    return <ProjectsClient projects={defaultProjects} />
  } catch (error) {
    console.error("Failed to load projects:", error)
    return <ProjectsClient projects={[]} />
  }
}

function ProjectsClient({ projects }: { projects: Project[] }) {

  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({})

  const nextImage = (projectId: number, maxIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % maxIndex
    }))
  }

  const prevImage = (projectId: number, maxIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + maxIndex) % maxIndex
    }))
  }

  const isVideoUrl = (url: string) => /\.(mp4|webm|ogg)$/i.test(url)

  return (
    
      <Card className="border shadow-sm w-full">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">Projects</CardTitle>
        </CardHeader>
        <CardContent>
          {projects.length === 0 ? (
            <p className="text-muted-foreground">No projects available</p>
          ) : (
            <div className="flex overflow-x-auto gap-6 pb-6 pt-4 snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
              {projects.map((project: Project) => {
                const currentIndex = currentImageIndex[project.id] || 0
                const hasImages = project.media && project.media.length > 0

              return (
                <div key={project.id} className="min-w-full  snap-center">
                  <Card className="h-full border shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-xl md:text-2xl font-bold truncate" title={project.name}>{project.name}</CardTitle>
                          <CardDescription className="mt-2 text-sm md:text-base leading-relaxed">
                            {project.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6 p-6 pt-0">
                      {hasImages && (
                        <div className="relative group">
                          <div className="overflow-hidden rounded-lg bg-muted shadow-inner">
                            {(() => {
                              const mediaItem = project.media![currentIndex]
                              const isVideo = mediaItem.type === "video" || isVideoUrl(mediaItem.url)
                              return isVideo ? (
                                <video
                                  src={mediaItem.url}
                                  controls
                                  className="w-full min-h-[90vh] object-cover"
                                />
                              ) : (
                                <img 
                                  src={mediaItem.url}
                                  alt={`${project.name} screenshot ${currentIndex + 1}`}
                                  className="w-full h-full min-h-[90vh] object-cover transition-transform duration-500 hover:scale-105"
                                />
                              )
                            })()}
                          </div>
                          {project.media!.length > 1 && (
                            <div className="flex items-center justify-between mt-4">
                              <Button 
                                variant="outline" 
                                size="icon"
                                className="h-8 w-8 rounded-full"
                                onClick={() => prevImage(project.id, project.media!.length)}
                              >
                                ←
                              </Button>
                              <span className="text-xs font-medium text-muted-foreground">
                                {currentIndex + 1} / {project.media!.length}
                              </span>
                              <Button 
                                variant="outline" 
                                size="icon"
                                className="h-8 w-8 rounded-full"
                                onClick={() => nextImage(project.id, project.media!.length)}
                              >
                                →
                              </Button>
                            </div>
                          )}
                        </div>
                      )}
                      {project.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech: string, idx: number) => (
                            <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                      {project.link && (
                        <div className="pt-2">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                          >
                            Visit Project 
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                          </a>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )
              })}
            </div>
          )}
        </CardContent>
      </Card>
    
  )
}