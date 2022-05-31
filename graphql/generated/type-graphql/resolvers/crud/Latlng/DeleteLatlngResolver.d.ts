import { GraphQLResolveInfo } from "graphql";
import { DeleteLatlngArgs } from "./args/DeleteLatlngArgs";
import { Latlng } from "../../../models/Latlng";
export declare class DeleteLatlngResolver {
    deleteLatlng(ctx: any, info: GraphQLResolveInfo, args: DeleteLatlngArgs): Promise<Latlng | null>;
}
