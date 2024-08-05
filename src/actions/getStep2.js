"use server";

import { cookies } from "next/headers";

export async function GetStep2() {
    const v = cookies().get('step2')
    if (v == undefined){
        return 'true'
    }
    return v.value
}
