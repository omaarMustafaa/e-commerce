import * as zod from "zod"
import { ProfileDataSchema } from "./ProfileInfo.zod"

export type ProfileDataType = zod.infer<typeof ProfileDataSchema>
