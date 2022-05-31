import { SessionAvgOrderByAggregateInput } from "../inputs/SessionAvgOrderByAggregateInput";
import { SessionCountOrderByAggregateInput } from "../inputs/SessionCountOrderByAggregateInput";
import { SessionMaxOrderByAggregateInput } from "../inputs/SessionMaxOrderByAggregateInput";
import { SessionMinOrderByAggregateInput } from "../inputs/SessionMinOrderByAggregateInput";
import { SessionSumOrderByAggregateInput } from "../inputs/SessionSumOrderByAggregateInput";
export declare class SessionOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    sessionToken?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    expires?: "asc" | "desc" | undefined;
    _count?: SessionCountOrderByAggregateInput | undefined;
    _avg?: SessionAvgOrderByAggregateInput | undefined;
    _max?: SessionMaxOrderByAggregateInput | undefined;
    _min?: SessionMinOrderByAggregateInput | undefined;
    _sum?: SessionSumOrderByAggregateInput | undefined;
}
