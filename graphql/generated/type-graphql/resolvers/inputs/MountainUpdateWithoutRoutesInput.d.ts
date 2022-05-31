import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { SessionUpdateOneWithoutMountainInput } from "../inputs/SessionUpdateOneWithoutMountainInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMountainsInput } from "../inputs/UserUpdateOneRequiredWithoutMountainsInput";
export declare class MountainUpdateWithoutRoutesInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    lat?: FloatFieldUpdateOperationsInput | undefined;
    lng?: FloatFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutMountainsInput | undefined;
    Session?: SessionUpdateOneWithoutMountainInput | undefined;
}
