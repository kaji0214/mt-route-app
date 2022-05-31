import { GraphQLResolveInfo } from "graphql";
import { UpsertLatlngArgs } from "./args/UpsertLatlngArgs";
import { Latlng } from "../../../models/Latlng";
export declare class UpsertLatlngResolver {
    upsertLatlng(ctx: any, info: GraphQLResolveInfo, args: UpsertLatlngArgs): Promise<Latlng>;
}
