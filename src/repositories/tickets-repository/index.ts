import { prisma } from "@/config";
import { Ticket, TicketType } from "@prisma/client";

export async function getTicketsTypesDB(): Promise<TicketType[]> {

    const promise = prisma.ticketType.findMany()
    return promise
}

export async function getUserTicketsDB(enrollmentId: number): Promise<Ticket> {

    const promise = prisma.ticket.findFirst({ 
        where: { enrollmentId },
        include:{
            TicketType: true
        }
     });
    return promise
}