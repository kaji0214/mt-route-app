import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LatlngListRelationFilter } from "../inputs/LatlngListRelationFilter";
import { MountainRelationFilter } from "../inputs/MountainRelationFilter";
import { SessionRelationFilter } from "../inputs/SessionRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class RouteWhereInput {
    AND?: RouteWhereInput[] | undefined;
    OR?: RouteWhereInput[] | undefined;
    NOT?: RouteWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    time?: IntFilter | undefined;
    mountain?: MountainRelationFilter | undefined;
    mountainId?: IntFilter | undefined;
    latlngs?: LatlngListRelationFilter | undefined;
    user?: UserRelationFilter | undefined;
    userId?: IntFilter | undefined;
    Session?: SessionRelationFilter | undefined;
    sessionId?: IntNullableFilter | undefined;
}
