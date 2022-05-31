import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
export declare class LatlngScalarWhereInput {
    AND?: LatlngScalarWhereInput[] | undefined;
    OR?: LatlngScalarWhereInput[] | undefined;
    NOT?: LatlngScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    lat?: FloatFilter | undefined;
    lng?: FloatFilter | undefined;
    routeId?: IntFilter | undefined;
}
