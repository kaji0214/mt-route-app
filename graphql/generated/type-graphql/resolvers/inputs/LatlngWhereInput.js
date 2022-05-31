"use strict";
var LatlngWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const RouteRelationFilter_1 = require("../inputs/RouteRelationFilter");
let LatlngWhereInput = LatlngWhereInput_1 = class LatlngWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], LatlngWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LatlngWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LatlngWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], LatlngWhereInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], LatlngWhereInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], LatlngWhereInput.prototype, "routeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteRelationFilter_1.RouteRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteRelationFilter_1.RouteRelationFilter)
], LatlngWhereInput.prototype, "route", void 0);
LatlngWhereInput = LatlngWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngWhereInput", {
        isAbstract: true
    })
], LatlngWhereInput);
exports.LatlngWhereInput = LatlngWhereInput;
