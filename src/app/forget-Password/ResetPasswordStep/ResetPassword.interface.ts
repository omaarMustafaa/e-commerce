import * as zod from "zod"
import { ResetPasswordSchema } from "./ResetPassword.zod"

export type ResetPasswordType = zod.infer<typeof ResetPasswordSchema>



export interface ResetPasswordResponse {
  statusMsg: 'success' | 'fail'
  message: 'Password Ganged Successful' | 'reset code not verified'
}
