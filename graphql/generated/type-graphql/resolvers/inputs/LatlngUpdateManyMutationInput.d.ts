import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
export declare class LatlngUpdateManyMutationInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    lat?: FloatFieldUpdateOperationsInput | undefined;
    lng?: FloatFieldUpdateOperationsInput | undefined;
}
