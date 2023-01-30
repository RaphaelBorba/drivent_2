import { AuthenticatedRequest } from "@/middlewares";
import { getPaymentDB } from "@/repositories/payments-repository";
import { Response } from "express";


export async function getPayments(req: AuthenticatedRequest, res: Response){

    const {userId} = req
    const {ticketId} = req.query

    if(!ticketId) return res.sendStatus(400)

    try {

        const payment = await getPaymentDB(Number(ticketId))

        if(payment === null) return res.sendStatus(404)

        res.status(200).send(payment)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}