import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class RouteScalarWhereInput {
    AND?: RouteScalarWhereInput[] | undefined;
    OR?: RouteScalarWhereInput[] | undefined;
    NOT?: RouteScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    time?: IntFilter | undefined;
    mountainId?: IntFilter | undefined;
    userId?: IntFilter | undefined;
    sessionId?: IntNullableFilter | undefined;
}
