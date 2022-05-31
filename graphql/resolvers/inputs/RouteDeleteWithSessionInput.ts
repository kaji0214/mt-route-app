import { Field, InputType } from 'type-graphql'

@InputType()
export class RouteDeleteWithSessionInput {
  @Field()
  userId!: number
}
