import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Achievements } from "@/components/achievments"
import { Projects } from "@/components/project"

import { Card, CardContent } from "@/components/ui/card"


export default function Page() {

    return (

        <div className="p-50 mx-auto ">
           
                <CardContent>
                    <Hero />
                    <Achievements />
                    <Projects />
                </CardContent>
            

        </div>

    )
}
