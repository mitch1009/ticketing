import { env } from "process";
import { TicketContext } from "../../context.js";
import { UsermutationResolver } from "../../modules/index.js";

export const resolvers = {
    Query: {
        hello: () => `Hello from ${env.APP_NAME}`
    },
    Mutation: {
        hello: (_:unknown, input: {name: string}, context: TicketContext) => `Hello ${input.name} from ${env.APP_NAME}`,
        ...UsermutationResolver
    }
}