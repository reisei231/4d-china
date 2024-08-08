"use server";

import { cookies } from "next/headers";

export async function SetServer(id) {
    "use server"
    cookies().set('serverId', id)
}
