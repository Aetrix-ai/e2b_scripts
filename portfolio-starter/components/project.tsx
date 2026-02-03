"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: number
  name: string
  description: string
  technologies?: string[]
  link?: string
  media?: Array<{ url: string }>
}

interface ProjectsProps {
  projects?: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  const defaultProjects: Project[] = projects || [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management, payment integration, and advanced analytics dashboard. Built with modern technologies to handle high traffic and provide seamless user experience.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      link: "https://example.com",
      media: [
        { url: "https://via.placeholder.com/600x400/667eea/ffffff?text=E-Commerce+1" },
        { url: "https://via.placeholder.com/600x400/764ba2/ffffff?text=E-Commerce+2" },
        { url: "https://via.placeholder.com/600x400/f093fb/ffffff?text=E-Commerce+3" }
      ]
    },
    {
      id: 2,
      name: "Task Management System",
      description: "Collaborative task management application with real-time updates, team collaboration features, and productivity analytics. Supports multiple projects and teams with role-based access control.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "https://example.com",
      media: [
        { url: "https://via.placeholder.com/600x400/4facfe/ffffff?text=Task+Manager+1" },
        { url: "https://via.placeholder.com/600x400/00f2fe/ffffff?text=Task+Manager+2" }
      ]
    },
    {
      id: 3,
      name: "AI Content Generator",
      description: "AI-powered content generation tool that helps create blog posts, social media content, and marketing materials. Integrates with multiple AI models for diverse content creation needs.",
      technologies: ["Python", "FastAPI", "React", "OpenAI"],
      link: "https://example.com",
      media: [
        { url: "https://via.placeholder.com/600x400/43e97b/ffffff?text=AI+Tool+1" },
        { url: "https://via.placeholder.com/600x400/38f9d7/ffffff?text=AI+Tool+2" },
        { url: "https://via.placeholder.com/600x400/4facfe/ffffff?text=AI+Tool+3" }
      ]
    },
    {
      id: 4,
      name: "Analytics Dashboard",
      description: "Comprehensive analytics dashboard for tracking business metrics, user behavior, and performance indicators. Features customizable widgets and real-time data visualization.",
      technologies: ["Vue.js", "Express", "MySQL", "Chart.js"],
      link: "https://example.com",
      media: [
        { url: "https://via.placeholder.com/600x400/fa709a/ffffff?text=Dashboard+1" },
        { url: "https://via.placeholder.com/600x400/fee140/ffffff?text=Dashboard+2" }
      ]
    }
  ]

  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set())
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({})

  const toggleProject = (projectId: number) => {
    const newExpanded = new Set(expandedProjects)
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId)
    } else {
      newExpanded.add(projectId)
    }
    setExpandedProjects(newExpanded)
  }

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

  return (
    <section className="w-full py-6">
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex overflow-x-auto gap-6 pb-6 pt-4 snap-x scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
            {defaultProjects.map((project) => {
              const isExpanded = expandedProjects.has(project.id)
              const currentIndex = currentImageIndex[project.id] || 0
              const hasImages = project.media && project.media.length > 0

              return (
                <div key={project.id} className="min-w-[350px] md:min-w-[500px] snap-center">
                  <Card className="h-full border shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-xl md:text-2xl font-bold truncate" title={project.name}>{project.name}</CardTitle>
                          <CardDescription className="mt-2 text-sm md:text-base leading-relaxed">
                            {isExpanded ? project.description : `${project.description.slice(0, 150)}...`}
                          </CardDescription>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => toggleProject(project.id)}
                          className="shrink-0 text-sm font-medium"
                        >
                          {isExpanded ? "Less" : "More"}
                        </Button>
                      </div>
                    </CardHeader>
                    {isExpanded && (
                      <CardContent className="space-y-6 p-6 pt-0 animate-in fade-in zoom-in-95 duration-200">
                        {hasImages && (
                          <div className="relative group">
                            <div className="overflow-hidden rounded-lg bg-muted shadow-inner">
                              <img 
                                src={project.media![currentIndex].url}
                                alt={`${project.name} screenshot ${currentIndex + 1}`}
                                className="w-full h-56 md:h-72 object-cover transition-transform duration-500 hover:scale-105"
                              />
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
                            {project.technologies.map((tech, idx) => (
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
                    )}
                  </Card>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}