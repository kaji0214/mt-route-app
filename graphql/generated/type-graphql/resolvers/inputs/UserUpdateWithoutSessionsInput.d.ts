import { AccountUpdateManyWithoutUserInput } from "../inputs/AccountUpdateManyWithoutUserInput";
import { MountainUpdateManyWithoutUserInput } from "../inputs/MountainUpdateManyWithoutUserInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RouteUpdateManyWithoutUserInput } from "../inputs/RouteUpdateManyWithoutUserInput";
export declare class UserUpdateWithoutSessionsInput {
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    accounts?: AccountUpdateManyWithoutUserInput | undefined;
    routes?: RouteUpdateManyWithoutUserInput | undefined;
    mountains?: MountainUpdateManyWithoutUserInput | undefined;
}
