import { TicketContext } from "../../context.js";

export class LocationServce {
    static getLocation = async (id: string, context: TicketContext): Promise<{ message: string, success: boolean, location: any }> => {
        try {
            const location = await context.db.location.findUnique({ where: { id }, include: { owner: { include: { tickets: true } } } });
            return { message: `New Location added for ${location.owner.name}`, success: true, location }
        } catch (error) {
            return { message: '', success: true, location }

        }
    }
}