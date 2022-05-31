import { GraphQLResolveInfo } from "graphql";
import { FindUniqueLatlngArgs } from "./args/FindUniqueLatlngArgs";
import { Latlng } from "../../../models/Latlng";
export declare class FindUniqueLatlngResolver {
    latlng(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLatlngArgs): Promise<Latlng | null>;
}
