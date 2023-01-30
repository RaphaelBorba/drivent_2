import { prisma } from "@/config";



export async function getPaymentDB(ticketId: number) {
    
    return prisma.payment.findFirst({
        where:{ticketId}
    })
}