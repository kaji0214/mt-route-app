import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class MountainScalarWhereInput {
    AND?: MountainScalarWhereInput[] | undefined;
    OR?: MountainScalarWhereInput[] | undefined;
    NOT?: MountainScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    name?: StringFilter | undefined;
    lat?: FloatFilter | undefined;
    lng?: FloatFilter | undefined;
    userId?: IntFilter | undefined;
    sessionId?: IntNullableFilter | undefined;
}
