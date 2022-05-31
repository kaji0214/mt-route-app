import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MountainUpdateManyWithoutSessionInput } from "../inputs/MountainUpdateManyWithoutSessionInput";
import { RouteUpdateManyWithoutSessionInput } from "../inputs/RouteUpdateManyWithoutSessionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSessionsInput } from "../inputs/UserUpdateOneRequiredWithoutSessionsInput";
export declare class SessionUpdateInput {
    sessionToken?: StringFieldUpdateOperationsInput | undefined;
    expires?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutSessionsInput | undefined;
    Mountain?: MountainUpdateManyWithoutSessionInput | undefined;
    Route?: RouteUpdateManyWithoutSessionInput | undefined;
}
