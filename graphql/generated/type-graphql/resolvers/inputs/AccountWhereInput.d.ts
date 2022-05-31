import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class AccountWhereInput {
    AND?: AccountWhereInput[] | undefined;
    OR?: AccountWhereInput[] | undefined;
    NOT?: AccountWhereInput[] | undefined;
    id?: IntFilter | undefined;
    userId?: IntFilter | undefined;
    type?: StringFilter | undefined;
    provider?: StringFilter | undefined;
    providerAccountId?: StringFilter | undefined;
    refresh_token?: StringNullableFilter | undefined;
    access_token?: StringNullableFilter | undefined;
    expires_at?: IntNullableFilter | undefined;
    token_type?: StringNullableFilter | undefined;
    scope?: StringNullableFilter | undefined;
    id_token?: StringNullableFilter | undefined;
    session_state?: StringNullableFilter | undefined;
    oauth_token_secret?: StringNullableFilter | undefined;
    oauth_token?: StringNullableFilter | undefined;
    user?: UserRelationFilter | undefined;
}
