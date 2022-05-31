import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export default class MountainWithSession {
  @Field((type) => ID)
  id!: number

  @Field()
  name!: string
}
