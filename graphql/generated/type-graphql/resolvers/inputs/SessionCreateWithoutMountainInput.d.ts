import { RouteCreateNestedManyWithoutSessionInput } from "../inputs/RouteCreateNestedManyWithoutSessionInput";
import { UserCreateNestedOneWithoutSessionsInput } from "../inputs/UserCreateNestedOneWithoutSessionsInput";
export declare class SessionCreateWithoutMountainInput {
    sessionToken: string;
    expires: Date;
    user: UserCreateNestedOneWithoutSessionsInput;
    Route?: RouteCreateNestedManyWithoutSessionInput | undefined;
}
