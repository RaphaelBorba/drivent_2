import { getPayments } from "@/controllers/payments-controller";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const paymentsRouter = Router()

paymentsRouter.use(authenticateToken)
    .get('', getPayments)


export { paymentsRouter }