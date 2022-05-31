import { MountainCreateManyUserInputEnvelope } from "../inputs/MountainCreateManyUserInputEnvelope";
import { MountainCreateOrConnectWithoutUserInput } from "../inputs/MountainCreateOrConnectWithoutUserInput";
import { MountainCreateWithoutUserInput } from "../inputs/MountainCreateWithoutUserInput";
import { MountainWhereUniqueInput } from "../inputs/MountainWhereUniqueInput";
export declare class MountainCreateNestedManyWithoutUserInput {
    create?: MountainCreateWithoutUserInput[] | undefined;
    connectOrCreate?: MountainCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: MountainCreateManyUserInputEnvelope | undefined;
    connect?: MountainWhereUniqueInput[] | undefined;
}
