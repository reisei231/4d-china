"use server";

import { GetGuestId } from './getGuestId';


const GetGuest = async() => {
    const userId = await GetGuestId();
    const response = await fetch(`${process.env.ADMIN_URL}/api/guests?guest_id=${userId}`,{ cache: 'no-store' });
    const resp_json = await response.json();
    const lastError = resp_json.guest?.last_error
    return lastError
}

export default GetGuest
