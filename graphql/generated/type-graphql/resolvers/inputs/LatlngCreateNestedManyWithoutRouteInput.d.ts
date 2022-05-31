import { LatlngCreateManyRouteInputEnvelope } from "../inputs/LatlngCreateManyRouteInputEnvelope";
import { LatlngCreateOrConnectWithoutRouteInput } from "../inputs/LatlngCreateOrConnectWithoutRouteInput";
import { LatlngCreateWithoutRouteInput } from "../inputs/LatlngCreateWithoutRouteInput";
import { LatlngWhereUniqueInput } from "../inputs/LatlngWhereUniqueInput";
export declare class LatlngCreateNestedManyWithoutRouteInput {
    create?: LatlngCreateWithoutRouteInput[] | undefined;
    connectOrCreate?: LatlngCreateOrConnectWithoutRouteInput[] | undefined;
    createMany?: LatlngCreateManyRouteInputEnvelope | undefined;
    connect?: LatlngWhereUniqueInput[] | undefined;
}
