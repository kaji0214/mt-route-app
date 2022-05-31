import { GraphQLResolveInfo } from "graphql";
import { FindFirstRouteArgs } from "./args/FindFirstRouteArgs";
import { Route } from "../../../models/Route";
export declare class FindFirstRouteResolver {
    findFirstRoute(ctx: any, info: GraphQLResolveInfo, args: FindFirstRouteArgs): Promise<Route | null>;
}
