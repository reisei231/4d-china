"use server";

import { GetServer } from "./getServer"
import { GetUserId } from "./getUserId";
import { GetGuestId } from "./getGuestId";
import { SetGuestId } from "./setGuestId";

const CreateGuest = async () => {
  const guestId = await GetGuestId()
  if (guestId != null){
    return null
  }
    const serverCookie = await GetServer();
    const userId = await GetUserId();
    const response = await fetch(`${process.env.ADMIN_URL}/api/guests`, {
        method: 'POST',
        body: JSON.stringify({serverId:serverCookie.value,designId:userId})
      });
    const newGuest = await response.json();
    await SetGuestId(newGuest.guest.id)
    return newGuest
}

export default CreateGuest
