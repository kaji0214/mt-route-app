import { SessionCreateOrConnectWithoutRouteInput } from "../inputs/SessionCreateOrConnectWithoutRouteInput";
import { SessionCreateWithoutRouteInput } from "../inputs/SessionCreateWithoutRouteInput";
import { SessionUpdateWithoutRouteInput } from "../inputs/SessionUpdateWithoutRouteInput";
import { SessionUpsertWithoutRouteInput } from "../inputs/SessionUpsertWithoutRouteInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";
export declare class SessionUpdateOneWithoutRouteInput {
    create?: SessionCreateWithoutRouteInput | undefined;
    connectOrCreate?: SessionCreateOrConnectWithoutRouteInput | undefined;
    upsert?: SessionUpsertWithoutRouteInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: SessionWhereUniqueInput | undefined;
    update?: SessionUpdateWithoutRouteInput | undefined;
}
