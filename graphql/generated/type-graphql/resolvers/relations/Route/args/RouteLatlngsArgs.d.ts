import { LatlngOrderByWithRelationInput } from "../../../inputs/LatlngOrderByWithRelationInput";
import { LatlngWhereInput } from "../../../inputs/LatlngWhereInput";
import { LatlngWhereUniqueInput } from "../../../inputs/LatlngWhereUniqueInput";
export declare class RouteLatlngsArgs {
    where?: LatlngWhereInput | undefined;
    orderBy?: LatlngOrderByWithRelationInput[] | undefined;
    cursor?: LatlngWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "updatedAt" | "lat" | "lng" | "routeId"> | undefined;
}
