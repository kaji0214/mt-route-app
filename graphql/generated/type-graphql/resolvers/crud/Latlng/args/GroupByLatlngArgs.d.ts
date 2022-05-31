import { LatlngOrderByWithAggregationInput } from "../../../inputs/LatlngOrderByWithAggregationInput";
import { LatlngScalarWhereWithAggregatesInput } from "../../../inputs/LatlngScalarWhereWithAggregatesInput";
import { LatlngWhereInput } from "../../../inputs/LatlngWhereInput";
export declare class GroupByLatlngArgs {
    where?: LatlngWhereInput | undefined;
    orderBy?: LatlngOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "createdAt" | "updatedAt" | "lat" | "lng" | "routeId">;
    having?: LatlngScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
