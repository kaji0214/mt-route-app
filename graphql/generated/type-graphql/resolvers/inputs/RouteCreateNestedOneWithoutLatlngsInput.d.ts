import { RouteCreateOrConnectWithoutLatlngsInput } from "../inputs/RouteCreateOrConnectWithoutLatlngsInput";
import { RouteCreateWithoutLatlngsInput } from "../inputs/RouteCreateWithoutLatlngsInput";
import { RouteWhereUniqueInput } from "../inputs/RouteWhereUniqueInput";
export declare class RouteCreateNestedOneWithoutLatlngsInput {
    create?: RouteCreateWithoutLatlngsInput | undefined;
    connectOrCreate?: RouteCreateOrConnectWithoutLatlngsInput | undefined;
    connect?: RouteWhereUniqueInput | undefined;
}
