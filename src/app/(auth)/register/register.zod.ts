import * as zod from "zod";

export const registerSchema = zod
  .object({
    name: zod.string().regex(/^[a-zA-z ]{3,20}$/, "*Please enter your name"),
    email: zod.email(),
    password: zod
      .string()
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must be at least 8 characters and contain uppercase, lowercase, number, and special character.",
      ),
    rePassword: zod
      .string()
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Enter Valid Repassword",
      ),
    phone: zod.string().regex(/^01[0125][0-9]{8}$/, "Must Egyption Number"),
  })
  .refine(
    ({ password, rePassword }) => {
      if (password === rePassword) {
        return true;
      }
    },
    {
      error: "Password and Confirm Password Should Be Same",
      path: ["rePassword"],
    },
  );
