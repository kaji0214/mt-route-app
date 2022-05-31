import { Route } from "../models/Route";
import { Session } from "../models/Session";
import { User } from "../models/User";
import { MountainCount } from "../resolvers/outputs/MountainCount";
export declare class Mountain {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    lat: number;
    lng: number;
    user?: User;
    userId: number;
    routes?: Route[];
    Session?: Session | null;
    sessionId?: number | null;
    _count?: MountainCount | null;
}
