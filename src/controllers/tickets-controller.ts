import { AuthenticatedRequest } from "@/middlewares";
import { getTicketsTypesDB, getUserTicketsDB } from "@/repositories/tickets-repository";
import { Response } from "express";



export async function getTypeTickets(req: AuthenticatedRequest, res: Response) {

    try {

        const typeTickets = getTicketsTypesDB()
        return res.status(200).send(typeTickets)

    } catch (error) {

        console.log(error)
        res.sendStatus(500)

    }
}

export async function getUserTickets(req: AuthenticatedRequest, res: Response) {

    const {userId} = req
    try {

        const userTickets = getUserTicketsDB(userId)
        res.status(200).send(userTickets)

    } catch (error) {

        console.log(error)
        res.sendStatus(500)
    }
}