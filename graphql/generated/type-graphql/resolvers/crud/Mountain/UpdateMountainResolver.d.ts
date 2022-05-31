import { GraphQLResolveInfo } from "graphql";
import { UpdateMountainArgs } from "./args/UpdateMountainArgs";
import { Mountain } from "../../../models/Mountain";
export declare class UpdateMountainResolver {
    updateMountain(ctx: any, info: GraphQLResolveInfo, args: UpdateMountainArgs): Promise<Mountain | null>;
}
