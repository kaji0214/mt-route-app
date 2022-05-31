import { Field, InputType } from 'type-graphql'
import { LatlngInput } from '@/graphql/resolvers/inputs/LatlngInput'

@InputType()
export class RouteCreateWithSessionInput {
  @Field()
  mountainId!: number

  @Field()
  name!: string

  @Field()
  time!: number

  @Field((type) => [LatlngInput])
  latlngs!: LatlngInput[]

  @Field()
  userId!: number
}
