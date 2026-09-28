import * as zod from "zod"
import { EmailSchema } from "./EmailAddress.zod"

export type EmailAddressType = zod.infer<typeof EmailSchema>


export interface EmailResponse {
  statusMsg: 'success' | 'fail'
  message: 'Reset code sent to your email' | 'There is no user registered with this email address  om246820035@gmail.com'
}
