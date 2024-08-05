"use server";

import { cookies } from "next/headers";

export async function SetServer(id) {
    cookies().set('serverId', id)
}
