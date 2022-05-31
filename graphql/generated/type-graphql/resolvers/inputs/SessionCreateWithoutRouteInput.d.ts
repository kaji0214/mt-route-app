import { MountainCreateNestedManyWithoutSessionInput } from "../inputs/MountainCreateNestedManyWithoutSessionInput";
import { UserCreateNestedOneWithoutSessionsInput } from "../inputs/UserCreateNestedOneWithoutSessionsInput";
export declare class SessionCreateWithoutRouteInput {
    sessionToken: string;
    expires: Date;
    user: UserCreateNestedOneWithoutSessionsInput;
    Mountain?: MountainCreateNestedManyWithoutSessionInput | undefined;
}
