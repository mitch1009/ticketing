import { TicketContext } from "../../context.ts"

export declare interface UserResolver {
    createUser: (parent:any ,args:UserInput, context: TicketContext) => any,
}
export interface UserInput {
    email: string
}

export declare interface Response {
    message: string
    success: boolean
}