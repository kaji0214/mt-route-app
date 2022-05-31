import { RouteOrderByWithAggregationInput } from "../../../inputs/RouteOrderByWithAggregationInput";
import { RouteScalarWhereWithAggregatesInput } from "../../../inputs/RouteScalarWhereWithAggregatesInput";
import { RouteWhereInput } from "../../../inputs/RouteWhereInput";
export declare class GroupByRouteArgs {
    where?: RouteWhereInput | undefined;
    orderBy?: RouteOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "createdAt" | "updatedAt" | "name" | "time" | "mountainId" | "userId" | "sessionId">;
    having?: RouteScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
