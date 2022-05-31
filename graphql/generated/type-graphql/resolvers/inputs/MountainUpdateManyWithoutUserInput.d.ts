import { MountainCreateManyUserInputEnvelope } from "../inputs/MountainCreateManyUserInputEnvelope";
import { MountainCreateOrConnectWithoutUserInput } from "../inputs/MountainCreateOrConnectWithoutUserInput";
import { MountainCreateWithoutUserInput } from "../inputs/MountainCreateWithoutUserInput";
import { MountainScalarWhereInput } from "../inputs/MountainScalarWhereInput";
import { MountainUpdateManyWithWhereWithoutUserInput } from "../inputs/MountainUpdateManyWithWhereWithoutUserInput";
import { MountainUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MountainUpdateWithWhereUniqueWithoutUserInput";
import { MountainUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MountainUpsertWithWhereUniqueWithoutUserInput";
import { MountainWhereUniqueInput } from "../inputs/MountainWhereUniqueInput";
export declare class MountainUpdateManyWithoutUserInput {
    create?: MountainCreateWithoutUserInput[] | undefined;
    connectOrCreate?: MountainCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: MountainUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: MountainCreateManyUserInputEnvelope | undefined;
    set?: MountainWhereUniqueInput[] | undefined;
    disconnect?: MountainWhereUniqueInput[] | undefined;
    delete?: MountainWhereUniqueInput[] | undefined;
    connect?: MountainWhereUniqueInput[] | undefined;
    update?: MountainUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: MountainUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: MountainScalarWhereInput[] | undefined;
}
