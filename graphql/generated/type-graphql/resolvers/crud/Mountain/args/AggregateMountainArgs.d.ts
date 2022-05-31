import { MountainOrderByWithRelationInput } from "../../../inputs/MountainOrderByWithRelationInput";
import { MountainWhereInput } from "../../../inputs/MountainWhereInput";
import { MountainWhereUniqueInput } from "../../../inputs/MountainWhereUniqueInput";
export declare class AggregateMountainArgs {
    where?: MountainWhereInput | undefined;
    orderBy?: MountainOrderByWithRelationInput[] | undefined;
    cursor?: MountainWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
