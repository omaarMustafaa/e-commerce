import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

// On HTTPS (Vercel/production), NextAuth prefixes cookies with __Secure-
// On HTTP (localhost), the cookie name is plain authjs.session-token
function getSessionCookieName(): string {
  const isSecure = process.env.NEXTAUTH_URL?.startsWith("https://") ||
    process.env.VERCEL_URL !== undefined ||
    process.env.NODE_ENV === "production"
  return isSecure ? "__Secure-authjs.session-token" : "authjs.session-token"
}

export async function getUserToken(){
    const cookie = await cookies()
    const cookieName = getSessionCookieName()
    const session_Token = cookie.get(cookieName)?.value
      ?? cookie.get("authjs.session-token")?.value
    if (!session_Token) return undefined
    const realToken = await decode({
      token : session_Token ,
      secret : process.env.AUTH_SECRET || '3caf59787df9e79a01267aa5c43e863939dd9e5bbe02e3a2ef78d6273d09dd00',
      salt : cookieName.replace("__Secure-", "") // salt is always without prefix
    })
    return realToken?.credentialsToken
  }


  export async function getUserId() {
  const cookie = await cookies();
  const cookieName = getSessionCookieName()
  const sessionToken = cookie.get(cookieName)?.value
    ?? cookie.get("authjs.session-token")?.value;

  if (!sessionToken) {
    return null;
  }

  const session = await decode({
    token: sessionToken,
    secret: process.env.AUTH_SECRET || "3caf59787df9e79a01267aa5c43e863939dd9e5bbe02e3a2ef78d6273d09dd00",
    salt: "authjs.session-token",
  });

  return session?.userId as string | undefined;
}
