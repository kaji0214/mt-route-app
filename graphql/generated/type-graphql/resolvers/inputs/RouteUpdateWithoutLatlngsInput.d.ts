import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MountainUpdateOneRequiredWithoutRoutesInput } from "../inputs/MountainUpdateOneRequiredWithoutRoutesInput";
import { SessionUpdateOneWithoutRouteInput } from "../inputs/SessionUpdateOneWithoutRouteInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutRoutesInput } from "../inputs/UserUpdateOneRequiredWithoutRoutesInput";
export declare class RouteUpdateWithoutLatlngsInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    time?: IntFieldUpdateOperationsInput | undefined;
    mountain?: MountainUpdateOneRequiredWithoutRoutesInput | undefined;
    user?: UserUpdateOneRequiredWithoutRoutesInput | undefined;
    Session?: SessionUpdateOneWithoutRouteInput | undefined;
}
