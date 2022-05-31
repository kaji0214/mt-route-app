import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class RouteScalarWhereWithAggregatesInput {
    AND?: RouteScalarWhereWithAggregatesInput[] | undefined;
    OR?: RouteScalarWhereWithAggregatesInput[] | undefined;
    NOT?: RouteScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    time?: IntWithAggregatesFilter | undefined;
    mountainId?: IntWithAggregatesFilter | undefined;
    userId?: IntWithAggregatesFilter | undefined;
    sessionId?: IntNullableWithAggregatesFilter | undefined;
}
