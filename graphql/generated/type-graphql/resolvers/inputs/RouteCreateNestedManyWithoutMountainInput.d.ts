import { RouteCreateManyMountainInputEnvelope } from "../inputs/RouteCreateManyMountainInputEnvelope";
import { RouteCreateOrConnectWithoutMountainInput } from "../inputs/RouteCreateOrConnectWithoutMountainInput";
import { RouteCreateWithoutMountainInput } from "../inputs/RouteCreateWithoutMountainInput";
import { RouteWhereUniqueInput } from "../inputs/RouteWhereUniqueInput";
export declare class RouteCreateNestedManyWithoutMountainInput {
    create?: RouteCreateWithoutMountainInput[] | undefined;
    connectOrCreate?: RouteCreateOrConnectWithoutMountainInput[] | undefined;
    createMany?: RouteCreateManyMountainInputEnvelope | undefined;
    connect?: RouteWhereUniqueInput[] | undefined;
}
