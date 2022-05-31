import { MountainAvgOrderByAggregateInput } from "../inputs/MountainAvgOrderByAggregateInput";
import { MountainCountOrderByAggregateInput } from "../inputs/MountainCountOrderByAggregateInput";
import { MountainMaxOrderByAggregateInput } from "../inputs/MountainMaxOrderByAggregateInput";
import { MountainMinOrderByAggregateInput } from "../inputs/MountainMinOrderByAggregateInput";
import { MountainSumOrderByAggregateInput } from "../inputs/MountainSumOrderByAggregateInput";
export declare class MountainOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    lat?: "asc" | "desc" | undefined;
    lng?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    sessionId?: "asc" | "desc" | undefined;
    _count?: MountainCountOrderByAggregateInput | undefined;
    _avg?: MountainAvgOrderByAggregateInput | undefined;
    _max?: MountainMaxOrderByAggregateInput | undefined;
    _min?: MountainMinOrderByAggregateInput | undefined;
    _sum?: MountainSumOrderByAggregateInput | undefined;
}
