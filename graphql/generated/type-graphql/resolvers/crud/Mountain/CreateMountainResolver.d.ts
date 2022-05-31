import { GraphQLResolveInfo } from "graphql";
import { CreateMountainArgs } from "./args/CreateMountainArgs";
import { Mountain } from "../../../models/Mountain";
export declare class CreateMountainResolver {
    createMountain(ctx: any, info: GraphQLResolveInfo, args: CreateMountainArgs): Promise<Mountain>;
}
