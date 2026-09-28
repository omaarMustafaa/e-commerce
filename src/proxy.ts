import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(req: NextRequest) {
  const pathName = req.nextUrl.pathname;

  const isAuth = pathName === "/login" || pathName === "/register";

  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });

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
