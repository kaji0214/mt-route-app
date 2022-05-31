"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLatlngArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngOrderByWithAggregationInput_1 = require("../../../inputs/LatlngOrderByWithAggregationInput");
const LatlngScalarWhereWithAggregatesInput_1 = require("../../../inputs/LatlngScalarWhereWithAggregatesInput");
const LatlngWhereInput_1 = require("../../../inputs/LatlngWhereInput");
const LatlngScalarFieldEnum_1 = require("../../../../enums/LatlngScalarFieldEnum");
let GroupByLatlngArgs = class GroupByLatlngArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereInput_1.LatlngWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngWhereInput_1.LatlngWhereInput)
], GroupByLatlngArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngOrderByWithAggregationInput_1.LatlngOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByLatlngArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngScalarFieldEnum_1.LatlngScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByLatlngArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngScalarWhereWithAggregatesInput_1.LatlngScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngScalarWhereWithAggregatesInput_1.LatlngScalarWhereWithAggregatesInput)
], GroupByLatlngArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByLatlngArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByLatlngArgs.prototype, "skip", void 0);
GroupByLatlngArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByLatlngArgs);
exports.GroupByLatlngArgs = GroupByLatlngArgs;
