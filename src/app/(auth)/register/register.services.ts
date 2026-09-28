
import { sendUserRegister } from "./register.action";
import { RegisterDataType } from "./register.interface";

export async function sendDateRegister(userData: RegisterDataType) {
  return await sendUserRegister(userData);
}