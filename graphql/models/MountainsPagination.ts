import { Field, ObjectType } from 'type-graphql'
import { Mountain } from '@/graphql/generated/type-graphql'
import { Pagination } from '@/graphql/models/Pagination'

@ObjectType()
export class MountainsPagination {
  @Field((type) => [Mountain])
  data!: Mountain[]

  @Field()
  meta!: Pagination
}
