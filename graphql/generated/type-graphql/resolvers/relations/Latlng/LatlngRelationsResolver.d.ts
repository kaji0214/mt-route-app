import { Latlng } from "../../../models/Latlng";
import { Route } from "../../../models/Route";
export declare class LatlngRelationsResolver {
    route(latlng: Latlng, ctx: any): Promise<Route>;
}
