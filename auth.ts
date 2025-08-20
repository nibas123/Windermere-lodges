import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { getErrorMessage, HttpError } from "./lib/utils";

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
                throw new HttpError("User not found", 404);
            }

          }

          return user;
          
        } catch (err) {
          console.log(err)
          throw new HttpError("something went wrong", 500)
        }
      },
    }),

    Google,
  ],
});
