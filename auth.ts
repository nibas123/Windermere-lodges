import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getErrorMessage } from "./lib/utils";

const prisma = new PrismaClient();

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          return null;
        }

        const { email } = credentials;

        try {
          const user = await prisma.user.findFirst({
            where: {
              email,
            },
          });
          if (user) {
            if (user?.password === credentials.password) {
              return user
            }else{
                throw new Error("User not found");
            }

          }

          return user;
        } catch (err) {
          throw new Error(getErrorMessage(err));
        }
      },
    }),

    Google,
  ],
  adapter: PrismaAdapter(prisma),
});
