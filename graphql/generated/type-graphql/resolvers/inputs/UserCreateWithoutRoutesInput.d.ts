import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { MountainCreateNestedManyWithoutUserInput } from "../inputs/MountainCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutRoutesInput {
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    mountains?: MountainCreateNestedManyWithoutUserInput | undefined;
}
