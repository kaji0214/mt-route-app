import { MountainOrderByWithAggregationInput } from "../../../inputs/MountainOrderByWithAggregationInput";
import { MountainScalarWhereWithAggregatesInput } from "../../../inputs/MountainScalarWhereWithAggregatesInput";
import { MountainWhereInput } from "../../../inputs/MountainWhereInput";
export declare class GroupByMountainArgs {
    where?: MountainWhereInput | undefined;
    orderBy?: MountainOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "createdAt" | "updatedAt" | "name" | "lat" | "lng" | "userId" | "sessionId">;
    having?: MountainScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
