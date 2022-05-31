import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { RouteUpdateManyWithoutSessionInput } from "../inputs/RouteUpdateManyWithoutSessionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSessionsInput } from "../inputs/UserUpdateOneRequiredWithoutSessionsInput";
export declare class SessionUpdateWithoutMountainInput {
    sessionToken?: StringFieldUpdateOperationsInput | undefined;
    expires?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutSessionsInput | undefined;
    Route?: RouteUpdateManyWithoutSessionInput | undefined;
}
