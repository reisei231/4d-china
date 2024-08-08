// import First from '@/components/first/first';

import CheckDialog from "@/components/dialog/dialog";
import First from "@/components/first/first";
import Second from "@/components/second/second";
import Third from "@/components/third/third";
import Guide from "@/components/guide/guide";
import MainModal from "@/components/MainModal";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { deleteCookies } from "./actions";

async function getServers() {
  const response = await fetch(`${process.env.ADMIN_URL}/api/servers`, {
    cache: "no-store",
  });
    const res_json = await response.json();
  const servers = res_json.servers;
  
  return servers;
}

export default async function Home(props) {  
    const servers = await getServers();
    const userId = cookies().get('userId')?.value;
    if(userId) return redirect('/connect');
  return (
    <>
          <MainModal>
    <CheckDialog servers={servers}/>
</MainModal>
<First/>
<Second/>
    <Third/>
    <Guide/>
    </>

  )
}

// export async function getServerSideProps(context) {
//   const response = await fetch(`${process.env.ADMIN_URL}/api/servers`, {
//     cache: "no-store",
//   });
//   const res_json = await response.json();
//   const servers = res_json.servers;

//   const guest = context.req.headers

//   return {
//     props: { servers, guest }, // Pass the data as props
//   };
// }