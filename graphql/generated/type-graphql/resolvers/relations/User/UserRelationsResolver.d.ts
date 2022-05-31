import { Account } from "../../../models/Account";
import { Mountain } from "../../../models/Mountain";
import { Route } from "../../../models/Route";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserMountainsArgs } from "./args/UserMountainsArgs";
import { UserRoutesArgs } from "./args/UserRoutesArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
export declare class UserRelationsResolver {
    accounts(user: User, ctx: any, args: UserAccountsArgs): Promise<Account[]>;
    sessions(user: User, ctx: any, args: UserSessionsArgs): Promise<Session[]>;
    routes(user: User, ctx: any, args: UserRoutesArgs): Promise<Route[]>;
    mountains(user: User, ctx: any, args: UserMountainsArgs): Promise<Mountain[]>;
}
