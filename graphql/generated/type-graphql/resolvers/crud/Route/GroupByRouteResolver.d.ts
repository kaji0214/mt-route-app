import { GraphQLResolveInfo } from "graphql";
import { GroupByRouteArgs } from "./args/GroupByRouteArgs";
import { RouteGroupBy } from "../../outputs/RouteGroupBy";
export declare class GroupByRouteResolver {
    groupByRoute(ctx: any, info: GraphQLResolveInfo, args: GroupByRouteArgs): Promise<RouteGroupBy[]>;
}
