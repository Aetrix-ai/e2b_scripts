import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Achievement {
  id: number
  title: string
  description: string
  date?: string
  icon?: string
  media?: {
    url: string
  }
}

interface AchievementsProps {
  achievements?: Achievement[]
}

export function Achievements({ achievements }: AchievementsProps) {
  const defaultAchievements: Achievement[] = achievements || [
    {
      id: 1,
      title: "Best Innovation Award",
      description: "Received the Best Innovation Award for developing a cutting-edge web application that improved user engagement by 150%.",
      date: "2024",
      icon: "🏆"
    },
    {
      id: 2,
      title: "Open Source Contributor",
      description: "Contributed to major open-source projects with over 100+ pull requests merged.",
      date: "2023-2024",
      icon: "💻"
    },
    {
      id: 3,
      title: "Hackathon Winner",
      description: "First place in regional hackathon for building a real-time collaboration tool.",
      date: "2023",
      icon: "🥇"
    },
    {
      id: 4,
      title: "Published Article",
      description: "Published technical article on modern web development practices, reaching 10k+ readers.",
      date: "2023",
      icon: "📝"
    },
    {
      id: 5,
      title: "Team Leadership",
      description: "Led a team of 5 developers to successfully deliver a complex enterprise application ahead of schedule.",
      date: "2022",
      icon: "👥"
    },
    {
      id: 6,
      title: "Certification Achievement",
      description: "Obtained AWS Solutions Architect certification and multiple development certifications.",
      date: "2022",
      icon: "📜"
    }
  ]

  return (
    <section className="w-full py-6">
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {defaultAchievements.map((achievement) => (
              <Card key={achievement.id} className="break-inside-avoid mb-6 border shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-4xl p-2 bg-secondary/20 rounded-lg">{achievement.icon}</span>
                    <div className="flex-1 pt-1">
                      <CardTitle className="text-lg md:text-xl font-bold leading-tight">{achievement.title}</CardTitle>
                      {achievement.date && (
                        <CardDescription className="mt-1 text-sm font-medium text-primary">{achievement.date}</CardDescription>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}