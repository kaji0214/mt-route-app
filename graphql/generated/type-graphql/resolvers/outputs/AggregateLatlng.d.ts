import { LatlngAvgAggregate } from "../outputs/LatlngAvgAggregate";
import { LatlngCountAggregate } from "../outputs/LatlngCountAggregate";
import { LatlngMaxAggregate } from "../outputs/LatlngMaxAggregate";
import { LatlngMinAggregate } from "../outputs/LatlngMinAggregate";
import { LatlngSumAggregate } from "../outputs/LatlngSumAggregate";
export declare class AggregateLatlng {
    _count: LatlngCountAggregate | null;
    _avg: LatlngAvgAggregate | null;
    _sum: LatlngSumAggregate | null;
    _min: LatlngMinAggregate | null;
    _max: LatlngMaxAggregate | null;
}
