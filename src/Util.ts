import { signOut } from "next-auth/react";

export async function handelLogOut() {
  await signOut({
    redirectTo: "/login",
  });
}