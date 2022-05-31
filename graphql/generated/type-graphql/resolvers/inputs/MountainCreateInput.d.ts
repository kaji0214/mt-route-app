import { RouteCreateNestedManyWithoutMountainInput } from "../inputs/RouteCreateNestedManyWithoutMountainInput";
import { SessionCreateNestedOneWithoutMountainInput } from "../inputs/SessionCreateNestedOneWithoutMountainInput";
import { UserCreateNestedOneWithoutMountainsInput } from "../inputs/UserCreateNestedOneWithoutMountainsInput";
export declare class MountainCreateInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    lat: number;
    lng: number;
    user: UserCreateNestedOneWithoutMountainsInput;
    routes?: RouteCreateNestedManyWithoutMountainInput | undefined;
    Session?: SessionCreateNestedOneWithoutMountainInput | undefined;
}
