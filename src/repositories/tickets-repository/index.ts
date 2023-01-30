import { prisma } from "@/config";
import { Ticket, TicketType } from "@prisma/client";

export async function getTicketsTypesDB(): Promise<TicketType[]> {

    const promise = prisma.ticketType.findMany()
    return promise
}

export async function getUserTicketsDB(userId: number): Promise<Ticket[]> {

    const promise = prisma.ticket.findMany({ where: { id: userId } });
    return promise
}