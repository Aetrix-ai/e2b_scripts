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