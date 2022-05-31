import { GraphQLResolveInfo } from "graphql";
import { FindFirstLatlngArgs } from "./args/FindFirstLatlngArgs";
import { Latlng } from "../../../models/Latlng";
export declare class FindFirstLatlngResolver {
    findFirstLatlng(ctx: any, info: GraphQLResolveInfo, args: FindFirstLatlngArgs): Promise<Latlng | null>;
}
