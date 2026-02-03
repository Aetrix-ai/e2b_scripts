import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface HeroProps {
  user?: {
    name: string
    title: string
    about: string
    profileImage?: string
    email?: string
    location?: string
  }
}

export function Hero({ user }: HeroProps) {
  const defaultUser = {
    name: user?.name || "John Doe",
    title: user?.title || "Full Stack Developer",
    about: user?.about || "Passionate developer with expertise in modern web technologies. I love building scalable applications and exploring new frameworks. Always eager to learn and contribute to meaningful projects.",
    profileImage: user?.profileImage || "https://via.placeholder.com/200",
    email: user?.email || "john.doe@example.com",
    location: user?.location || "San Francisco, CA"
  }

  return (
    <section className="w-full py-6">
      <Card className="border shadow-sm">
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img 
              src={defaultUser.profileImage} 
              alt={defaultUser.name}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-muted shadow-md"
            />
            <div className="flex-1 text-center md:text-left space-y-2">
              <CardTitle className="text-3xl md:text-5xl font-bold tracking-tight mb-2 text-primary">
                {defaultUser.name}
              </CardTitle>
              <CardDescription className="text-xl md:text-2xl font-medium text-foreground">
                {defaultUser.title}
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 mt-4 text-sm md:text-base text-muted-foreground justify-center md:justify-start">
                <span className="flex items-center gap-2">
                  ✉️ {defaultUser.email}
                </span>
                <span className="flex items-center gap-2">
                  📍 {defaultUser.location}
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-w-4xl">
            <h3 className="text-xl font-bold border-b pb-2">About</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {defaultUser.about}
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}