import { TicketContext } from "../../context.js";

export  class UserService {
    static async createUser(email: string, context: TicketContext): Promise<any> {
       try {
        return {message: 'created user ', success: false}
       } catch (error) {
        return {message: 'user creation failed ', success: false}
       }
    }
    
}
