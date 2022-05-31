import { RouteCreateNestedOneWithoutLatlngsInput } from "../inputs/RouteCreateNestedOneWithoutLatlngsInput";
export declare class LatlngCreateInput {
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    lat: number;
    lng: number;
    route: RouteCreateNestedOneWithoutLatlngsInput;
}
