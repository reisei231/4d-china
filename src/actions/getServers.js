"use server";

import { cookies } from "next/headers";

export async function GetServers() {
  const response = await fetch(`${process.env.ADMIN_URL}/api/servers`, {
    cache: "no-store",
  });
  const res_json = await response.json();
  const servers = res_json.servers;
  return servers
}
