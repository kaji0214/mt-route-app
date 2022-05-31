import { RouteCreateNestedManyWithoutMountainInput } from "../inputs/RouteCreateNestedManyWithoutMountainInput";
import { SessionCreateNestedOneWithoutMountainInput } from "../inputs/SessionCreateNestedOneWithoutMountainInput";
export declare class MountainCreateWithoutUserInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    lat: number;
    lng: number;
    routes?: RouteCreateNestedManyWithoutMountainInput | undefined;
    Session?: SessionCreateNestedOneWithoutMountainInput | undefined;
}
