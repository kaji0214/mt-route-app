import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '../../../prisma/lib'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session, user }) {
      session.user = user
      return session
    },
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
})
