import { GraphQLResolveInfo } from "graphql";
import { DeleteManyMountainArgs } from "./args/DeleteManyMountainArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyMountainResolver {
    deleteManyMountain(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMountainArgs): Promise<AffectedRowsOutput>;
}
