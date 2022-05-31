import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { RouteUpdateManyWithoutMountainInput } from "../inputs/RouteUpdateManyWithoutMountainInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMountainsInput } from "../inputs/UserUpdateOneRequiredWithoutMountainsInput";
export declare class MountainUpdateWithoutSessionInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    lat?: FloatFieldUpdateOperationsInput | undefined;
    lng?: FloatFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutMountainsInput | undefined;
    routes?: RouteUpdateManyWithoutMountainInput | undefined;
}
