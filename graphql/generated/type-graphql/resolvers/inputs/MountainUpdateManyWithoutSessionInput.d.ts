import { MountainCreateManySessionInputEnvelope } from "../inputs/MountainCreateManySessionInputEnvelope";
import { MountainCreateOrConnectWithoutSessionInput } from "../inputs/MountainCreateOrConnectWithoutSessionInput";
import { MountainCreateWithoutSessionInput } from "../inputs/MountainCreateWithoutSessionInput";
import { MountainScalarWhereInput } from "../inputs/MountainScalarWhereInput";
import { MountainUpdateManyWithWhereWithoutSessionInput } from "../inputs/MountainUpdateManyWithWhereWithoutSessionInput";
import { MountainUpdateWithWhereUniqueWithoutSessionInput } from "../inputs/MountainUpdateWithWhereUniqueWithoutSessionInput";
import { MountainUpsertWithWhereUniqueWithoutSessionInput } from "../inputs/MountainUpsertWithWhereUniqueWithoutSessionInput";
import { MountainWhereUniqueInput } from "../inputs/MountainWhereUniqueInput";
export declare class MountainUpdateManyWithoutSessionInput {
    create?: MountainCreateWithoutSessionInput[] | undefined;
    connectOrCreate?: MountainCreateOrConnectWithoutSessionInput[] | undefined;
    upsert?: MountainUpsertWithWhereUniqueWithoutSessionInput[] | undefined;
    createMany?: MountainCreateManySessionInputEnvelope | undefined;
    set?: MountainWhereUniqueInput[] | undefined;
    disconnect?: MountainWhereUniqueInput[] | undefined;
    delete?: MountainWhereUniqueInput[] | undefined;
    connect?: MountainWhereUniqueInput[] | undefined;
    update?: MountainUpdateWithWhereUniqueWithoutSessionInput[] | undefined;
    updateMany?: MountainUpdateManyWithWhereWithoutSessionInput[] | undefined;
    deleteMany?: MountainScalarWhereInput[] | undefined;
}
