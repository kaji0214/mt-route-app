import { MountainOrderByRelationAggregateInput } from "../inputs/MountainOrderByRelationAggregateInput";
import { RouteOrderByRelationAggregateInput } from "../inputs/RouteOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class SessionOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    sessionToken?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    expires?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    Mountain?: MountainOrderByRelationAggregateInput | undefined;
    Route?: RouteOrderByRelationAggregateInput | undefined;
}
