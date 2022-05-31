import { GraphQLResolveInfo } from "graphql";
import { UpsertMountainArgs } from "./args/UpsertMountainArgs";
import { Mountain } from "../../../models/Mountain";
export declare class UpsertMountainResolver {
    upsertMountain(ctx: any, info: GraphQLResolveInfo, args: UpsertMountainArgs): Promise<Mountain>;
}
