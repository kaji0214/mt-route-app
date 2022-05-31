import { LatlngCreateNestedManyWithoutRouteInput } from "../inputs/LatlngCreateNestedManyWithoutRouteInput";
import { MountainCreateNestedOneWithoutRoutesInput } from "../inputs/MountainCreateNestedOneWithoutRoutesInput";
import { UserCreateNestedOneWithoutRoutesInput } from "../inputs/UserCreateNestedOneWithoutRoutesInput";
export declare class RouteCreateWithoutSessionInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    time: number;
    mountain: MountainCreateNestedOneWithoutRoutesInput;
    latlngs?: LatlngCreateNestedManyWithoutRouteInput | undefined;
    user: UserCreateNestedOneWithoutRoutesInput;
}
