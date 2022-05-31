import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SessionScalarWhereWithAggregatesInput {
    AND?: SessionScalarWhereWithAggregatesInput[] | undefined;
    OR?: SessionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SessionScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    sessionToken?: StringWithAggregatesFilter | undefined;
    userId?: IntWithAggregatesFilter | undefined;
    expires?: DateTimeWithAggregatesFilter | undefined;
}
