import { UserCreateOrConnectWithoutMountainsInput } from "../inputs/UserCreateOrConnectWithoutMountainsInput";
import { UserCreateWithoutMountainsInput } from "../inputs/UserCreateWithoutMountainsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutMountainsInput {
    create?: UserCreateWithoutMountainsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutMountainsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
