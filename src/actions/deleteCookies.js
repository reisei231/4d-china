'use server'
 
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function deleteCookies() {
    cookies().delete('userId')
    cookies().delete('serverId')
    return redirect('/')
}