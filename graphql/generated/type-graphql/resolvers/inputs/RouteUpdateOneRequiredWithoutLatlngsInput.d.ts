import { RouteCreateOrConnectWithoutLatlngsInput } from "../inputs/RouteCreateOrConnectWithoutLatlngsInput";
import { RouteCreateWithoutLatlngsInput } from "../inputs/RouteCreateWithoutLatlngsInput";
import { RouteUpdateWithoutLatlngsInput } from "../inputs/RouteUpdateWithoutLatlngsInput";
import { RouteUpsertWithoutLatlngsInput } from "../inputs/RouteUpsertWithoutLatlngsInput";
import { RouteWhereUniqueInput } from "../inputs/RouteWhereUniqueInput";
export declare class RouteUpdateOneRequiredWithoutLatlngsInput {
    create?: RouteCreateWithoutLatlngsInput | undefined;
    connectOrCreate?: RouteCreateOrConnectWithoutLatlngsInput | undefined;
    upsert?: RouteUpsertWithoutLatlngsInput | undefined;
    connect?: RouteWhereUniqueInput | undefined;
    update?: RouteUpdateWithoutLatlngsInput | undefined;
}
