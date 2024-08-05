"use server";

import { cookies } from "next/headers";

export async function SetUserId(id) {
    cookies().set('userId', id)
}
