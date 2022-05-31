import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { RouteListRelationFilter } from "../inputs/RouteListRelationFilter";
import { SessionRelationFilter } from "../inputs/SessionRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class MountainWhereInput {
    AND?: MountainWhereInput[] | undefined;
    OR?: MountainWhereInput[] | undefined;
    NOT?: MountainWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    lat?: FloatFilter | undefined;
    lng?: FloatFilter | undefined;
    user?: UserRelationFilter | undefined;
    userId?: IntFilter | undefined;
    routes?: RouteListRelationFilter | undefined;
    Session?: SessionRelationFilter | undefined;
    sessionId?: IntNullableFilter | undefined;
}
