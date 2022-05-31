import { MountainAvgAggregate } from "../outputs/MountainAvgAggregate";
import { MountainCountAggregate } from "../outputs/MountainCountAggregate";
import { MountainMaxAggregate } from "../outputs/MountainMaxAggregate";
import { MountainMinAggregate } from "../outputs/MountainMinAggregate";
import { MountainSumAggregate } from "../outputs/MountainSumAggregate";
export declare class AggregateMountain {
    _count: MountainCountAggregate | null;
    _avg: MountainAvgAggregate | null;
    _sum: MountainSumAggregate | null;
    _min: MountainMinAggregate | null;
    _max: MountainMaxAggregate | null;
}
