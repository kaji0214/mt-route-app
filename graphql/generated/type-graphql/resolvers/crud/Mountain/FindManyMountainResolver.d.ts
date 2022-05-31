import { GraphQLResolveInfo } from "graphql";
import { FindManyMountainArgs } from "./args/FindManyMountainArgs";
import { Mountain } from "../../../models/Mountain";
export declare class FindManyMountainResolver {
    mountains(ctx: any, info: GraphQLResolveInfo, args: FindManyMountainArgs): Promise<Mountain[]>;
}
