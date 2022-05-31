import { MountainCreateNestedOneWithoutRoutesInput } from "../inputs/MountainCreateNestedOneWithoutRoutesInput";
import { SessionCreateNestedOneWithoutRouteInput } from "../inputs/SessionCreateNestedOneWithoutRouteInput";
import { UserCreateNestedOneWithoutRoutesInput } from "../inputs/UserCreateNestedOneWithoutRoutesInput";
export declare class RouteCreateWithoutLatlngsInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    time: number;
    mountain: MountainCreateNestedOneWithoutRoutesInput;
    user: UserCreateNestedOneWithoutRoutesInput;
    Session?: SessionCreateNestedOneWithoutRouteInput | undefined;
}
