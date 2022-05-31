import { UserCreateOrConnectWithoutMountainsInput } from "../inputs/UserCreateOrConnectWithoutMountainsInput";
import { UserCreateWithoutMountainsInput } from "../inputs/UserCreateWithoutMountainsInput";
import { UserUpdateWithoutMountainsInput } from "../inputs/UserUpdateWithoutMountainsInput";
import { UserUpsertWithoutMountainsInput } from "../inputs/UserUpsertWithoutMountainsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutMountainsInput {
    create?: UserCreateWithoutMountainsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutMountainsInput | undefined;
    upsert?: UserUpsertWithoutMountainsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutMountainsInput | undefined;
}
