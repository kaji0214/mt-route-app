import { GraphQLResolveInfo } from "graphql";
import { FindFirstMountainArgs } from "./args/FindFirstMountainArgs";
import { Mountain } from "../../../models/Mountain";
export declare class FindFirstMountainResolver {
    findFirstMountain(ctx: any, info: GraphQLResolveInfo, args: FindFirstMountainArgs): Promise<Mountain | null>;
}
