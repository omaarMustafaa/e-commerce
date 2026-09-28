import * as zod from "zod";

export const CodeSchema = zod
  .object({
    resetCode : zod.string().regex(/^\d{6}$/ , "Valid Code")
  })
