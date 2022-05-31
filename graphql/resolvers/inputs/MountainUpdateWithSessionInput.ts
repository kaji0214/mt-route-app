import { Field, InputType } from 'type-graphql'
import {
  FloatFieldUpdateOperationsInput,
  IntFieldUpdateOperationsInput,
  MountainUpdateInput,
  StringFieldUpdateOperationsInput,
} from '@/graphql/generated/type-graphql'

@InputType()
export class MountainUpdateWithSessionInput implements Partial<MountainUpdateInput> {
  @Field()
  name?: StringFieldUpdateOperationsInput | undefined

  @Field()
  lat?: FloatFieldUpdateOperationsInput | undefined

  @Field()
  lng?: FloatFieldUpdateOperationsInput | undefined

  @Field()
  userId!: IntFieldUpdateOperationsInput | undefined
}
