"use server"

import First from "@/components/first/first";
import MainModal from "@/components/MainModal";
import VerifDialog from "@/components/verifDialog/verifDialog";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function ConnectPage() {
  const userId = cookies().get('userId')?.value;
  if(!userId) return redirect('/')
  const response = await fetch(`${process.env.ADMIN_URL}/api/guests?guest_id=${userId}`,{ cache: 'no-store' });
    const user = await response.json();

    return (<>
      <MainModal forceOpen={true}>
        <VerifDialog user={user}/>
      </MainModal>
      <First/>
    </>)
}