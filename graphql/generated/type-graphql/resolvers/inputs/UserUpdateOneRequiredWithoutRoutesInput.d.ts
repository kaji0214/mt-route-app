import { UserCreateOrConnectWithoutRoutesInput } from "../inputs/UserCreateOrConnectWithoutRoutesInput";
import { UserCreateWithoutRoutesInput } from "../inputs/UserCreateWithoutRoutesInput";
import { UserUpdateWithoutRoutesInput } from "../inputs/UserUpdateWithoutRoutesInput";
import { UserUpsertWithoutRoutesInput } from "../inputs/UserUpsertWithoutRoutesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutRoutesInput {
    create?: UserCreateWithoutRoutesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutRoutesInput | undefined;
    upsert?: UserUpsertWithoutRoutesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutRoutesInput | undefined;
}
