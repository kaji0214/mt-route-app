import { MountainCreateManySessionInputEnvelope } from "../inputs/MountainCreateManySessionInputEnvelope";
import { MountainCreateOrConnectWithoutSessionInput } from "../inputs/MountainCreateOrConnectWithoutSessionInput";
import { MountainCreateWithoutSessionInput } from "../inputs/MountainCreateWithoutSessionInput";
import { MountainWhereUniqueInput } from "../inputs/MountainWhereUniqueInput";
export declare class MountainCreateNestedManyWithoutSessionInput {
    create?: MountainCreateWithoutSessionInput[] | undefined;
    connectOrCreate?: MountainCreateOrConnectWithoutSessionInput[] | undefined;
    createMany?: MountainCreateManySessionInputEnvelope | undefined;
    connect?: MountainWhereUniqueInput[] | undefined;
}
