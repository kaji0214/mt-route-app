import { RouteCreateNestedManyWithoutMountainInput } from "../inputs/RouteCreateNestedManyWithoutMountainInput";
import { UserCreateNestedOneWithoutMountainsInput } from "../inputs/UserCreateNestedOneWithoutMountainsInput";
export declare class MountainCreateWithoutSessionInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    lat: number;
    lng: number;
    user: UserCreateNestedOneWithoutMountainsInput;
    routes?: RouteCreateNestedManyWithoutMountainInput | undefined;
}
