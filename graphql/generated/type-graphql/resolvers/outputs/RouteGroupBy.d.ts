import { RouteAvgAggregate } from "../outputs/RouteAvgAggregate";
import { RouteCountAggregate } from "../outputs/RouteCountAggregate";
import { RouteMaxAggregate } from "../outputs/RouteMaxAggregate";
import { RouteMinAggregate } from "../outputs/RouteMinAggregate";
import { RouteSumAggregate } from "../outputs/RouteSumAggregate";
export declare class RouteGroupBy {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    time: number;
    mountainId: number;
    userId: number;
    sessionId: number | null;
    _count: RouteCountAggregate | null;
    _avg: RouteAvgAggregate | null;
    _sum: RouteSumAggregate | null;
    _min: RouteMinAggregate | null;
    _max: RouteMaxAggregate | null;
}
