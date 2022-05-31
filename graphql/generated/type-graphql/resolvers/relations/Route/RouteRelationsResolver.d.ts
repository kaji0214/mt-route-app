import { Latlng } from "../../../models/Latlng";
import { Mountain } from "../../../models/Mountain";
import { Route } from "../../../models/Route";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { RouteLatlngsArgs } from "./args/RouteLatlngsArgs";
export declare class RouteRelationsResolver {
    mountain(route: Route, ctx: any): Promise<Mountain>;
    latlngs(route: Route, ctx: any, args: RouteLatlngsArgs): Promise<Latlng[]>;
    user(route: Route, ctx: any): Promise<User>;
    Session(route: Route, ctx: any): Promise<Session | null>;
}
