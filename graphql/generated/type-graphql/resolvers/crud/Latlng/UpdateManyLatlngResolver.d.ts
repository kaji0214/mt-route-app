import { GraphQLResolveInfo } from "graphql";
import { UpdateManyLatlngArgs } from "./args/UpdateManyLatlngArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyLatlngResolver {
    updateManyLatlng(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLatlngArgs): Promise<AffectedRowsOutput>;
}
