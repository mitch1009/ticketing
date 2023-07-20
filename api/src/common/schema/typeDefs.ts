import { readFileSync } from "fs"

const initSchema = readFileSync("src/common/schema/init.graphql", 'utf-8')
export const typeDefs = [
    initSchema
]