export declare interface TicketContext {
    res: any
    req: any
    user: any
    db: any
    action: () => void
}

export type mokona = {
    name: string
    email: string
    gen: ()=> string
}

export type recomendedNames = "Dineo"| "Mokoena"| "Randy"| "Pitsi"