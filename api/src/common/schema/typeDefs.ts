import { readFileSync } from "fs"

const initSchema = readFileSync("src/common/schema/init.graphql", 'utf-8')
const userSchema = readFileSync("src/modules/User/user.graphql", 'utf-8')
const ticketSchema = readFileSync("src/modules/Ticket/ticket.graphql", 'utf-8')
export const typeDefs = [
    initSchema,
    userSchema,
    ticketSchema
]