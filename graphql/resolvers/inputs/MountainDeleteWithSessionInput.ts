import { Field, InputType } from 'type-graphql'

@InputType()
export class MountainDeleteWithSessionInput {
  @Field()
  userId!: number
}
