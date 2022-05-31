import { Field, InputType } from 'type-graphql'

@InputType()
export class LatlngInput {
  @Field()
  lat!: number

  @Field()
  lng!: number
}
