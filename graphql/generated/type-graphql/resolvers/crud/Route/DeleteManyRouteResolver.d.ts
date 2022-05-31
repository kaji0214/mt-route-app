import { GraphQLResolveInfo } from "graphql";
import { DeleteManyRouteArgs } from "./args/DeleteManyRouteArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyRouteResolver {
    deleteManyRoute(ctx: any, info: GraphQLResolveInfo, args: DeleteManyRouteArgs): Promise<AffectedRowsOutput>;
}
