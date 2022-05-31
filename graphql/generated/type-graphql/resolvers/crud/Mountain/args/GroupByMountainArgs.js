"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMountainArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainOrderByWithAggregationInput_1 = require("../../../inputs/MountainOrderByWithAggregationInput");
const MountainScalarWhereWithAggregatesInput_1 = require("../../../inputs/MountainScalarWhereWithAggregatesInput");
const MountainWhereInput_1 = require("../../../inputs/MountainWhereInput");
const MountainScalarFieldEnum_1 = require("../../../../enums/MountainScalarFieldEnum");
let GroupByMountainArgs = class GroupByMountainArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereInput_1.MountainWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainWhereInput_1.MountainWhereInput)
], GroupByMountainArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainOrderByWithAggregationInput_1.MountainOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMountainArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainScalarFieldEnum_1.MountainScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMountainArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainScalarWhereWithAggregatesInput_1.MountainScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainScalarWhereWithAggregatesInput_1.MountainScalarWhereWithAggregatesInput)
], GroupByMountainArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMountainArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMountainArgs.prototype, "skip", void 0);
GroupByMountainArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByMountainArgs);
exports.GroupByMountainArgs = GroupByMountainArgs;
