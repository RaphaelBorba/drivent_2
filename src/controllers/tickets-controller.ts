import { prisma } from "@/config";
import { AuthenticatedRequest } from "@/middlewares";
import { getTicketTypeByIdDB, getTicketsTypesDB, getUserTicketsDB, postTicket } from "@/repositories/tickets-repository";
import validateTicketTypeId, { checkUserEnrollment } from "@/services/tickets-service";
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
        
        if(enrollment === null) { 
            return res.sendStatus(404)
        }
        
        const userTickets = await getUserTicketsDB(enrollment.id)

        if(userTickets === null) { 
            return res.sendStatus(404)
        }
        
        res.status(200).send(userTickets)

    } catch (error) {

        console.log(error)
        res.sendStatus(404)
    }
}


export async function postTicketType(req: AuthenticatedRequest, res: Response){

    const {userId} = req
    const {body} = req

     if(validateTicketTypeId(body)) return res.sendStatus(400)

    const enrollment =await checkUserEnrollment(userId)

    
    if(enrollment === null) { 
        return res.sendStatus(404)
    }

    const ticketType = await getTicketTypeByIdDB(body.ticketTypeId)

    if(ticketType === null) return res.sendStatus(404)

    try {

        await postTicket(body, enrollment.id)
        
        const userTicket = await getUserTicketsDB(enrollment.id)

        res.status(201).send(userTicket)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}