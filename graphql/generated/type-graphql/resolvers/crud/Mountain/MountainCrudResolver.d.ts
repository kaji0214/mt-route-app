import { GraphQLResolveInfo } from "graphql";
import { AggregateMountainArgs } from "./args/AggregateMountainArgs";
import { CreateManyMountainArgs } from "./args/CreateManyMountainArgs";
import { CreateMountainArgs } from "./args/CreateMountainArgs";
import { DeleteManyMountainArgs } from "./args/DeleteManyMountainArgs";
import { DeleteMountainArgs } from "./args/DeleteMountainArgs";
import { FindFirstMountainArgs } from "./args/FindFirstMountainArgs";
import { FindManyMountainArgs } from "./args/FindManyMountainArgs";
import { FindUniqueMountainArgs } from "./args/FindUniqueMountainArgs";
import { GroupByMountainArgs } from "./args/GroupByMountainArgs";
import { UpdateManyMountainArgs } from "./args/UpdateManyMountainArgs";
import { UpdateMountainArgs } from "./args/UpdateMountainArgs";
import { UpsertMountainArgs } from "./args/UpsertMountainArgs";
import { Mountain } from "../../../models/Mountain";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMountain } from "../../outputs/AggregateMountain";
import { MountainGroupBy } from "../../outputs/MountainGroupBy";
export declare class MountainCrudResolver {
    mountain(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMountainArgs): Promise<Mountain | null>;
    findFirstMountain(ctx: any, info: GraphQLResolveInfo, args: FindFirstMountainArgs): Promise<Mountain | null>;
    mountains(ctx: any, info: GraphQLResolveInfo, args: FindManyMountainArgs): Promise<Mountain[]>;
    createMountain(ctx: any, info: GraphQLResolveInfo, args: CreateMountainArgs): Promise<Mountain>;
    createManyMountain(ctx: any, info: GraphQLResolveInfo, args: CreateManyMountainArgs): Promise<AffectedRowsOutput>;
    deleteMountain(ctx: any, info: GraphQLResolveInfo, args: DeleteMountainArgs): Promise<Mountain | null>;
    updateMountain(ctx: any, info: GraphQLResolveInfo, args: UpdateMountainArgs): Promise<Mountain | null>;
    deleteManyMountain(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMountainArgs): Promise<AffectedRowsOutput>;
    updateManyMountain(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMountainArgs): Promise<AffectedRowsOutput>;
    upsertMountain(ctx: any, info: GraphQLResolveInfo, args: UpsertMountainArgs): Promise<Mountain>;
    aggregateMountain(ctx: any, info: GraphQLResolveInfo, args: AggregateMountainArgs): Promise<AggregateMountain>;
    groupByMountain(ctx: any, info: GraphQLResolveInfo, args: GroupByMountainArgs): Promise<MountainGroupBy[]>;
}
