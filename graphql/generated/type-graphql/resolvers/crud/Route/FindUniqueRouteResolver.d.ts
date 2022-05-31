import { GraphQLResolveInfo } from "graphql";
import { FindUniqueRouteArgs } from "./args/FindUniqueRouteArgs";
import { Route } from "../../../models/Route";
export declare class FindUniqueRouteResolver {
    route(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRouteArgs): Promise<Route | null>;
}
