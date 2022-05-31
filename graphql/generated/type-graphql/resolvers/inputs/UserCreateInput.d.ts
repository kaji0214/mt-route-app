import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { MountainCreateNestedManyWithoutUserInput } from "../inputs/MountainCreateNestedManyWithoutUserInput";
import { RouteCreateNestedManyWithoutUserInput } from "../inputs/RouteCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    routes?: RouteCreateNestedManyWithoutUserInput | undefined;
    mountains?: MountainCreateNestedManyWithoutUserInput | undefined;
}
