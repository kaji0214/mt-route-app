import { MountainCreateOrConnectWithoutRoutesInput } from "../inputs/MountainCreateOrConnectWithoutRoutesInput";
import { MountainCreateWithoutRoutesInput } from "../inputs/MountainCreateWithoutRoutesInput";
import { MountainUpdateWithoutRoutesInput } from "../inputs/MountainUpdateWithoutRoutesInput";
import { MountainUpsertWithoutRoutesInput } from "../inputs/MountainUpsertWithoutRoutesInput";
import { MountainWhereUniqueInput } from "../inputs/MountainWhereUniqueInput";
export declare class MountainUpdateOneRequiredWithoutRoutesInput {
    create?: MountainCreateWithoutRoutesInput | undefined;
    connectOrCreate?: MountainCreateOrConnectWithoutRoutesInput | undefined;
    upsert?: MountainUpsertWithoutRoutesInput | undefined;
    connect?: MountainWhereUniqueInput | undefined;
    update?: MountainUpdateWithoutRoutesInput | undefined;
}
