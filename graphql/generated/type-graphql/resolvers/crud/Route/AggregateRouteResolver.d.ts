import { GraphQLResolveInfo } from "graphql";
import { AggregateRouteArgs } from "./args/AggregateRouteArgs";
import { AggregateRoute } from "../../outputs/AggregateRoute";
export declare class AggregateRouteResolver {
    aggregateRoute(ctx: any, info: GraphQLResolveInfo, args: AggregateRouteArgs): Promise<AggregateRoute>;
}
