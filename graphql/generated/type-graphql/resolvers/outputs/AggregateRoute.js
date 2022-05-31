"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRoute = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteAvgAggregate_1 = require("../outputs/RouteAvgAggregate");
const RouteCountAggregate_1 = require("../outputs/RouteCountAggregate");
const RouteMaxAggregate_1 = require("../outputs/RouteMaxAggregate");
const RouteMinAggregate_1 = require("../outputs/RouteMinAggregate");
const RouteSumAggregate_1 = require("../outputs/RouteSumAggregate");
let AggregateRoute = class AggregateRoute {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCountAggregate_1.RouteCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCountAggregate_1.RouteCountAggregate)
], AggregateRoute.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteAvgAggregate_1.RouteAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteAvgAggregate_1.RouteAvgAggregate)
], AggregateRoute.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteSumAggregate_1.RouteSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteSumAggregate_1.RouteSumAggregate)
], AggregateRoute.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteMinAggregate_1.RouteMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteMinAggregate_1.RouteMinAggregate)
], AggregateRoute.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteMaxAggregate_1.RouteMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteMaxAggregate_1.RouteMaxAggregate)
], AggregateRoute.prototype, "_max", void 0);
AggregateRoute = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateRoute", {
        isAbstract: true
    })
], AggregateRoute);
exports.AggregateRoute = AggregateRoute;
