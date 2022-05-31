import { LatlngCreateManyRouteInputEnvelope } from "../inputs/LatlngCreateManyRouteInputEnvelope";
import { LatlngCreateOrConnectWithoutRouteInput } from "../inputs/LatlngCreateOrConnectWithoutRouteInput";
import { LatlngCreateWithoutRouteInput } from "../inputs/LatlngCreateWithoutRouteInput";
import { LatlngScalarWhereInput } from "../inputs/LatlngScalarWhereInput";
import { LatlngUpdateManyWithWhereWithoutRouteInput } from "../inputs/LatlngUpdateManyWithWhereWithoutRouteInput";
import { LatlngUpdateWithWhereUniqueWithoutRouteInput } from "../inputs/LatlngUpdateWithWhereUniqueWithoutRouteInput";
import { LatlngUpsertWithWhereUniqueWithoutRouteInput } from "../inputs/LatlngUpsertWithWhereUniqueWithoutRouteInput";
import { LatlngWhereUniqueInput } from "../inputs/LatlngWhereUniqueInput";
export declare class LatlngUpdateManyWithoutRouteInput {
    create?: LatlngCreateWithoutRouteInput[] | undefined;
    connectOrCreate?: LatlngCreateOrConnectWithoutRouteInput[] | undefined;
    upsert?: LatlngUpsertWithWhereUniqueWithoutRouteInput[] | undefined;
    createMany?: LatlngCreateManyRouteInputEnvelope | undefined;
    set?: LatlngWhereUniqueInput[] | undefined;
    disconnect?: LatlngWhereUniqueInput[] | undefined;
    delete?: LatlngWhereUniqueInput[] | undefined;
    connect?: LatlngWhereUniqueInput[] | undefined;
    update?: LatlngUpdateWithWhereUniqueWithoutRouteInput[] | undefined;
    updateMany?: LatlngUpdateManyWithWhereWithoutRouteInput[] | undefined;
    deleteMany?: LatlngScalarWhereInput[] | undefined;
}
