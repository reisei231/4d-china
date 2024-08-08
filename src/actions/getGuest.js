"use server";

import { cookies } from 'next/headers';


const GetGuest = async() => {
    const userId = cookies().get('userId').value
    const response = await fetch(`${process.env.ADMIN_URL}/api/guests?guest_id=${userId}`,{ cache: 'no-store' });
    const user = await response.json();
    console.log(user)
    const lastError = user.guest?.last_error
    return lastError
}

export default GetGuest
