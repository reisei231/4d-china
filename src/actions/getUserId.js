"use server";

import { cookies } from "next/headers";

export async function GetUserId() {
    const id = cookies().get('userId')
    if (id === undefined){
        return null
    }
    return id?.value
}
