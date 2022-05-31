import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class MountainScalarWhereWithAggregatesInput {
    AND?: MountainScalarWhereWithAggregatesInput[] | undefined;
    OR?: MountainScalarWhereWithAggregatesInput[] | undefined;
    NOT?: MountainScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    lat?: FloatWithAggregatesFilter | undefined;
    lng?: FloatWithAggregatesFilter | undefined;
    userId?: IntWithAggregatesFilter | undefined;
    sessionId?: IntNullableWithAggregatesFilter | undefined;
}
