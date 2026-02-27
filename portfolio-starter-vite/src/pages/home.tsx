import { Hero } from "@/components/hero"
import { Achievements } from "@/components/achievments"
import { Projects } from "@/components/project"

export function HomePage() {
  const userId = import.meta.env.VITE_USER_ID

  return (
    <div className="min-h-screen space-y-16 pb-16 pt-8 ">
      {/* Hero Section */}
      <section id="hero" className="scroll-mt-24">
        <Hero />
      </section>

      {/* Section Divider */}
      <div className="w-full border-t border-border/50" />

      {/* Achievements Section */}
      <section id="achievements" className="scroll-mt-20">
        <Achievements />
      </section>

      {/* Section Divider */}
      <div className="w-full border-t border-border/50" />

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-border/50 pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          {userId && `User ID: ${userId}`}
        </p>
      </footer>
    </div>
  )
}
