import { Hero } from "@/components/hero"
import { Achievements } from "@/components/achievments"
import { Projects } from "@/components/project"
import { CardContent } from "@/components/ui/card"

export function HomePage() {
  const userId = import.meta.env.VITE_USER_ID

  return (
    <div className="p-6">
      <CardContent>
        <Hero />
        <Achievements />
        <Projects />
      </CardContent>
      <div className="mt-6 text-sm text-muted-foreground">
        {"USER ID : " + (userId || "")}
      </div>
    </div>
  )
}
