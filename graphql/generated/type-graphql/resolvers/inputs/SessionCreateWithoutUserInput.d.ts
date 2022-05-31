import { MountainCreateNestedManyWithoutSessionInput } from "../inputs/MountainCreateNestedManyWithoutSessionInput";
import { RouteCreateNestedManyWithoutSessionInput } from "../inputs/RouteCreateNestedManyWithoutSessionInput";
export declare class SessionCreateWithoutUserInput {
    sessionToken: string;
    expires: Date;
    Mountain?: MountainCreateNestedManyWithoutSessionInput | undefined;
    Route?: RouteCreateNestedManyWithoutSessionInput | undefined;
}
