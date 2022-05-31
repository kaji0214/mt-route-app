import { SessionAvgAggregate } from "../outputs/SessionAvgAggregate";
import { SessionCountAggregate } from "../outputs/SessionCountAggregate";
import { SessionMaxAggregate } from "../outputs/SessionMaxAggregate";
import { SessionMinAggregate } from "../outputs/SessionMinAggregate";
import { SessionSumAggregate } from "../outputs/SessionSumAggregate";
export declare class SessionGroupBy {
    id: number;
    sessionToken: string;
    userId: number;
    expires: Date;
    _count: SessionCountAggregate | null;
    _avg: SessionAvgAggregate | null;
    _sum: SessionSumAggregate | null;
    _min: SessionMinAggregate | null;
    _max: SessionMaxAggregate | null;
}
