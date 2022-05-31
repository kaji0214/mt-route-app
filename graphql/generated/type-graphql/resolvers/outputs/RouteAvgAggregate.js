"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RouteAvgAggregate = class RouteAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RouteAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RouteAvgAggregate.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RouteAvgAggregate.prototype, "mountainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RouteAvgAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RouteAvgAggregate.prototype, "sessionId", void 0);
RouteAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RouteAvgAggregate", {
        isAbstract: true
    })
], RouteAvgAggregate);
exports.RouteAvgAggregate = RouteAvgAggregate;
