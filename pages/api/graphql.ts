import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-micro'
import { NextApiRequest, NextApiResponse } from 'next'
import 'reflect-metadata'
import { prisma } from '../../prisma/lib'
import { buildSchema } from 'type-graphql'
import {
  MountainRelationsResolver,
  MountainCrudResolver,
  RouteRelationsResolver,
  RouteCrudResolver,
} from '@/graphql/generated/type-graphql'
import { customAuthChecker } from '@/graphql/AuchChecker'
import { getSession } from 'next-auth/react'
import { MountainsPaginationResolver } from '@/graphql/resolvers/crud/Mountain/MountainPaginationResolver'
import { MountainWithSessionResolver } from '@/graphql/resolvers/crud/Mountain/MountainWithSessionResolver'
import { RouteWithSessionResolver } from '@/graphql/resolvers/crud/Route/RouteWithSessionResolver'

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', 'https://studio.apollographql.com')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  const schema = await buildSchema({
    resolvers: [
      MountainRelationsResolver,
      MountainCrudResolver,
      RouteRelationsResolver,
      RouteCrudResolver,
      MountainsPaginationResolver,
      MountainWithSessionResolver,
      RouteWithSessionResolver,
    ],
    validate: false,
    authChecker: customAuthChecker,
  })

  const session = await getSession({ req })

  const apolloServer = new ApolloServer({
    schema: schema,
    context: () => ({ prisma, session: session }),
  })
  const startServer = apolloServer.start()

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export default handler
