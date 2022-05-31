import { MountainCreateInput } from "../../../inputs/MountainCreateInput";
import { MountainUpdateInput } from "../../../inputs/MountainUpdateInput";
import { MountainWhereUniqueInput } from "../../../inputs/MountainWhereUniqueInput";
export declare class UpsertMountainArgs {
    where: MountainWhereUniqueInput;
    create: MountainCreateInput;
    update: MountainUpdateInput;
}
