"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { deleteCookies } from "@/actions/deleteCookies";

export async function createGuest(){
  "user server"
  const date = new Date();
  const cookie = cookies()

  const serverId = cookie.get('serverId')?.value;
  const userIdCookie = cookie.get('userId')?.value;
  if(!serverId) return redirect('/');
  if(userIdCookie) return redirect('/connect');
  
    const userId = `${date.getMinutes() + date.getSeconds() + 421452}`;
    if (guestId != null){
      return null
    }
    
      
      const response = await fetch(`${process.env.ADMIN_URL}/api/guests`, {
          method: 'POST',
          body: JSON.stringify({serverId: +serverId,designId:userId})
        })
      const {guest} = await response.json()
      cookies().set('userId', guest.id)
      return guest
      
}

