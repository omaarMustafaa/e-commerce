import * as zod from "zod";

export const ResetPasswordSchema = zod
  .object({
    newPassword: zod
      .string()
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must be at least 8 characters and contain uppercase, lowercase, number, and special character."
      ),
    confirmPassword: zod
      .string()
      .min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Password and Confirm Password Should Be Same",
    path: ["confirmPassword"],
  });