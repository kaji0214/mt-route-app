import { RouteCreateManyMountainInputEnvelope } from "../inputs/RouteCreateManyMountainInputEnvelope";
import { RouteCreateOrConnectWithoutMountainInput } from "../inputs/RouteCreateOrConnectWithoutMountainInput";
import { RouteCreateWithoutMountainInput } from "../inputs/RouteCreateWithoutMountainInput";
import { RouteScalarWhereInput } from "../inputs/RouteScalarWhereInput";
import { RouteUpdateManyWithWhereWithoutMountainInput } from "../inputs/RouteUpdateManyWithWhereWithoutMountainInput";
import { RouteUpdateWithWhereUniqueWithoutMountainInput } from "../inputs/RouteUpdateWithWhereUniqueWithoutMountainInput";
import { RouteUpsertWithWhereUniqueWithoutMountainInput } from "../inputs/RouteUpsertWithWhereUniqueWithoutMountainInput";
import { RouteWhereUniqueInput } from "../inputs/RouteWhereUniqueInput";
export declare class RouteUpdateManyWithoutMountainInput {
    create?: RouteCreateWithoutMountainInput[] | undefined;
    connectOrCreate?: RouteCreateOrConnectWithoutMountainInput[] | undefined;
    upsert?: RouteUpsertWithWhereUniqueWithoutMountainInput[] | undefined;
    createMany?: RouteCreateManyMountainInputEnvelope | undefined;
    set?: RouteWhereUniqueInput[] | undefined;
    disconnect?: RouteWhereUniqueInput[] | undefined;
    delete?: RouteWhereUniqueInput[] | undefined;
    connect?: RouteWhereUniqueInput[] | undefined;
    update?: RouteUpdateWithWhereUniqueWithoutMountainInput[] | undefined;
    updateMany?: RouteUpdateManyWithWhereWithoutMountainInput[] | undefined;
    deleteMany?: RouteScalarWhereInput[] | undefined;
}
