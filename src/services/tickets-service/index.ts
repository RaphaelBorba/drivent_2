import { BodyTicketTypeId } from "@/protocols";
import enrollmentRepository from "@/repositories/enrollment-repository";
import { ticketTypeIdSchema } from "@/schemas";
import { Address, Enrollment } from "@prisma/client";



export async function checkUserEnrollment(userId: number): Promise<Enrollment & {
    Address: Address[];
}> {

    const userEnrollment = await enrollmentRepository.findWithAddressByUserId(userId)

    return userEnrollment
}

export default function validateTicketTypeId(body: BodyTicketTypeId){

    const {error} = ticketTypeIdSchema.validate(body)
    
    return error
}