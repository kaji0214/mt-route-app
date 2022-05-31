import { MountainUpdateManyWithoutUserInput } from "../inputs/MountainUpdateManyWithoutUserInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RouteUpdateManyWithoutUserInput } from "../inputs/RouteUpdateManyWithoutUserInput";
import { SessionUpdateManyWithoutUserInput } from "../inputs/SessionUpdateManyWithoutUserInput";
export declare class UserUpdateWithoutAccountsInput {
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    sessions?: SessionUpdateManyWithoutUserInput | undefined;
    routes?: RouteUpdateManyWithoutUserInput | undefined;
    mountains?: MountainUpdateManyWithoutUserInput | undefined;
}
