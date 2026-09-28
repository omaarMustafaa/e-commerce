import * as zod from "zod"
import { ChangePasswordSchema } from "./changePassword.zod"

export type ChangePasswordType = zod.infer<typeof ChangePasswordSchema>



export interface ChangePasswordResponse {
  statusMsg: 'success' | 'fail'
  message: 'Password Ganged Successful' | 'reset code not verified'
}
