"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngAvgAggregate_1 = require("../outputs/LatlngAvgAggregate");
const LatlngCountAggregate_1 = require("../outputs/LatlngCountAggregate");
const LatlngMaxAggregate_1 = require("../outputs/LatlngMaxAggregate");
const LatlngMinAggregate_1 = require("../outputs/LatlngMinAggregate");
const LatlngSumAggregate_1 = require("../outputs/LatlngSumAggregate");
let LatlngGroupBy = class LatlngGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], LatlngGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], LatlngGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngGroupBy.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngGroupBy.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngGroupBy.prototype, "routeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngCountAggregate_1.LatlngCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngCountAggregate_1.LatlngCountAggregate)
], LatlngGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngAvgAggregate_1.LatlngAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngAvgAggregate_1.LatlngAvgAggregate)
], LatlngGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngSumAggregate_1.LatlngSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngSumAggregate_1.LatlngSumAggregate)
], LatlngGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngMinAggregate_1.LatlngMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngMinAggregate_1.LatlngMinAggregate)
], LatlngGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngMaxAggregate_1.LatlngMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngMaxAggregate_1.LatlngMaxAggregate)
], LatlngGroupBy.prototype, "_max", void 0);
LatlngGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LatlngGroupBy", {
        isAbstract: true
    })
], LatlngGroupBy);
exports.LatlngGroupBy = LatlngGroupBy;
