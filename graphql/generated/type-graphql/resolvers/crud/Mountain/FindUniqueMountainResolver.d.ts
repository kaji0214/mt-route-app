import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMountainArgs } from "./args/FindUniqueMountainArgs";
import { Mountain } from "../../../models/Mountain";
export declare class FindUniqueMountainResolver {
    mountain(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMountainArgs): Promise<Mountain | null>;
}
