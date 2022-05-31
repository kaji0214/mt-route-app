import { UserCreateOrConnectWithoutRoutesInput } from "../inputs/UserCreateOrConnectWithoutRoutesInput";
import { UserCreateWithoutRoutesInput } from "../inputs/UserCreateWithoutRoutesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutRoutesInput {
    create?: UserCreateWithoutRoutesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutRoutesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
