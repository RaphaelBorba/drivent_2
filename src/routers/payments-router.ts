import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const paymentsRouter = Router()

paymentsRouter.use(authenticateToken)
    .get('')


export { paymentsRouter }