'use server'

import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

export async function SetStep(val) {
    cookies().set('step2', val)
    redirect("/?modal=true&step=2");
}
