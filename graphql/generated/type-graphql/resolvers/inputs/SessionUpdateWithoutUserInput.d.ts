import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MountainUpdateManyWithoutSessionInput } from "../inputs/MountainUpdateManyWithoutSessionInput";
import { RouteUpdateManyWithoutSessionInput } from "../inputs/RouteUpdateManyWithoutSessionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SessionUpdateWithoutUserInput {
    sessionToken?: StringFieldUpdateOperationsInput | undefined;
    expires?: DateTimeFieldUpdateOperationsInput | undefined;
    Mountain?: MountainUpdateManyWithoutSessionInput | undefined;
    Route?: RouteUpdateManyWithoutSessionInput | undefined;
}
