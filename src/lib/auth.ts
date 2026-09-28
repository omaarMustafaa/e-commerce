import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function getUserToken(){
    const cookie = await cookies()
    const session_Token = cookie.get('authjs.session-token')?.value
    const realToken = await decode({
      token : session_Token ,
      secret : process.env.AUTH_SECRET || '3caf59787df9e79a01267aa5c43e863939dd9e5bbe02e3a2ef78d6273d09dd00',
      salt : "authjs.session-token"
    })
    return realToken?.credentialsToken
  }


  export async function getUserId() {
  const cookie = await cookies();

  const sessionToken = cookie.get("authjs.session-token")?.value;

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
