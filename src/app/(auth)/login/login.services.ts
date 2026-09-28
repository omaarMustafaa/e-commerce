import { sendUserLogin } from "./login.action";
import { LoginDataType } from "./login.interface";


export async function sendDateLogin(userData: LoginDataType) {
  const res = await sendUserLogin(userData)
  if(res === "User Login Successfuly"){
    return res
  }
  throw new Error(res)
}
