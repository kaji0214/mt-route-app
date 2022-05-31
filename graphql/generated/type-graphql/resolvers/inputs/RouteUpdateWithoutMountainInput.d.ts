import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LatlngUpdateManyWithoutRouteInput } from "../inputs/LatlngUpdateManyWithoutRouteInput";
import { SessionUpdateOneWithoutRouteInput } from "../inputs/SessionUpdateOneWithoutRouteInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutRoutesInput } from "../inputs/UserUpdateOneRequiredWithoutRoutesInput";
export declare class RouteUpdateWithoutMountainInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    time?: IntFieldUpdateOperationsInput | undefined;
    latlngs?: LatlngUpdateManyWithoutRouteInput | undefined;
    user?: UserUpdateOneRequiredWithoutRoutesInput | undefined;
    Session?: SessionUpdateOneWithoutRouteInput | undefined;
}
