import {PrismaClient} from "@prisma/client/index.js"
import { env } from "process"
const globalDb = globalThis as unknown as {prisma: PrismaClient}
export const prisma= globalDb.prisma || new PrismaClient()

if(env.NODE_ENV !=='production') {
    globalDb.prisma = prisma
}

