import { env } from "process";
import { TicketContext } from "../../context.js";
import { UsermutationResolver } from "../../modules/index.js";
import { LocationQueryResolver } from "../../modules/Location/resolvers.js";

export const resolvers = {
    Query: {
        hello: () => `Hello from ${env.APP_NAME}`,
        ...LocationQueryResolver
    },
    Mutation: {
        hello: (_:unknown, input: {name: string}, context: TicketContext) => `Hello ${input.name} from ${env.APP_NAME}`,
        ...UsermutationResolver
    }
}