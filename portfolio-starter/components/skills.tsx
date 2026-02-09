'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useSkills } from "@/lib/queries"

interface Skill {
  id: number
  name: string
  level?: string
}

export function Skills() {
  const { data, isLoading, error } = useSkills()
  const defaultSkills: Skill[] = data?.user || []

  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-3 mt-5 md:gap-4">
        <span className="text-muted-foreground text-sm">Loading skills...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-destructive text-sm">Failed to load skills</div>
    )
  }

  return (
    <div className="flex flex-wrap gap-3 mt-5 md:gap-4">
      {defaultSkills.map((skill) => (
        <Badge 
          key={skill.id} 
          variant="secondary"
          className="px-5 py-5 text-sm md:text-base font-medium rounded-full cursor-default hover:bg-primary/20 transition-colors"
        >
          {skill.name}
        </Badge>
      ))}
    </div>
  )
}