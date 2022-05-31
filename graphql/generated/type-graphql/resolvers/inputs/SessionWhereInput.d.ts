import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MountainListRelationFilter } from "../inputs/MountainListRelationFilter";
import { RouteListRelationFilter } from "../inputs/RouteListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class SessionWhereInput {
    AND?: SessionWhereInput[] | undefined;
    OR?: SessionWhereInput[] | undefined;
    NOT?: SessionWhereInput[] | undefined;
    id?: IntFilter | undefined;
    sessionToken?: StringFilter | undefined;
    userId?: IntFilter | undefined;
    expires?: DateTimeFilter | undefined;
    user?: UserRelationFilter | undefined;
    Mountain?: MountainListRelationFilter | undefined;
    Route?: RouteListRelationFilter | undefined;
}
