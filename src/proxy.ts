import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decode } from "next-auth/jwt";

const AUTH_SECRET = process.env.AUTH_SECRET || "3caf59787df9e79a01267aa5c43e863939dd9e5bbe02e3a2ef78d6273d09dd00";

async function getSessionToken(req: NextRequest) {
  // On HTTPS (Vercel/production), NextAuth v5 uses __Secure- prefix
  // We try both names and decode with matching salt
  const isSecure = req.url.startsWith("https://");
  
  if (isSecure) {
    const secureCookieName = "__Secure-authjs.session-token";
    const secureCookieVal = req.cookies.get(secureCookieName)?.value;
    if (secureCookieVal) {
      try {
        return await decode({
          token: secureCookieVal,
          secret: AUTH_SECRET,
          salt: secureCookieName,
        });
      } catch {}
    }
  }

  // Fallback: plain cookie name (HTTP / localhost)
  const plainCookieName = "authjs.session-token";
  const plainCookieVal = req.cookies.get(plainCookieName)?.value;
  if (plainCookieVal) {
    try {
      return await decode({
        token: plainCookieVal,
        secret: AUTH_SECRET,
        salt: plainCookieName,
      });
    } catch {}
  }

  return null;
}

export async function proxy(req: NextRequest) {
  const pathName = req.nextUrl.pathname;

  const isAuth = pathName === "/login" || pathName === "/register";

  const token = await getSessionToken(req);

  if (isAuth) {
    if (token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  if (token) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/cart",
    "/wishlist",
    "/profile",
    "/profile/settings",
    "/profile/addresses",
    "/orders",
    "/checkout",
  ],
};
