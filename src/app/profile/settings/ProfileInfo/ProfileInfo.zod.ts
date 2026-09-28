import * as zod from "zod";

export const ProfileDataSchema = zod
  .object({
    name: zod.string().regex(/^[a-zA-z ]{3,20}$/, "*Please enter your name"),
    email: zod.email(),
    phone: zod.string().regex(/^01[0125][0-9]{8}$/, "Must Egyption Number"),
  })
