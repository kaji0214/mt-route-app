import { LatlngCreateNestedManyWithoutRouteInput } from "../inputs/LatlngCreateNestedManyWithoutRouteInput";
import { SessionCreateNestedOneWithoutRouteInput } from "../inputs/SessionCreateNestedOneWithoutRouteInput";
import { UserCreateNestedOneWithoutRoutesInput } from "../inputs/UserCreateNestedOneWithoutRoutesInput";
export declare class RouteCreateWithoutMountainInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    time: number;
    latlngs?: LatlngCreateNestedManyWithoutRouteInput | undefined;
    user: UserCreateNestedOneWithoutRoutesInput;
    Session?: SessionCreateNestedOneWithoutRouteInput | undefined;
}
