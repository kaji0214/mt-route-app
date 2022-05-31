import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { RouteUpdateManyWithoutMountainInput } from "../inputs/RouteUpdateManyWithoutMountainInput";
import { SessionUpdateOneWithoutMountainInput } from "../inputs/SessionUpdateOneWithoutMountainInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class MountainUpdateWithoutUserInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    lat?: FloatFieldUpdateOperationsInput | undefined;
    lng?: FloatFieldUpdateOperationsInput | undefined;
    routes?: RouteUpdateManyWithoutMountainInput | undefined;
    Session?: SessionUpdateOneWithoutMountainInput | undefined;
}
