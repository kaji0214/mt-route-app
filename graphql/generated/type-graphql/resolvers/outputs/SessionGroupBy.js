"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionAvgAggregate_1 = require("../outputs/SessionAvgAggregate");
const SessionCountAggregate_1 = require("../outputs/SessionCountAggregate");
const SessionMaxAggregate_1 = require("../outputs/SessionMaxAggregate");
const SessionMinAggregate_1 = require("../outputs/SessionMinAggregate");
const SessionSumAggregate_1 = require("../outputs/SessionSumAggregate");
let SessionGroupBy = class SessionGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SessionGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SessionGroupBy.prototype, "sessionToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SessionGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SessionGroupBy.prototype, "expires", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCountAggregate_1.SessionCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCountAggregate_1.SessionCountAggregate)
], SessionGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionAvgAggregate_1.SessionAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionAvgAggregate_1.SessionAvgAggregate)
], SessionGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionSumAggregate_1.SessionSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionSumAggregate_1.SessionSumAggregate)
], SessionGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionMinAggregate_1.SessionMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionMinAggregate_1.SessionMinAggregate)
], SessionGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionMaxAggregate_1.SessionMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionMaxAggregate_1.SessionMaxAggregate)
], SessionGroupBy.prototype, "_max", void 0);
SessionGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SessionGroupBy", {
        isAbstract: true
    })
], SessionGroupBy);
exports.SessionGroupBy = SessionGroupBy;
