import { PrismaClient } from '@prisma/client'
import { Session } from 'next-auth'

type Context = {
  prisma: PrismaClient
  session: Session | null
}

export type { Context }
