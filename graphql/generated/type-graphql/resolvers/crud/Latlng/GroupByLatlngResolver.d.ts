import { GraphQLResolveInfo } from "graphql";
import { GroupByLatlngArgs } from "./args/GroupByLatlngArgs";
import { LatlngGroupBy } from "../../outputs/LatlngGroupBy";
export declare class GroupByLatlngResolver {
    groupByLatlng(ctx: any, info: GraphQLResolveInfo, args: GroupByLatlngArgs): Promise<LatlngGroupBy[]>;
}
