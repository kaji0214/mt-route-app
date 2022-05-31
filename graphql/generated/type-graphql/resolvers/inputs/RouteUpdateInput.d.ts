import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LatlngUpdateManyWithoutRouteInput } from "../inputs/LatlngUpdateManyWithoutRouteInput";
import { MountainUpdateOneRequiredWithoutRoutesInput } from "../inputs/MountainUpdateOneRequiredWithoutRoutesInput";
import { SessionUpdateOneWithoutRouteInput } from "../inputs/SessionUpdateOneWithoutRouteInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutRoutesInput } from "../inputs/UserUpdateOneRequiredWithoutRoutesInput";
export declare class RouteUpdateInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    time?: IntFieldUpdateOperationsInput | undefined;
    mountain?: MountainUpdateOneRequiredWithoutRoutesInput | undefined;
    latlngs?: LatlngUpdateManyWithoutRouteInput | undefined;
    user?: UserUpdateOneRequiredWithoutRoutesInput | undefined;
    Session?: SessionUpdateOneWithoutRouteInput | undefined;
}
