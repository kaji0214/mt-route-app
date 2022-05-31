import { RouteCreateInput } from "../../../inputs/RouteCreateInput";
import { RouteUpdateInput } from "../../../inputs/RouteUpdateInput";
import { RouteWhereUniqueInput } from "../../../inputs/RouteWhereUniqueInput";
export declare class UpsertRouteArgs {
    where: RouteWhereUniqueInput;
    create: RouteCreateInput;
    update: RouteUpdateInput;
}
