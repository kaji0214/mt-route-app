import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { RouteUpdateOneRequiredWithoutLatlngsInput } from "../inputs/RouteUpdateOneRequiredWithoutLatlngsInput";
export declare class LatlngUpdateInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    lat?: FloatFieldUpdateOperationsInput | undefined;
    lng?: FloatFieldUpdateOperationsInput | undefined;
    route?: RouteUpdateOneRequiredWithoutLatlngsInput | undefined;
}
