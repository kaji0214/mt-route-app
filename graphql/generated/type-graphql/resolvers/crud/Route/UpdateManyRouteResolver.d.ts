import { GraphQLResolveInfo } from "graphql";
import { UpdateManyRouteArgs } from "./args/UpdateManyRouteArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyRouteResolver {
    updateManyRoute(ctx: any, info: GraphQLResolveInfo, args: UpdateManyRouteArgs): Promise<AffectedRowsOutput>;
}
