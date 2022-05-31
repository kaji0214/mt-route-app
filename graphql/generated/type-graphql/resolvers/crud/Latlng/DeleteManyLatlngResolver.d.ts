import { GraphQLResolveInfo } from "graphql";
import { DeleteManyLatlngArgs } from "./args/DeleteManyLatlngArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyLatlngResolver {
    deleteManyLatlng(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLatlngArgs): Promise<AffectedRowsOutput>;
}
