import enrollmentRepository from "@/repositories/enrollment-repository";
import { Address, Enrollment } from "@prisma/client";



export async function checkUserEnrollment(userId: number): Promise<Enrollment & {
    Address: Address[];
}> {

    const userEnrollment = await enrollmentRepository.findWithAddressByUserId(userId)

    return userEnrollment
}