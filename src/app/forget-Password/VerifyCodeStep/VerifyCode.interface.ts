import * as zod from "zod"
import { CodeSchema } from "./VerifyCode.zod"

export type VerifyCodeType = zod.infer<typeof CodeSchema>


export interface VerifyCodeResponse {
  statusMsg: 'success' | 'fail'
  message: '' | 'Reset code is invalid or has expired' 
}
