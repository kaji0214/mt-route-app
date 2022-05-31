import { MountainCreateOrConnectWithoutRoutesInput } from "../inputs/MountainCreateOrConnectWithoutRoutesInput";
import { MountainCreateWithoutRoutesInput } from "../inputs/MountainCreateWithoutRoutesInput";
import { MountainWhereUniqueInput } from "../inputs/MountainWhereUniqueInput";
export declare class MountainCreateNestedOneWithoutRoutesInput {
    create?: MountainCreateWithoutRoutesInput | undefined;
    connectOrCreate?: MountainCreateOrConnectWithoutRoutesInput | undefined;
    connect?: MountainWhereUniqueInput | undefined;
}
