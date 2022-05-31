import { GraphQLResolveInfo } from "graphql";
import { AggregateMountainArgs } from "./args/AggregateMountainArgs";
import { AggregateMountain } from "../../outputs/AggregateMountain";
export declare class AggregateMountainResolver {
    aggregateMountain(ctx: any, info: GraphQLResolveInfo, args: AggregateMountainArgs): Promise<AggregateMountain>;
}
