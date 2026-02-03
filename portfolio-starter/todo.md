- Create a portfolio website here
- its should have the following componets 

        /**
 * 
 *  public routes for accessing data
 * 
 */
import { Router } from "express";
import { prisma } from "../config";



export const publicRouter = Router()

publicRouter.get("/profile/:id", async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(401).json({
            "message": "id not provided"
        })
    }

    const parsedId = parseInt(id)
    if (!parsedId) {
        return res.status(401).json({
            "message": "invalid id"
        })
    }

    try {
        const user = await prisma.user.findFirst({
            where: { id: parsedId },
            include: {
                medias: true
            }
        })

        res.json({
            user
        })
    }
    catch (e) {
        res.status(500).json({
            message: "Unable to get data from database"
        })
    }

})


//expects user id not project id
publicRouter.get("/project/:id", async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(401).json({
            "message": "id not provided"
        })
    }

    const parsedId = parseInt(id)
    if (!parsedId) {
        return res.status(401).json({
            "message": "invalid id"
        })
    }

    try {
        const user = await prisma.project.findMany({
            where: { userId: parsedId },
            include: {
                media: true
            }
        })

        res.json({
            user
        })
    }
    catch (e) {
        res.status(500).json({
            message: "Unable to get data from database"
        })
    }

})


publicRouter.get("/achievments/:id", async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(401).json({
            "message": "id not provided"
        })
    }

    const parsedId = parseInt(id)
    if (!parsedId) {
        return res.status(401).json({
            "message": "invalid id"
        })
    }

    try {
        const user = await prisma.achievement.findMany({
            where: { userId: parsedId },
            include: {
                media: true
            }
        })

        res.json({
            user
        })
    }
    catch (e) {
        res.status(500).json({
            message: "Unable to get data from database"
        })
    }

})


publicRouter.get("/skills/:id", async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(401).json({
            "message": "id not provided"
        })
    }

    const parsedId = parseInt(id)
    if (!parsedId) {
        return res.status(401).json({
            "message": "invalid id"
        })
    }

    try {
        const user = await prisma.skill.findMany({
            where: { userId: parsedId },
           
        })

        res.json({
            user
        })
    }
    catch (e) {
        res.status(500).json({
            message: "Unable to get data from database"
        })
    }

})


GUIDELINES

- use shadcn components 
- no need of additional styling (colors or any custom componets) use default styling of shadcn
- keep it proffesional and 
- donot touch global.css
- keep aligned to the theme
- use shadcn card for (each session)

LAYOUT NEEDED
    - Each session is a card
    - default margin and padding for each session
    - use responsive designing
    1 section needed is an hero sections with 
        * User details with about session and profile image (use placeholders if images)
        * use shadcn card 
    2 Skills sections (use box )
    3 section needed is an achivement  sections
        * arrange it vertiallly and dynamicalyy each card covering empty area (Masonry Layout)
        * use icons from the internet or u can inmport it from any library
    4 Project section 
        * use large card with (collapsable style) with with horzinontal scrolling for cards
        * Use images as slide show for card