import { Field, InputType } from 'type-graphql'
import {
  IntFieldUpdateOperationsInput,
  LatlngUpdateManyWithoutRouteInput,
  StringFieldUpdateOperationsInput,
} from '@/graphql/generated/type-graphql'

@InputType()
export class RouteUpdateWithSessionInput {
  @Field()
  name?: StringFieldUpdateOperationsInput | undefined

  @Field()
  time?: IntFieldUpdateOperationsInput | undefined

  @Field()
  userId!: number | undefined

  @Field()
  latlngs?: LatlngUpdateManyWithoutRouteInput | undefined
}
