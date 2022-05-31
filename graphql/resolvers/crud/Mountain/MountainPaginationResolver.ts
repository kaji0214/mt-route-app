import { Resolver, Query, Ctx, Args } from 'type-graphql'
import { createPaginator } from 'prisma-pagination'
import { Mountain, MountainWhereInput } from '@/graphql/generated/type-graphql'
import type { Context } from '@/graphql/context'
import { MountainsPagination } from '@/graphql/models/MountainsPagination'
import { MountainsPaginationArgs } from '@/graphql/resolvers/crud/Mountain/args/MountainPaginationArgs'

@Resolver(MountainsPagination)
export class MountainsPaginationResolver {
  @Query(() => MountainsPagination)
  async mountainsPagination(
    @Args()
    { page, perPage, orderBy, where, distinct }: MountainsPaginationArgs,
    @Ctx() { prisma }: Context,
  ) {
    let params = {}
    if (where) {
      params = { where: where }
    }
    if (orderBy && orderBy.length > 0) {
      params = {
        ...params,
        orderBy: orderBy.map((key, value) => ({
          key: value,
        })),
      }
    }
    if (distinct && distinct.length > 0) {
      params = {
        ...params,
        distinct: distinct.map((key) => key),
      }
    }

    const paginate = createPaginator({ perPage })
    return await paginate<Mountain, MountainWhereInput>(prisma.mountain, params, { page })
  }
}
