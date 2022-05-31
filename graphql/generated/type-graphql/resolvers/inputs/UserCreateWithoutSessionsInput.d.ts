import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { MountainCreateNestedManyWithoutUserInput } from "../inputs/MountainCreateNestedManyWithoutUserInput";
import { RouteCreateNestedManyWithoutUserInput } from "../inputs/RouteCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutSessionsInput {
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    routes?: RouteCreateNestedManyWithoutUserInput | undefined;
    mountains?: MountainCreateNestedManyWithoutUserInput | undefined;
}
