"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMountain = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainAvgAggregate_1 = require("../outputs/MountainAvgAggregate");
const MountainCountAggregate_1 = require("../outputs/MountainCountAggregate");
const MountainMaxAggregate_1 = require("../outputs/MountainMaxAggregate");
const MountainMinAggregate_1 = require("../outputs/MountainMinAggregate");
const MountainSumAggregate_1 = require("../outputs/MountainSumAggregate");
let AggregateMountain = class AggregateMountain {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCountAggregate_1.MountainCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainCountAggregate_1.MountainCountAggregate)
], AggregateMountain.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainAvgAggregate_1.MountainAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainAvgAggregate_1.MountainAvgAggregate)
], AggregateMountain.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainSumAggregate_1.MountainSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainSumAggregate_1.MountainSumAggregate)
], AggregateMountain.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainMinAggregate_1.MountainMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainMinAggregate_1.MountainMinAggregate)
], AggregateMountain.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainMaxAggregate_1.MountainMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainMaxAggregate_1.MountainMaxAggregate)
], AggregateMountain.prototype, "_max", void 0);
AggregateMountain = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateMountain", {
        isAbstract: true
    })
], AggregateMountain);
exports.AggregateMountain = AggregateMountain;
