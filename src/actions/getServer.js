"use server";

import { cookies } from "next/headers";

export async function GetServer() {
    return cookies().get('serverId')
}
