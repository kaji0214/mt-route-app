import { GraphQLResolveInfo } from "graphql";
import { DeleteRouteArgs } from "./args/DeleteRouteArgs";
import { Route } from "../../../models/Route";
export declare class DeleteRouteResolver {
    deleteRoute(ctx: any, info: GraphQLResolveInfo, args: DeleteRouteArgs): Promise<Route | null>;
}
