import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { MountainOrderByRelationAggregateInput } from "../inputs/MountainOrderByRelationAggregateInput";
import { RouteOrderByRelationAggregateInput } from "../inputs/RouteOrderByRelationAggregateInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    emailVerified?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    accounts?: AccountOrderByRelationAggregateInput | undefined;
    sessions?: SessionOrderByRelationAggregateInput | undefined;
    routes?: RouteOrderByRelationAggregateInput | undefined;
    mountains?: MountainOrderByRelationAggregateInput | undefined;
}
