"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainAvgAggregate_1 = require("../outputs/MountainAvgAggregate");
const MountainCountAggregate_1 = require("../outputs/MountainCountAggregate");
const MountainMaxAggregate_1 = require("../outputs/MountainMaxAggregate");
const MountainMinAggregate_1 = require("../outputs/MountainMinAggregate");
const MountainSumAggregate_1 = require("../outputs/MountainSumAggregate");
let MountainGroupBy = class MountainGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MountainGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MountainGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MountainGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MountainGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MountainGroupBy.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MountainGroupBy.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MountainGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MountainGroupBy.prototype, "sessionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCountAggregate_1.MountainCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainCountAggregate_1.MountainCountAggregate)
], MountainGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainAvgAggregate_1.MountainAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainAvgAggregate_1.MountainAvgAggregate)
], MountainGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainSumAggregate_1.MountainSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainSumAggregate_1.MountainSumAggregate)
], MountainGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainMinAggregate_1.MountainMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainMinAggregate_1.MountainMinAggregate)
], MountainGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainMaxAggregate_1.MountainMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainMaxAggregate_1.MountainMaxAggregate)
], MountainGroupBy.prototype, "_max", void 0);
MountainGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MountainGroupBy", {
        isAbstract: true
    })
], MountainGroupBy);
exports.MountainGroupBy = MountainGroupBy;
