import { GraphQLResolveInfo } from "graphql";
import { UpdateManyMountainArgs } from "./args/UpdateManyMountainArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyMountainResolver {
    updateManyMountain(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMountainArgs): Promise<AffectedRowsOutput>;
}
