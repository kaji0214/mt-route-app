import { Arg, Ctx, Mutation, Resolver, Authorized, UseMiddleware } from 'type-graphql'
import type { Context } from '@/graphql/context'
import { Mountain, MountainWhereUniqueInput } from '@/graphql/generated/type-graphql'
import { MountainCreateWithSessionInput } from '@/graphql/resolvers/inputs/MountainCreateWithSessionInput'
import { MountainUpdateWithSessionInput } from '@/graphql/resolvers/inputs/MountainUpdateWithSessionInput'
import { UserAuthMiddleware } from '@/graphql/middlewares/UserAuthMiddleware'
import { MountainDeleteWithSessionInput } from '@/graphql/resolvers/inputs/MountainDeleteWithSessionInput'

@Resolver(Mountain)
export class MountainWithSessionResolver {
  @Mutation((returns) => Mountain)
  @Authorized()
  @UseMiddleware(UserAuthMiddleware)
  async createMountainWithSession(
    @Arg('data') data: MountainCreateWithSessionInput,
    @Ctx() { prisma, session }: Context,
  ): Promise<Mountain> {
    const { name, lat, lng } = data
    return await prisma.mountain.create({
      data: {
        name,
        lat,
        lng,
        userId: session!.user!.id,
      },
    })
  }

  @Mutation((returns) => Mountain)
  @Authorized()
  @UseMiddleware(UserAuthMiddleware)
  async updateMountainWithSession(
    @Arg('where') where: MountainWhereUniqueInput,
    @Arg('data') data: MountainUpdateWithSessionInput,
    @Ctx() { prisma }: Context,
  ): Promise<Mountain> {
    return await prisma.mountain.update({
      data,
      where,
    })
  }

  @Mutation((returns) => Mountain)
  @Authorized()
  @UseMiddleware(UserAuthMiddleware)
  async deleteMountainWithSession(
    @Arg('where') where: MountainWhereUniqueInput,
    @Arg('data') data: MountainDeleteWithSessionInput,
    @Ctx() { prisma }: Context,
  ): Promise<Mountain> {
    return await prisma.mountain.delete({
      where,
    })
  }
}
