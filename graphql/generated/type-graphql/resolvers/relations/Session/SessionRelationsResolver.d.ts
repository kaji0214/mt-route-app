import { Mountain } from "../../../models/Mountain";
import { Route } from "../../../models/Route";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { SessionMountainArgs } from "./args/SessionMountainArgs";
import { SessionRouteArgs } from "./args/SessionRouteArgs";
export declare class SessionRelationsResolver {
    user(session: Session, ctx: any): Promise<User>;
    Mountain(session: Session, ctx: any, args: SessionMountainArgs): Promise<Mountain[]>;
    Route(session: Session, ctx: any, args: SessionRouteArgs): Promise<Route[]>;
}
