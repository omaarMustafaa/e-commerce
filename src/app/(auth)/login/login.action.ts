"use server";

import { cookies } from "next/headers";
import { LoginDataType, LoginResponseType } from "./login.interface";
// `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signin`
export async function sendUserLogin(userData: LoginDataType): Promise<string> {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    },
  );

  const data: LoginResponseType = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  if (data.message == "success") {
    const cookieStore = await cookies() 
    cookieStore.set("sdf" , "dfsdf" ,{
      httpOnly : true,
      maxAge : 60 * 60 * 24 * 7 ,
      sameSite : 'strict' ,
    })
    return "User Login Successfuly";
  }

  return data.message;
}
