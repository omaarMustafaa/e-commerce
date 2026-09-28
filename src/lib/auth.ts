import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function getUserToken(){
    const cookie = await cookies()
    const session_Token = cookie.get('authjs.session-token')?.value
    const realToken = await decode({
      token : session_Token ,
      secret : process.env.AUTH_SECRET || '',
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
    secret: process.env.AUTH_SECRET || "",
    salt: "authjs.session-token",
  });

  return session?.userId as string | undefined;
}
