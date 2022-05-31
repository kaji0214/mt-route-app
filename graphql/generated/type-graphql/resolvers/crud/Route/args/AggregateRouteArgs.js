"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRouteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteOrderByWithRelationInput_1 = require("../../../inputs/RouteOrderByWithRelationInput");
const RouteWhereInput_1 = require("../../../inputs/RouteWhereInput");
const RouteWhereUniqueInput_1 = require("../../../inputs/RouteWhereUniqueInput");
let AggregateRouteArgs = class AggregateRouteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereInput_1.RouteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteWhereInput_1.RouteWhereInput)
], AggregateRouteArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteOrderByWithRelationInput_1.RouteOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateRouteArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], AggregateRouteArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRouteArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRouteArgs.prototype, "skip", void 0);
AggregateRouteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateRouteArgs);
exports.AggregateRouteArgs = AggregateRouteArgs;
