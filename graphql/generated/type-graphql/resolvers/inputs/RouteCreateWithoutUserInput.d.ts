import { LatlngCreateNestedManyWithoutRouteInput } from "../inputs/LatlngCreateNestedManyWithoutRouteInput";
import { MountainCreateNestedOneWithoutRoutesInput } from "../inputs/MountainCreateNestedOneWithoutRoutesInput";
import { SessionCreateNestedOneWithoutRouteInput } from "../inputs/SessionCreateNestedOneWithoutRouteInput";
export declare class RouteCreateWithoutUserInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    time: number;
    mountain: MountainCreateNestedOneWithoutRoutesInput;
    latlngs?: LatlngCreateNestedManyWithoutRouteInput | undefined;
    Session?: SessionCreateNestedOneWithoutRouteInput | undefined;
}
