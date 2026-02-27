'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAchievements } from "@/lib/queries"

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

export function Achievements() {
  const { data, isLoading, error } = useAchievements()
  const defaultAchievements: Achievement[] = data?.user || []

  if (isLoading) {
    return (
      <section className="w-full py-6">
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold">Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Loading achievements...</p>
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
            <CardTitle className="text-2xl md:text-3xl font-bold">Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">Failed to load achievements. Please try again later.</p>
          </CardContent>
        </Card>
      </section>
    )
  }


  return (
    <section className="w-full relative z-10">
      <Card className="border-none shadow-none bg-transparent overflow-hidden">
        <CardHeader className="p-6 md:p-8">
          <CardTitle className="text-3xl md:text-4xl font-bold">
            Achievements
          </CardTitle>
          <CardDescription className="text-base mt-2">
            Milestones and accomplishments throughout my journey
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8 pt-0">
          {defaultAchievements.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No achievements available</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {defaultAchievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className="group border border-border/20 shadow-none hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 bg-transparent"
                >
                  <CardHeader className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="text-4xl p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        {achievement.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg font-bold leading-tight line-clamp-2">
                          {achievement.title}
                        </CardTitle>
                        {achievement.date && (
                          <CardDescription className="mt-1 text-sm font-medium text-primary">
                            {achievement.date}
                          </CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5 pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}