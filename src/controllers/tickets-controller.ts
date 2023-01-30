import { AuthenticatedRequest } from "@/middlewares";
import { getTicketsTypesDB, getUserTicketsDB } from "@/repositories/tickets-repository";
import { checkUserEnrollment } from "@/services/tickets-service";
import { Response } from "express";



export async function getTypeTickets(req: AuthenticatedRequest, res: Response) {

    try {

        const typeTickets = await getTicketsTypesDB()

        return res.status(200).send(typeTickets)

    } catch (error) {

        console.log(error)
        res.sendStatus(500)

    }
}

export async function getUserTickets(req: AuthenticatedRequest, res: Response) {

    const {userId} = req
    try {
        const enrollment =await checkUserEnrollment(userId)
        
        console.log(enrollment)
        if(enrollment === null) { 
            return res.sendStatus(404)
        }
        
        const userTickets = await getUserTicketsDB(userId)
        
        res.status(200).send(userTickets)

    } catch (error) {

        console.log(error)
        res.sendStatus(404)
    }
}