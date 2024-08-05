'use server'
 
import { cookies } from "next/headers";

export async function deleteCookies() {
    cookies().delete('guestId')
    cookies().delete('userId')
    cookies().delete('serverId')
    cookies().delete('step2')
}