import { SessionCreateOrConnectWithoutMountainInput } from "../inputs/SessionCreateOrConnectWithoutMountainInput";
import { SessionCreateWithoutMountainInput } from "../inputs/SessionCreateWithoutMountainInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";
export declare class SessionCreateNestedOneWithoutMountainInput {
    create?: SessionCreateWithoutMountainInput | undefined;
    connectOrCreate?: SessionCreateOrConnectWithoutMountainInput | undefined;
    connect?: SessionWhereUniqueInput | undefined;
}
