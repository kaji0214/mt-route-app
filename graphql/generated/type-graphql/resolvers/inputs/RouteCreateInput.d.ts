import { LatlngCreateNestedManyWithoutRouteInput } from "../inputs/LatlngCreateNestedManyWithoutRouteInput";
import { MountainCreateNestedOneWithoutRoutesInput } from "../inputs/MountainCreateNestedOneWithoutRoutesInput";
import { SessionCreateNestedOneWithoutRouteInput } from "../inputs/SessionCreateNestedOneWithoutRouteInput";
import { UserCreateNestedOneWithoutRoutesInput } from "../inputs/UserCreateNestedOneWithoutRoutesInput";
export declare class RouteCreateInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    time: number;
    mountain: MountainCreateNestedOneWithoutRoutesInput;
    latlngs?: LatlngCreateNestedManyWithoutRouteInput | undefined;
    user: UserCreateNestedOneWithoutRoutesInput;
    Session?: SessionCreateNestedOneWithoutRouteInput | undefined;
}
