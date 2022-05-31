import { Mountain } from "../models/Mountain";
import { Route } from "../models/Route";
import { User } from "../models/User";
import { SessionCount } from "../resolvers/outputs/SessionCount";
export declare class Session {
    id: number;
    sessionToken: string;
    userId: number;
    expires: Date;
    user?: User;
    Mountain?: Mountain[];
    Route?: Route[];
    _count?: SessionCount | null;
}
