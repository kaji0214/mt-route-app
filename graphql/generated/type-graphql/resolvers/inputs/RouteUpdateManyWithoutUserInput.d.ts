import { RouteCreateManyUserInputEnvelope } from "../inputs/RouteCreateManyUserInputEnvelope";
import { RouteCreateOrConnectWithoutUserInput } from "../inputs/RouteCreateOrConnectWithoutUserInput";
import { RouteCreateWithoutUserInput } from "../inputs/RouteCreateWithoutUserInput";
import { RouteScalarWhereInput } from "../inputs/RouteScalarWhereInput";
import { RouteUpdateManyWithWhereWithoutUserInput } from "../inputs/RouteUpdateManyWithWhereWithoutUserInput";
import { RouteUpdateWithWhereUniqueWithoutUserInput } from "../inputs/RouteUpdateWithWhereUniqueWithoutUserInput";
import { RouteUpsertWithWhereUniqueWithoutUserInput } from "../inputs/RouteUpsertWithWhereUniqueWithoutUserInput";
import { RouteWhereUniqueInput } from "../inputs/RouteWhereUniqueInput";
export declare class RouteUpdateManyWithoutUserInput {
    create?: RouteCreateWithoutUserInput[] | undefined;
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: RouteUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: RouteCreateManyUserInputEnvelope | undefined;
    set?: RouteWhereUniqueInput[] | undefined;
    disconnect?: RouteWhereUniqueInput[] | undefined;
    delete?: RouteWhereUniqueInput[] | undefined;
    connect?: RouteWhereUniqueInput[] | undefined;
    update?: RouteUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: RouteUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: RouteScalarWhereInput[] | undefined;
}
