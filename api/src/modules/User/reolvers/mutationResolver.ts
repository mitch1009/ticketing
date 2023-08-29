import { TicketContext } from "../../../context.js";
import { UserService } from "../userService.js";
import { UserInput, UserResolver } from "../usertypes.js";

export const UsermutationResolver: UserResolver = {
    createUser: async (_:unknown, argument:UserInput, context:TicketContext) =>
     UserService.createUser(argument.email, context),
    
}