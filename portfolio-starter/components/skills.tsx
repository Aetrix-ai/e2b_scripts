import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Skill {
  id: number
  name: string
  level?: string
}

interface SkillsProps {
  skills?: Skill[]
}

export function Skills({ skills }: SkillsProps) {
  const defaultSkills: Skill[] = skills || [
    { id: 1, name: "JavaScript", level: "Advanced" },
    { id: 2, name: "TypeScript", level: "Advanced" },
    { id: 3, name: "React", level: "Advanced" },
    { id: 4, name: "Next.js", level: "Intermediate" },
    { id: 5, name: "Node.js", level: "Advanced" },
    { id: 6, name: "Express", level: "Advanced" },
    { id: 7, name: "PostgreSQL", level: "Intermediate" },
    { id: 8, name: "MongoDB", level: "Intermediate" },
    { id: 9, name: "Docker", level: "Intermediate" },
    { id: 10, name: "AWS", level: "Beginner" },
    { id: 11, name: "Git", level: "Advanced" },
    { id: 12, name: "Tailwind CSS", level: "Advanced" }
  ]

  return (
    <section className="w-full py-6">
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {defaultSkills.map((skill) => (
              <Badge 
                key={skill.id} 
                variant="secondary"
                className="px-4 py-2 text-sm md:text-base font-medium rounded-full cursor-default hover:bg-primary/20 transition-colors"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}