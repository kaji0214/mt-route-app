import { RouteCreateManySessionInputEnvelope } from "../inputs/RouteCreateManySessionInputEnvelope";
import { RouteCreateOrConnectWithoutSessionInput } from "../inputs/RouteCreateOrConnectWithoutSessionInput";
import { RouteCreateWithoutSessionInput } from "../inputs/RouteCreateWithoutSessionInput";
import { RouteScalarWhereInput } from "../inputs/RouteScalarWhereInput";
import { RouteUpdateManyWithWhereWithoutSessionInput } from "../inputs/RouteUpdateManyWithWhereWithoutSessionInput";
import { RouteUpdateWithWhereUniqueWithoutSessionInput } from "../inputs/RouteUpdateWithWhereUniqueWithoutSessionInput";
import { RouteUpsertWithWhereUniqueWithoutSessionInput } from "../inputs/RouteUpsertWithWhereUniqueWithoutSessionInput";
import { RouteWhereUniqueInput } from "../inputs/RouteWhereUniqueInput";
export declare class RouteUpdateManyWithoutSessionInput {
    create?: RouteCreateWithoutSessionInput[] | undefined;
    connectOrCreate?: RouteCreateOrConnectWithoutSessionInput[] | undefined;
    upsert?: RouteUpsertWithWhereUniqueWithoutSessionInput[] | undefined;
    createMany?: RouteCreateManySessionInputEnvelope | undefined;
    set?: RouteWhereUniqueInput[] | undefined;
    disconnect?: RouteWhereUniqueInput[] | undefined;
    delete?: RouteWhereUniqueInput[] | undefined;
    connect?: RouteWhereUniqueInput[] | undefined;
    update?: RouteUpdateWithWhereUniqueWithoutSessionInput[] | undefined;
    updateMany?: RouteUpdateManyWithWhereWithoutSessionInput[] | undefined;
    deleteMany?: RouteScalarWhereInput[] | undefined;
}
