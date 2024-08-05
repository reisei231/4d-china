"use server";

import { cookies } from "next/headers";

export async function SetGuestId(id) {
    cookies().set('guestId', id)
}
