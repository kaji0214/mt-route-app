import { GraphQLResolveInfo } from "graphql";
import { FindManyLatlngArgs } from "./args/FindManyLatlngArgs";
import { Latlng } from "../../../models/Latlng";
export declare class FindManyLatlngResolver {
    latlngs(ctx: any, info: GraphQLResolveInfo, args: FindManyLatlngArgs): Promise<Latlng[]>;
}
