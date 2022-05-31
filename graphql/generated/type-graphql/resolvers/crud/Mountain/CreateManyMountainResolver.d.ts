import { GraphQLResolveInfo } from "graphql";
import { CreateManyMountainArgs } from "./args/CreateManyMountainArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyMountainResolver {
    createManyMountain(ctx: any, info: GraphQLResolveInfo, args: CreateManyMountainArgs): Promise<AffectedRowsOutput>;
}
