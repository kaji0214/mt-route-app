import { GraphQLResolveInfo } from "graphql";
import { UpdateRouteArgs } from "./args/UpdateRouteArgs";
import { Route } from "../../../models/Route";
export declare class UpdateRouteResolver {
    updateRoute(ctx: any, info: GraphQLResolveInfo, args: UpdateRouteArgs): Promise<Route | null>;
}
