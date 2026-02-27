"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useProjects } from "@/lib/queries"

interface Project {
  id: number
  name: string
  description: string
  technologies?: string[]
  link?: string
  media?: Array<{ url: string; type?: "image" | "video" }>
}

export function Projects() {
  const { data, isLoading, error } = useProjects()
  const defaultProjects: Project[] = data?.user || []

  if (isLoading) {
    return (
      <section className="w-full py-6">
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Loading projects...</p>
          </CardContent>
        </Card>
      </section>
    )
  }

  if (error) {
    return (
      <section className="w-full py-6">
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">Failed to load projects. Please try again later.</p>
          </CardContent>
        </Card>
      </section>
    )
  }

  return <ProjectsClient projects={defaultProjects} />
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
    <section className="w-full relative z-10">
      <Card className="border border-border/30 shadow-lg backdrop-blur-sm bg-card/50 overflow-hidden">
        <CardHeader className="p-6 md:p-8">
          <CardTitle className="text-3xl md:text-4xl font-bold">
            Projects
          </CardTitle>
          <CardDescription className="text-base mt-2">
            A showcase of my work and contributions
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8 pt-0">
          {projects.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No projects available</p>
          ) : (
            <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40">
              {projects.map((project: Project) => {
                const currentIndex = currentImageIndex[project.id] || 0
                const hasImages = project.media && project.media.length > 0

              return (
                <div key={project.id} className="min-w-full snap-center">
                  <Card className="h-full border border-border/30 shadow-md hover:shadow-xl transition-all duration-300 bg-card/60 backdrop-blur-sm">
                    <CardHeader className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-2xl md:text-3xl font-bold mb-3" title={project.name}>
                            {project.name}
                          </CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            {project.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6 p-6 md:p-8">
                      {hasImages && (
                        <div className="relative group">
                          <div className="overflow-hidden rounded-xl bg-muted shadow-lg ring-1 ring-border/50">
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
                                  className="w-full h-full min-h-[90vh] object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              )
                            })()}
                          </div>
                          {project.media!.length > 1 && (
                            <div className="flex items-center justify-between mt-4 px-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-10 w-10 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all"
                                onClick={() => prevImage(project.id, project.media!.length)}
                              >
                                ←
                              </Button>
                              <span className="text-sm font-semibold text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
                                {currentIndex + 1} / {project.media!.length}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-10 w-10 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all"
                                onClick={() => nextImage(project.id, project.media!.length)}
                              >
                                →
                              </Button>
                            </div>
                          )}
                        </div>
                      )}
                      {project.technologies && project.technologies.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech: string, idx: number) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-sm px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.link && (
                        <div className="pt-2">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:scale-105 transition-all text-sm font-semibold"
                          >
                            <span>Visit Project</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
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
    </section>
  )
}