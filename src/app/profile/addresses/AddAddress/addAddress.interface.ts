import * as zod from "zod"
import { addAddressSchema } from "./addAddress.zod"

export type AddAddressDataType = zod.infer<typeof addAddressSchema>
