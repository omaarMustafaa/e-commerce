import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

const AUTH_SECRET = process.env.AUTH_SECRET || "3caf59787df9e79a01267aa5c43e863939dd9e5bbe02e3a2ef78d6273d09dd00"

async function decodeSessionToken(sessionToken: string, cookieName: string) {
  // In NextAuth v5, the salt IS the full cookie name (including __Secure- prefix)
  return decode({
    token: sessionToken,
    secret: AUTH_SECRET,
    salt: cookieName,
  })
}

async function getSessionCookie() {
  const cookie = await cookies()
  // Try secure cookie first (Vercel/HTTPS production)
  const secureName = "__Secure-authjs.session-token"
  const secureCookie = cookie.get(secureName)
  if (secureCookie?.value) {
    return { value: secureCookie.value, name: secureName }
  }
  // Fallback to plain cookie (local HTTP dev)
  const plainName = "authjs.session-token"
  const plainCookie = cookie.get(plainName)
  if (plainCookie?.value) {
    return { value: plainCookie.value, name: plainName }
  }
  return null
}

export async function getUserToken() {
  const session = await getSessionCookie()
  if (!session) return undefined
  try {
    const decoded = await decodeSessionToken(session.value, session.name)
    return decoded?.credentialsToken
  } catch {
    return undefined
  }
}

export async function getUserId() {
  const session = await getSessionCookie()
  if (!session) return null
  try {
    const decoded = await decodeSessionToken(session.value, session.name)
    return decoded?.userId as string | undefined
  } catch {
    return null
  }
}
