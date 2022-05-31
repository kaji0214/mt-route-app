import { LatlngAvgOrderByAggregateInput } from "../inputs/LatlngAvgOrderByAggregateInput";
import { LatlngCountOrderByAggregateInput } from "../inputs/LatlngCountOrderByAggregateInput";
import { LatlngMaxOrderByAggregateInput } from "../inputs/LatlngMaxOrderByAggregateInput";
import { LatlngMinOrderByAggregateInput } from "../inputs/LatlngMinOrderByAggregateInput";
import { LatlngSumOrderByAggregateInput } from "../inputs/LatlngSumOrderByAggregateInput";
export declare class LatlngOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    lat?: "asc" | "desc" | undefined;
    lng?: "asc" | "desc" | undefined;
    routeId?: "asc" | "desc" | undefined;
    _count?: LatlngCountOrderByAggregateInput | undefined;
    _avg?: LatlngAvgOrderByAggregateInput | undefined;
    _max?: LatlngMaxOrderByAggregateInput | undefined;
    _min?: LatlngMinOrderByAggregateInput | undefined;
    _sum?: LatlngSumOrderByAggregateInput | undefined;
}
