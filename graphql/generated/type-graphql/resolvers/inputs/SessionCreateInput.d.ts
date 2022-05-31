import { MountainCreateNestedManyWithoutSessionInput } from "../inputs/MountainCreateNestedManyWithoutSessionInput";
import { RouteCreateNestedManyWithoutSessionInput } from "../inputs/RouteCreateNestedManyWithoutSessionInput";
import { UserCreateNestedOneWithoutSessionsInput } from "../inputs/UserCreateNestedOneWithoutSessionsInput";
export declare class SessionCreateInput {
    sessionToken: string;
    expires: Date;
    user: UserCreateNestedOneWithoutSessionsInput;
    Mountain?: MountainCreateNestedManyWithoutSessionInput | undefined;
    Route?: RouteCreateNestedManyWithoutSessionInput | undefined;
}
