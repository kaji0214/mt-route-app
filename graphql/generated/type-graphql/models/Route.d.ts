import { Latlng } from "../models/Latlng";
import { Mountain } from "../models/Mountain";
import { Session } from "../models/Session";
import { User } from "../models/User";
import { RouteCount } from "../resolvers/outputs/RouteCount";
export declare class Route {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    time: number;
    mountain?: Mountain;
    mountainId: number;
    latlngs?: Latlng[];
    user?: User;
    userId: number;
    Session?: Session | null;
    sessionId?: number | null;
    _count?: RouteCount | null;
}
