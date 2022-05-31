import { AccountUpdateManyWithoutUserInput } from "../inputs/AccountUpdateManyWithoutUserInput";
import { MountainUpdateManyWithoutUserInput } from "../inputs/MountainUpdateManyWithoutUserInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SessionUpdateManyWithoutUserInput } from "../inputs/SessionUpdateManyWithoutUserInput";
export declare class UserUpdateWithoutRoutesInput {
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    accounts?: AccountUpdateManyWithoutUserInput | undefined;
    sessions?: SessionUpdateManyWithoutUserInput | undefined;
    mountains?: MountainUpdateManyWithoutUserInput | undefined;
}
