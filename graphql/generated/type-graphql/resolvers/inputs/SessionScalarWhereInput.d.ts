import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SessionScalarWhereInput {
    AND?: SessionScalarWhereInput[] | undefined;
    OR?: SessionScalarWhereInput[] | undefined;
    NOT?: SessionScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    sessionToken?: StringFilter | undefined;
    userId?: IntFilter | undefined;
    expires?: DateTimeFilter | undefined;
}
