import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { RouteCreateNestedManyWithoutUserInput } from "../inputs/RouteCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutMountainsInput {
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    routes?: RouteCreateNestedManyWithoutUserInput | undefined;
}
