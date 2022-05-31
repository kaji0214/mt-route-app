import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MountainUpdateManyWithoutSessionInput } from "../inputs/MountainUpdateManyWithoutSessionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSessionsInput } from "../inputs/UserUpdateOneRequiredWithoutSessionsInput";
export declare class SessionUpdateWithoutRouteInput {
    sessionToken?: StringFieldUpdateOperationsInput | undefined;
    expires?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutSessionsInput | undefined;
    Mountain?: MountainUpdateManyWithoutSessionInput | undefined;
}
