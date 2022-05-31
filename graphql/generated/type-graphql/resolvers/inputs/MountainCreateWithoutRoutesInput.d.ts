import { SessionCreateNestedOneWithoutMountainInput } from "../inputs/SessionCreateNestedOneWithoutMountainInput";
import { UserCreateNestedOneWithoutMountainsInput } from "../inputs/UserCreateNestedOneWithoutMountainsInput";
export declare class MountainCreateWithoutRoutesInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    lat: number;
    lng: number;
    user: UserCreateNestedOneWithoutMountainsInput;
    Session?: SessionCreateNestedOneWithoutMountainInput | undefined;
}
