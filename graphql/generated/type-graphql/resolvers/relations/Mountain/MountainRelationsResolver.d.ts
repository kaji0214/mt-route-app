import { Mountain } from "../../../models/Mountain";
import { Route } from "../../../models/Route";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { MountainRoutesArgs } from "./args/MountainRoutesArgs";
export declare class MountainRelationsResolver {
    user(mountain: Mountain, ctx: any): Promise<User>;
    routes(mountain: Mountain, ctx: any, args: MountainRoutesArgs): Promise<Route[]>;
    Session(mountain: Mountain, ctx: any): Promise<Session | null>;
}
