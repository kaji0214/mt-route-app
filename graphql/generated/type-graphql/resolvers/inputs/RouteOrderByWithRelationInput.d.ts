import { LatlngOrderByRelationAggregateInput } from "../inputs/LatlngOrderByRelationAggregateInput";
import { MountainOrderByWithRelationInput } from "../inputs/MountainOrderByWithRelationInput";
import { SessionOrderByWithRelationInput } from "../inputs/SessionOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class RouteOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    time?: "asc" | "desc" | undefined;
    mountain?: MountainOrderByWithRelationInput | undefined;
    mountainId?: "asc" | "desc" | undefined;
    latlngs?: LatlngOrderByRelationAggregateInput | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    Session?: SessionOrderByWithRelationInput | undefined;
    sessionId?: "asc" | "desc" | undefined;
}
