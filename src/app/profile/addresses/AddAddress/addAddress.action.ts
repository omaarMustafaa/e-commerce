"use server";

import { getUserToken } from "@/lib/auth";
import { AddAddressDataType } from "./addAddress.interface";

export async function addAddress(address: AddAddressDataType) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/addresses`,
    {
      method: "POST",
      headers: {
        token: (await getUserToken()) as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(address),
    },
  );
  const data = await response.json();

  return data;
}
