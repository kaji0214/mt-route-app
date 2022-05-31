import { RouteCreateManySessionInputEnvelope } from "../inputs/RouteCreateManySessionInputEnvelope";
import { RouteCreateOrConnectWithoutSessionInput } from "../inputs/RouteCreateOrConnectWithoutSessionInput";
import { RouteCreateWithoutSessionInput } from "../inputs/RouteCreateWithoutSessionInput";
import { RouteWhereUniqueInput } from "../inputs/RouteWhereUniqueInput";
export declare class RouteCreateNestedManyWithoutSessionInput {
    create?: RouteCreateWithoutSessionInput[] | undefined;
    connectOrCreate?: RouteCreateOrConnectWithoutSessionInput[] | undefined;
    createMany?: RouteCreateManySessionInputEnvelope | undefined;
    connect?: RouteWhereUniqueInput[] | undefined;
}
