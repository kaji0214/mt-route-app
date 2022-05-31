import { GraphQLResolveInfo } from "graphql";
import { CreateRouteArgs } from "./args/CreateRouteArgs";
import { Route } from "../../../models/Route";
export declare class CreateRouteResolver {
    createRoute(ctx: any, info: GraphQLResolveInfo, args: CreateRouteArgs): Promise<Route>;
}
