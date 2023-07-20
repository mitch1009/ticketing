import { PrismaClient } from "@prisma/client"

export declare interface TicketContext {
    res?: any
    req?: any
    user?: any
    db?: PrismaClient
}