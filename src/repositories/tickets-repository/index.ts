import { prisma } from "@/config";
import { Ticket, TicketType } from "@prisma/client";
import { BodyTicketTypeId } from '@/protocols'

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

export async function postTicket(body: BodyTicketTypeId, enrollmentId: number){

    return prisma.ticket.create({
        data:{
            status:"RESERVED",
            ticketTypeId: body.ticketTypeId,
            enrollmentId
            
        }
    })
}

export async function getTicketTypeByIdDB(ticketTypeId: number): Promise<TicketType>{

    const promise = prisma.ticketType.findFirst({
        where:{id:ticketTypeId}
    })
    return promise
}