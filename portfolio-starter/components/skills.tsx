import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { apiRequest } from "@/lib/utils"

interface Skill {
  id: number
  name: string
  level?: string
}

export async function Skills() {
  try {
    const data = await apiRequest("skills")
    const defaultSkills: Skill[] = data?.user || []

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
  } catch (error) {
    console.error("Failed to load skills:", error)
    return (
      <div className="text-muted-foreground">Failed to load skills</div>
    )
  }
}