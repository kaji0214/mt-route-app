"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRouteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteOrderByWithAggregationInput_1 = require("../../../inputs/RouteOrderByWithAggregationInput");
const RouteScalarWhereWithAggregatesInput_1 = require("../../../inputs/RouteScalarWhereWithAggregatesInput");
const RouteWhereInput_1 = require("../../../inputs/RouteWhereInput");
const RouteScalarFieldEnum_1 = require("../../../../enums/RouteScalarFieldEnum");
let GroupByRouteArgs = class GroupByRouteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereInput_1.RouteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteWhereInput_1.RouteWhereInput)
], GroupByRouteArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteOrderByWithAggregationInput_1.RouteOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRouteArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteScalarFieldEnum_1.RouteScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRouteArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteScalarWhereWithAggregatesInput_1.RouteScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteScalarWhereWithAggregatesInput_1.RouteScalarWhereWithAggregatesInput)
], GroupByRouteArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRouteArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRouteArgs.prototype, "skip", void 0);
GroupByRouteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByRouteArgs);
exports.GroupByRouteArgs = GroupByRouteArgs;
