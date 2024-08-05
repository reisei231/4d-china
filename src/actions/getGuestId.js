"use server";

import { cookies } from "next/headers";

export async function GetGuestId() {
    const id = cookies().get('guestId')
    if (id === undefined){
        return null
    }
    return id.value
}
