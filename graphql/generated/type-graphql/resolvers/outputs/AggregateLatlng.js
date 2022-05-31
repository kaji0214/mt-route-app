"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLatlng = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngAvgAggregate_1 = require("../outputs/LatlngAvgAggregate");
const LatlngCountAggregate_1 = require("../outputs/LatlngCountAggregate");
const LatlngMaxAggregate_1 = require("../outputs/LatlngMaxAggregate");
const LatlngMinAggregate_1 = require("../outputs/LatlngMinAggregate");
const LatlngSumAggregate_1 = require("../outputs/LatlngSumAggregate");
let AggregateLatlng = class AggregateLatlng {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngCountAggregate_1.LatlngCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngCountAggregate_1.LatlngCountAggregate)
], AggregateLatlng.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngAvgAggregate_1.LatlngAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngAvgAggregate_1.LatlngAvgAggregate)
], AggregateLatlng.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngSumAggregate_1.LatlngSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngSumAggregate_1.LatlngSumAggregate)
], AggregateLatlng.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngMinAggregate_1.LatlngMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngMinAggregate_1.LatlngMinAggregate)
], AggregateLatlng.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngMaxAggregate_1.LatlngMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngMaxAggregate_1.LatlngMaxAggregate)
], AggregateLatlng.prototype, "_max", void 0);
AggregateLatlng = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateLatlng", {
        isAbstract: true
    })
], AggregateLatlng);
exports.AggregateLatlng = AggregateLatlng;
