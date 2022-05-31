import { Account } from "../models/Account";
import { Mountain } from "../models/Mountain";
import { Route } from "../models/Route";
import { Session } from "../models/Session";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: number;
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    image?: string | null;
    accounts?: Account[];
    sessions?: Session[];
    routes?: Route[];
    mountains?: Mountain[];
    _count?: UserCount | null;
}
