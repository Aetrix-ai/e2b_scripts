import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Achievements } from "@/components/achievments"
import { Projects } from "@/components/project"

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <Hero />
        <Skills />
        <Achievements />
        <Projects />
      </div>
    </main>
  )
}
