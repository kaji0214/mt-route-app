import { RouteOrderByWithRelationInput } from "../../../inputs/RouteOrderByWithRelationInput";
import { RouteWhereInput } from "../../../inputs/RouteWhereInput";
import { RouteWhereUniqueInput } from "../../../inputs/RouteWhereUniqueInput";
export declare class MountainRoutesArgs {
    where?: RouteWhereInput | undefined;
    orderBy?: RouteOrderByWithRelationInput[] | undefined;
    cursor?: RouteWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "updatedAt" | "name" | "time" | "mountainId" | "userId" | "sessionId"> | undefined;
}
