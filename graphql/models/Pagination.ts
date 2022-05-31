import { Field, ObjectType, Int } from 'type-graphql'

@ObjectType()
export class Pagination {
  @Field((type) => Int)
  total!: number
  @Field((type) => Int)
  lastPage!: number
  @Field((type) => Int)
  currentPage!: number
  @Field((type) => Int)
  perPage!: number
  @Field((type) => Int, { nullable: true })
  prev!: number
  @Field((type) => Int, { nullable: true })
  next!: number
}
