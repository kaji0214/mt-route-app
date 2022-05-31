import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { RouteRelationFilter } from "../inputs/RouteRelationFilter";
export declare class LatlngWhereInput {
    AND?: LatlngWhereInput[] | undefined;
    OR?: LatlngWhereInput[] | undefined;
    NOT?: LatlngWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    lat?: FloatFilter | undefined;
    lng?: FloatFilter | undefined;
    routeId?: IntFilter | undefined;
    route?: RouteRelationFilter | undefined;
}
