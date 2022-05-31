import { Field, InputType } from 'type-graphql'
import { MountainCreateInput } from '@/graphql/generated/type-graphql'

@InputType()
export class MountainCreateWithSessionInput implements Partial<MountainCreateInput> {
  @Field()
  name!: string

  @Field()
  lat!: number

  @Field()
  lng!: number

  @Field()
  userId!: number
}
