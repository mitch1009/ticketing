import { TicketContext } from "../../context.js";

/**
 * Helper function for user endpoints.
 * @author Mitch <mitch@itthynk.com>
 */
export  class UserService {
    /**
     * Creates a user account provided the user has an email address. 
     * Aside form the email address the context has to be provided on the fly
     * @param {string} email  user email
     * @param {TicketContext} context  Ticketing context
     * @returns {Response} response
     */
    static async createUser(email: string, context: TicketContext): Promise<any> {
       try {
        // TODO: add user to the database
        const user = await context.db.user.create({data:{email}})
        // TODO: Send user verification email
        
        return {message: `created user ${user.id}` ,user, success: true}
       } catch (error) {
        console.log(error, email)
        return {message: 'user creation failed '+error, success: false}
       }
    }
    
}
