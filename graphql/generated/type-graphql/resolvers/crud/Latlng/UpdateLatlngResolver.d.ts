import { GraphQLResolveInfo } from "graphql";
import { UpdateLatlngArgs } from "./args/UpdateLatlngArgs";
import { Latlng } from "../../../models/Latlng";
export declare class UpdateLatlngResolver {
    updateLatlng(ctx: any, info: GraphQLResolveInfo, args: UpdateLatlngArgs): Promise<Latlng | null>;
}
