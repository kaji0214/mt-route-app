import { GraphQLResolveInfo } from "graphql";
import { UpsertRouteArgs } from "./args/UpsertRouteArgs";
import { Route } from "../../../models/Route";
export declare class UpsertRouteResolver {
    upsertRoute(ctx: any, info: GraphQLResolveInfo, args: UpsertRouteArgs): Promise<Route>;
}
