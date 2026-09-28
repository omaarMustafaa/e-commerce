"use server"
import type { UserOrdersResponse } from "./orders.interface";

export async function getUserOrders(userId :string): Promise<UserOrdersResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/orders/user/${userId}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user orders");
  }

  const data: UserOrdersResponse = await response.json();
  return data;
}