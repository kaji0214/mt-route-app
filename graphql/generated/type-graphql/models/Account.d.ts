import { User } from "../models/User";
export declare class Account {
    id: number;
    userId: number;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    oauth_token_secret?: string | null;
    oauth_token?: string | null;
    user?: User;
}
