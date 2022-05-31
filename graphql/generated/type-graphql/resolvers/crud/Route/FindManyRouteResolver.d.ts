import { GraphQLResolveInfo } from "graphql";
import { FindManyRouteArgs } from "./args/FindManyRouteArgs";
import { Route } from "../../../models/Route";
export declare class FindManyRouteResolver {
    routes(ctx: any, info: GraphQLResolveInfo, args: FindManyRouteArgs): Promise<Route[]>;
}
