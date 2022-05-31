import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AccountScalarWhereWithAggregatesInput {
    AND?: AccountScalarWhereWithAggregatesInput[] | undefined;
    OR?: AccountScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AccountScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    userId?: IntWithAggregatesFilter | undefined;
    type?: StringWithAggregatesFilter | undefined;
    provider?: StringWithAggregatesFilter | undefined;
    providerAccountId?: StringWithAggregatesFilter | undefined;
    refresh_token?: StringNullableWithAggregatesFilter | undefined;
    access_token?: StringNullableWithAggregatesFilter | undefined;
    expires_at?: IntNullableWithAggregatesFilter | undefined;
    token_type?: StringNullableWithAggregatesFilter | undefined;
    scope?: StringNullableWithAggregatesFilter | undefined;
    id_token?: StringNullableWithAggregatesFilter | undefined;
    session_state?: StringNullableWithAggregatesFilter | undefined;
    oauth_token_secret?: StringNullableWithAggregatesFilter | undefined;
    oauth_token?: StringNullableWithAggregatesFilter | undefined;
}
