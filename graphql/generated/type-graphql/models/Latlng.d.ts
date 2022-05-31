import { Route } from "../models/Route";
export declare class Latlng {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    lat: number;
    lng: number;
    routeId: number;
    route?: Route;
}
