import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MountainListRelationFilter } from "../inputs/MountainListRelationFilter";
import { RouteListRelationFilter } from "../inputs/RouteListRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    emailVerified?: DateTimeNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    accounts?: AccountListRelationFilter | undefined;
    sessions?: SessionListRelationFilter | undefined;
    routes?: RouteListRelationFilter | undefined;
    mountains?: MountainListRelationFilter | undefined;
}
