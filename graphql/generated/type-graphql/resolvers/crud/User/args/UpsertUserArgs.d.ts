import { UserCreateInput } from "../../../inputs/UserCreateInput";
import { UserUpdateInput } from "../../../inputs/UserUpdateInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
export declare class UpsertUserArgs {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
}
