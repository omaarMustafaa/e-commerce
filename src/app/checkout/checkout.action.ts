"use server";

import { getUserToken } from "@/lib/auth";

type CashShippingAddress = { details: string; phone: string; city: string };
type VisaShippingAddress = { details: string; phone: string; city: string };
type OrderResult = { success: boolean; message?: string; url?: string };

async function readResponse(response: Response) {
  const data = await response.json().catch(() => ({}));
  return { data, ok: response.ok };
}

export async function createCashOrder(
  cartId: string,
  shippingAddress: CashShippingAddress,
): Promise<OrderResult> {
  const token = await getUserToken();
  if (!token)
    return { success: false, message: "Please sign in to place your order" };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/orders/${encodeURIComponent(cartId)}`,
    {
      method: "POST",
      headers: { token, "Content-Type": "application/json" },
      body: JSON.stringify({ shippingAddress }),
      cache: "no-store",
    },
  );
  const { data, ok } = await readResponse(response);
  return ok
    ? { success: true, message: data.message }
    : {
        success: false,
        message: data.message || "Cash order could not be created",
      };
}

export async function createVisaCheckoutSession(
  cartId: string,
  shippingAddress: VisaShippingAddress,
  currentSiteOrigin: string,
): Promise<OrderResult> {
  const token = await getUserToken();
  if (!token) return { success: false, message: "Please sign in to continue" };

  const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!apiBaseUrl)
    return { success: false, message: "The API base URL is not configured" };
  let siteUrl: string;
  try {
    const currentOrigin = new URL(currentSiteOrigin);
    if (
      currentOrigin.protocol !== "http:" &&
      currentOrigin.protocol !== "https:"
    )
      throw new Error("Invalid site origin");
    siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.NEXTAUTH_URL ||
      currentOrigin.origin;
  } catch {
    return {
      success: false,
      message: "Could not determine the checkout return URL",
    };
  }
  const url = new URL(
    `/api/v1/orders/checkout-session/${encodeURIComponent(cartId)}`,
    apiBaseUrl,
  );
  url.searchParams.set("url", siteUrl);
  const response = await fetch(url, {
    method: "POST",
    headers: { token, "Content-Type": "application/json" },
    body: JSON.stringify({ shippingAddress }),
    cache: "no-store",
  });
  const { data, ok } = await readResponse(response);
  const checkoutUrl = data.session?.url || data.url;
  return ok && checkoutUrl
    ? { success: true, url: checkoutUrl }
    : {
        success: false,
        message: data.message || "Payment session could not be created",
      };
}
