import { ArgsType, Field, Int } from 'type-graphql'
import { FindManyMountainArgs } from '@/graphql/generated/type-graphql'

@ArgsType()
export class MountainsPaginationArgs extends FindManyMountainArgs {
  @Field((type) => Int, { nullable: true })
  perPage: number = 20

  @Field((type) => Int, { nullable: true })
  page: number = 1
}
