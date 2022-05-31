import { Arg, Ctx, Mutation, Resolver, Authorized, UseMiddleware } from 'type-graphql'
import type { Context } from '@/graphql/context'
import { Route, RouteWhereUniqueInput } from '@/graphql/generated/type-graphql'
import { UserAuthMiddleware } from '@/graphql/middlewares/UserAuthMiddleware'
import { RouteCreateWithSessionInput } from '@/graphql/resolvers/inputs/RouteCreateWithSessionInput'
import { RouteDeleteWithSessionInput } from '@/graphql/resolvers/inputs/RouteDeleteWithSessionInput'
import { RouteUpdateWithSessionInput } from '@/graphql/resolvers/inputs/RouteUpdateWithSessionInput'

@Resolver(Route)
export class RouteWithSessionResolver {
  @Mutation((returns) => Route)
  @Authorized()
  @UseMiddleware(UserAuthMiddleware)
  async createRouteWithSession(
    @Arg('data') data: RouteCreateWithSessionInput,
    @Ctx() { prisma }: Context,
  ): Promise<Route> {
    const { name, time, mountainId, latlngs, userId } = data
    return await prisma.route.create({
      data: {
        name,
        time,
        mountainId,
        latlngs: {
          createMany: {
            data: latlngs,
          },
        },
        userId,
      },
    })
  }

  @Mutation((returns) => Route)
  @Authorized()
  @UseMiddleware(UserAuthMiddleware)
  async updateRouteWithSession(
    @Arg('where') where: RouteWhereUniqueInput,
    @Arg('data') data: RouteUpdateWithSessionInput,
    @Ctx() { prisma }: Context,
  ): Promise<Route> {
    const route = await prisma.route.findUnique({
      where,
      include: {
        latlngs: true,
      },
    })
    if (!route) throw new Error('route was not found')

    await prisma.latlng.deleteMany({
      where: {
        routeId: where.id,
      },
    })
    return await prisma.route.update({
      data,
      where,
    })
  }

  @Mutation((returns) => Route)
  @Authorized()
  @UseMiddleware(UserAuthMiddleware)
  async deleteRouteWithSession(
    @Arg('where') where: RouteWhereUniqueInput,
    @Arg('data') data: RouteDeleteWithSessionInput,
    @Ctx() { prisma }: Context,
  ): Promise<Route> {
    const deleteLnglngs = await prisma.latlng.deleteMany({
      where: {
        routeId: where.id,
      },
    })
    return await prisma.route.delete({
      where,
    })
  }
}
