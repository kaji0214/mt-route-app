import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
export declare class LatlngScalarWhereWithAggregatesInput {
    AND?: LatlngScalarWhereWithAggregatesInput[] | undefined;
    OR?: LatlngScalarWhereWithAggregatesInput[] | undefined;
    NOT?: LatlngScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    lat?: FloatWithAggregatesFilter | undefined;
    lng?: FloatWithAggregatesFilter | undefined;
    routeId?: IntWithAggregatesFilter | undefined;
}
