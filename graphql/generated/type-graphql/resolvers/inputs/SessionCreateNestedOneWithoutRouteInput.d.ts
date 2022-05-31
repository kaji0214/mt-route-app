import { SessionCreateOrConnectWithoutRouteInput } from "../inputs/SessionCreateOrConnectWithoutRouteInput";
import { SessionCreateWithoutRouteInput } from "../inputs/SessionCreateWithoutRouteInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";
export declare class SessionCreateNestedOneWithoutRouteInput {
    create?: SessionCreateWithoutRouteInput | undefined;
    connectOrCreate?: SessionCreateOrConnectWithoutRouteInput | undefined;
    connect?: SessionWhereUniqueInput | undefined;
}
