"use strict";
var LatlngScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
let LatlngScalarWhereInput = LatlngScalarWhereInput_1 = class LatlngScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], LatlngScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LatlngScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LatlngScalarWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], LatlngScalarWhereInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], LatlngScalarWhereInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], LatlngScalarWhereInput.prototype, "routeId", void 0);
LatlngScalarWhereInput = LatlngScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngScalarWhereInput", {
        isAbstract: true
    })
], LatlngScalarWhereInput);
exports.LatlngScalarWhereInput = LatlngScalarWhereInput;
