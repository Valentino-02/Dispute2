import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import db from "./prismaDB";

const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    /*     GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }), */
  ],
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  /*   callbacks: {
    async signIn({ user }) {
      let userExists = await getUserExists(user.id)
      if (userExists) return true
      let newUser = await createUser(user)
      if (newUser) return true
      return false
    },
    jwt({ token, user }) {
      if (user) {
        return { ...token, id: user.id }
      }
      return token
    },
    async session({ token, session }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      }
    },
  }, */
};

export default authOptions;
