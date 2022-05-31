import { RouteAvgOrderByAggregateInput } from "../inputs/RouteAvgOrderByAggregateInput";
import { RouteCountOrderByAggregateInput } from "../inputs/RouteCountOrderByAggregateInput";
import { RouteMaxOrderByAggregateInput } from "../inputs/RouteMaxOrderByAggregateInput";
import { RouteMinOrderByAggregateInput } from "../inputs/RouteMinOrderByAggregateInput";
import { RouteSumOrderByAggregateInput } from "../inputs/RouteSumOrderByAggregateInput";
export declare class RouteOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    time?: "asc" | "desc" | undefined;
    mountainId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    sessionId?: "asc" | "desc" | undefined;
    _count?: RouteCountOrderByAggregateInput | undefined;
    _avg?: RouteAvgOrderByAggregateInput | undefined;
    _max?: RouteMaxOrderByAggregateInput | undefined;
    _min?: RouteMinOrderByAggregateInput | undefined;
    _sum?: RouteSumOrderByAggregateInput | undefined;
}
