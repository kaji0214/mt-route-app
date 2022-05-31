import { GraphQLResolveInfo } from "graphql";
import { CreateManyRouteArgs } from "./args/CreateManyRouteArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyRouteResolver {
    createManyRoute(ctx: any, info: GraphQLResolveInfo, args: CreateManyRouteArgs): Promise<AffectedRowsOutput>;
}
