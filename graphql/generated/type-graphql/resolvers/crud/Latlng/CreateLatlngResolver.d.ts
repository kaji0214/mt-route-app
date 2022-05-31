import { GraphQLResolveInfo } from "graphql";
import { CreateLatlngArgs } from "./args/CreateLatlngArgs";
import { Latlng } from "../../../models/Latlng";
export declare class CreateLatlngResolver {
    createLatlng(ctx: any, info: GraphQLResolveInfo, args: CreateLatlngArgs): Promise<Latlng>;
}
