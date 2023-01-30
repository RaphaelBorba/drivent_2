import { getTypeTickets, getUserTickets, postTicketType } from "@/controllers/tickets-controller";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const ticketsRouter = Router()

ticketsRouter.use(authenticateToken)
    .get('/types', getTypeTickets)
    .get("/", getUserTickets)
    .post("/", postTicketType)



export { ticketsRouter }