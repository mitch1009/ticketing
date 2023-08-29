import { TicketContext } from "../../context.js";
import { LocationServce } from "./LocationServce.js";

export const LocationQueryResolver= {
    getLocation: (_:unknown, data:{id:string}, context: TicketContext) => LocationServce.getLocation(data.id,context)
}