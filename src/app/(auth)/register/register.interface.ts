import * as zod from "zod"
import { registerSchema } from "./register.zod"

export type RegisterDataType = zod.infer<typeof registerSchema>
