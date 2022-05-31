import { MountainOrderByWithRelationInput } from "../../../inputs/MountainOrderByWithRelationInput";
import { MountainWhereInput } from "../../../inputs/MountainWhereInput";
import { MountainWhereUniqueInput } from "../../../inputs/MountainWhereUniqueInput";
export declare class FindManyMountainArgs {
    where?: MountainWhereInput | undefined;
    orderBy?: MountainOrderByWithRelationInput[] | undefined;
    cursor?: MountainWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "updatedAt" | "name" | "lat" | "lng" | "userId" | "sessionId"> | undefined;
}
