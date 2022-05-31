import { GraphQLResolveInfo } from "graphql";
import { DeleteMountainArgs } from "./args/DeleteMountainArgs";
import { Mountain } from "../../../models/Mountain";
export declare class DeleteMountainResolver {
    deleteMountain(ctx: any, info: GraphQLResolveInfo, args: DeleteMountainArgs): Promise<Mountain | null>;
}
