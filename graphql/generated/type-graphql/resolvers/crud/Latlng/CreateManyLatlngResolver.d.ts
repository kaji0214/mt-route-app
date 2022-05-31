import { GraphQLResolveInfo } from "graphql";
import { CreateManyLatlngArgs } from "./args/CreateManyLatlngArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyLatlngResolver {
    createManyLatlng(ctx: any, info: GraphQLResolveInfo, args: CreateManyLatlngArgs): Promise<AffectedRowsOutput>;
}
