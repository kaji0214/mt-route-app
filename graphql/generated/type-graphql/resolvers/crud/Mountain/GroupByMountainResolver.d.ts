import { GraphQLResolveInfo } from "graphql";
import { GroupByMountainArgs } from "./args/GroupByMountainArgs";
import { MountainGroupBy } from "../../outputs/MountainGroupBy";
export declare class GroupByMountainResolver {
    groupByMountain(ctx: any, info: GraphQLResolveInfo, args: GroupByMountainArgs): Promise<MountainGroupBy[]>;
}
