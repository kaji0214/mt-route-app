import { GraphQLResolveInfo } from "graphql";
import { AggregateLatlngArgs } from "./args/AggregateLatlngArgs";
import { AggregateLatlng } from "../../outputs/AggregateLatlng";
export declare class AggregateLatlngResolver {
    aggregateLatlng(ctx: any, info: GraphQLResolveInfo, args: AggregateLatlngArgs): Promise<AggregateLatlng>;
}
