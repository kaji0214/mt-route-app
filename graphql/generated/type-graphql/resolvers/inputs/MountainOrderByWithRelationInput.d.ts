import { RouteOrderByRelationAggregateInput } from "../inputs/RouteOrderByRelationAggregateInput";
import { SessionOrderByWithRelationInput } from "../inputs/SessionOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class MountainOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    lat?: "asc" | "desc" | undefined;
    lng?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    routes?: RouteOrderByRelationAggregateInput | undefined;
    Session?: SessionOrderByWithRelationInput | undefined;
    sessionId?: "asc" | "desc" | undefined;
}
