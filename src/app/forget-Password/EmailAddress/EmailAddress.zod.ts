import * as zod from "zod";

export const EmailSchema = zod
  .object({
    email: zod.email(),
  })
