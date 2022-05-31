import { RouteCreateManyUserInputEnvelope } from "../inputs/RouteCreateManyUserInputEnvelope";
import { RouteCreateOrConnectWithoutUserInput } from "../inputs/RouteCreateOrConnectWithoutUserInput";
import { RouteCreateWithoutUserInput } from "../inputs/RouteCreateWithoutUserInput";
import { RouteWhereUniqueInput } from "../inputs/RouteWhereUniqueInput";
export declare class RouteCreateNestedManyWithoutUserInput {
    create?: RouteCreateWithoutUserInput[] | undefined;
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: RouteCreateManyUserInputEnvelope | undefined;
    connect?: RouteWhereUniqueInput[] | undefined;
}
