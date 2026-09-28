

import { LoginResponseType } from "@/app/(auth)/login/login.interface";
import { DefaultSession, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

declare module "next-auth" {
  interface User {
    tkn: string;
    id: string;
  }

  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    credentialsToken: string;
    userId: string;
  }
}

export const authJsConfig: NextAuthConfig = {
  secret: process.env.AUTH_SECRET || "3caf59787df9e79a01267aa5c43e863939dd9e5bbe02e3a2ef78d6273d09dd00",
  providers: [
    Credentials({
      name: "Loggin Fresh Cart",

      credentials: {
        email: {
          placeholder: "Enter Email",
          type: "email",
        },
        password: {
          placeholder: "Enter Password",
          type: "password",
        },
      },

      authorize: async function (credential) {
        const response = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credential),
          },
        );

        const data: LoginResponseType = await response.json();

        console.log("LOGIN DATA:", data);
        console.log("USER DATA:", data.user);

        if (!response.ok) {
          throw new Error(data.message || "Login failed");
        }

        if (data.message === "success") {
          return {
            id: data.token,
            name: data.user.name,
            email: data.user.email,
            tkn: data.token,
          };
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    jwt: function ({ token, user }) {
      if (user) {
        token.credentialsToken = user.tkn;

        const payload = JSON.parse(
          Buffer.from(user.tkn.split(".")[1], "base64").toString(),
        );

        token.userId = payload.id;
      }

      return token;
    },

    session: function ({ session, token }) {
      session.user.id = token.userId;

      return session;
    },
  },
};