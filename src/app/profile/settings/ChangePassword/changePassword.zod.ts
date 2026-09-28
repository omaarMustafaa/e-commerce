import * as zod from "zod";

export const ChangePasswordSchema = zod
  .object({
    currentPassword: zod
      .string()
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        " "
      ),
    password: zod
      .string()
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        " "
      ),
    rePassword: zod
      .string()
      .min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Password and Confirm Password Should Be Same",
    path: ["rePassword"],
  });