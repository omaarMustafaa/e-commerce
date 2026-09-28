import * as zod from "zod";

export const addAddressSchema = zod
  .object({
    name: zod.string().regex(/^[A-Za-z\u0600-\u06FF][A-Za-z\u0600-\u06FF\s-]{2,49}$/, " "),
    details: zod.string().regex(/^[A-Za-z\u0600-\u06FF][A-Za-z\u0600-\u06FF\s-]{2,49}$/, " "),
    phone: zod.string().regex(/^01[0125][0-9]{8}$/, "Must Egyption Number"),
    city: zod.string().regex(/^[A-Za-z\u0600-\u06FF\s]{2,50}$/, " "),
  })
  
