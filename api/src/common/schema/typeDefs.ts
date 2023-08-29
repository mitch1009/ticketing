import { readFileSync } from "fs"

const initSchema = readFileSync("graphql/init.graphql", 'utf-8')
const userSchema = readFileSync("graphql/user.graphql", 'utf-8')
const ticketSchema = readFileSync("graphql/ticket.graphql", 'utf-8')
export const typeDefs = [
    initSchema,
    userSchema,
    ticketSchema
]