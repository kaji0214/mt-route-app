import { SessionCreateOrConnectWithoutMountainInput } from "../inputs/SessionCreateOrConnectWithoutMountainInput";
import { SessionCreateWithoutMountainInput } from "../inputs/SessionCreateWithoutMountainInput";
import { SessionUpdateWithoutMountainInput } from "../inputs/SessionUpdateWithoutMountainInput";
import { SessionUpsertWithoutMountainInput } from "../inputs/SessionUpsertWithoutMountainInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";
export declare class SessionUpdateOneWithoutMountainInput {
    create?: SessionCreateWithoutMountainInput | undefined;
    connectOrCreate?: SessionCreateOrConnectWithoutMountainInput | undefined;
    upsert?: SessionUpsertWithoutMountainInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: SessionWhereUniqueInput | undefined;
    update?: SessionUpdateWithoutMountainInput | undefined;
}
