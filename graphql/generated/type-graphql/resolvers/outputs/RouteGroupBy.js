"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteAvgAggregate_1 = require("../outputs/RouteAvgAggregate");
const RouteCountAggregate_1 = require("../outputs/RouteCountAggregate");
const RouteMaxAggregate_1 = require("../outputs/RouteMaxAggregate");
const RouteMinAggregate_1 = require("../outputs/RouteMinAggregate");
const RouteSumAggregate_1 = require("../outputs/RouteSumAggregate");
let RouteGroupBy = class RouteGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RouteGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], RouteGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], RouteGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RouteGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RouteGroupBy.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RouteGroupBy.prototype, "mountainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RouteGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RouteGroupBy.prototype, "sessionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCountAggregate_1.RouteCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCountAggregate_1.RouteCountAggregate)
], RouteGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteAvgAggregate_1.RouteAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteAvgAggregate_1.RouteAvgAggregate)
], RouteGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteSumAggregate_1.RouteSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteSumAggregate_1.RouteSumAggregate)
], RouteGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteMinAggregate_1.RouteMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteMinAggregate_1.RouteMinAggregate)
], RouteGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteMaxAggregate_1.RouteMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteMaxAggregate_1.RouteMaxAggregate)
], RouteGroupBy.prototype, "_max", void 0);
RouteGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RouteGroupBy", {
        isAbstract: true
    })
], RouteGroupBy);
exports.RouteGroupBy = RouteGroupBy;
