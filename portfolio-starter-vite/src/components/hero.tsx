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
        <section className="w-full relative z-10">
            <Card className="border-none shadow-none bg-transparent w-full overflow-hidden">
                <CardHeader className="p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start w-full">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                            <img
                                src={defaultUser.profileImage ?? ""}
                                alt={defaultUser.user.name}
                                className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-background shadow-xl shrink-0"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left space-y-4 w-full">
                            <CardTitle className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {defaultUser.user.name}
                            </CardTitle>
                            <CardDescription className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90">
                                {defaultUser.title}
                            </CardDescription>
                            <div className="flex flex-col sm:flex-row gap-4 pt-2 text-sm md:text-base text-muted-foreground justify-center md:justify-start">
                                <span className="flex items-center gap-2 hover:text-foreground transition-colors">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    {defaultUser.user.email}
                                </span>
                                <span className="flex items-center gap-2 hover:text-foreground transition-colors">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {defaultUser.location}
                                </span>
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-8 lg:p-10 space-y-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold border-b border-border/50 pb-3">
                            About
                        </h3>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {defaultUser.user.bio}
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold border-b border-border/50 pb-3">
                            Skills
                        </h3>
                        <Skills />
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}