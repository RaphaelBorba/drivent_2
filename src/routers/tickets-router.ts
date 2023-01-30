import { getTypeTickets, getUserTickets } from "@/controllers/tickets-controller";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const ticketsRouter = Router()

ticketsRouter.get('/types', authenticateToken, getTypeTickets)
    .get("/", authenticateToken, getUserTickets)


export { ticketsRouter }