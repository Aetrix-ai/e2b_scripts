'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skills } from "./skills"
import { useProfile } from "@/lib/queries"

type user = {
    name: string
    title: string
    about: string
    profileImage?: string
    email?: string
    location?: string
}

export function Hero() {
    const { data: defaultUser, isLoading, error } = useProfile()

    if (isLoading) {
        return (
            <section className="w-full min-h-[50vh] flex items-center py-8 md:py-12">
                <Card className="border shadow-sm w-full">
                    <CardHeader className="p-6 md:p-8">
                        <p className="text-muted-foreground">Loading profile...</p>
                    </CardHeader>
                </Card>
            </section>
        )
    }

    if (error) {
        return (
            <section className="w-full min-h-[50vh] flex items-center py-8 md:py-12">
                <Card className="border shadow-sm w-full">
                    <CardHeader className="p-6 md:p-8">
                        <p className="text-destructive">Failed to load profile. Please try again later.</p>
                    </CardHeader>
                </Card>
            </section>
        )
    }

    if (!defaultUser) {
        return (
            <section className="w-full min-h-[50vh] flex items-center py-8 md:py-12">
                <Card className="border shadow-sm w-full">
                    <CardHeader className="p-6 md:p-8">
                        <p className="text-muted-foreground">No profile data available</p>
                    </CardHeader>
                </Card>
            </section>
        )
    }
    return (
        <section className="w-full min-h-[50vh] flex items-center py-8 md:py-12">
            <Card className="border shadow-sm w-full">
                <CardHeader className="p-6 md:p-8">
                    <Card className="w-full p-5">
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start w-full">
                            <img
                                src={defaultUser.profileImage?? "ll"}
                                alt={defaultUser.user.name}
                                className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-muted shadow-md shrink-0"
                            />
                            <Card className="w-full p-5">
                                <div className="flex-1 text-center md:text-left space-y-3 w-full">
                                    <CardTitle className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 text-primary">
                                        {defaultUser.user.name}
                                    </CardTitle>
                                    <hr />
                                    <CardDescription className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground">
                                        {defaultUser.title}
                                    </CardDescription>
                                    <div className="flex flex-col sm:flex-row gap-4 mt-6 text-base md:text-lg lg:text-xl text-muted-foreground justify-center md:justify-start">
                                        <span className="flex items-center gap-2">
                                            ✉️ {defaultUser.user.email}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            📍 {defaultUser.location}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Card>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                    <div className="space-y-20 w-full">

                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold border-b pb-3">About</h3>
                            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                                {defaultUser.user.bio}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold border-b pb-3">Skills</h3>
                            <Skills />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}