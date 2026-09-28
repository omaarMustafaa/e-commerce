"use server";

import { getUserToken } from "@/lib/auth";

export async function getAllAddresses() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/addresses`,
    {
      method: "GET",
      headers: {
        token: (await getUserToken()) as string,
        "Content-Type": "application/json",
      },
    },
  );
  const data = await response.json();
  return data.data;
}

export async function deleteAddress(id:string){
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/addresses/${id}`,
    {
      method: "DELETE",
      headers: {
        token: (await getUserToken()) as string,
        "Content-Type": "application/json",
      },
    },
  );
  const data = await response.json();
  return data.data;
}
