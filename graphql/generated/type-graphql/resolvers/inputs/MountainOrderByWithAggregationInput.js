"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainAvgOrderByAggregateInput_1 = require("../inputs/MountainAvgOrderByAggregateInput");
const MountainCountOrderByAggregateInput_1 = require("../inputs/MountainCountOrderByAggregateInput");
const MountainMaxOrderByAggregateInput_1 = require("../inputs/MountainMaxOrderByAggregateInput");
const MountainMinOrderByAggregateInput_1 = require("../inputs/MountainMinOrderByAggregateInput");
const MountainSumOrderByAggregateInput_1 = require("../inputs/MountainSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MountainOrderByWithAggregationInput = class MountainOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByWithAggregationInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByWithAggregationInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByWithAggregationInput.prototype, "sessionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCountOrderByAggregateInput_1.MountainCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainCountOrderByAggregateInput_1.MountainCountOrderByAggregateInput)
], MountainOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainAvgOrderByAggregateInput_1.MountainAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainAvgOrderByAggregateInput_1.MountainAvgOrderByAggregateInput)
], MountainOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainMaxOrderByAggregateInput_1.MountainMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainMaxOrderByAggregateInput_1.MountainMaxOrderByAggregateInput)
], MountainOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainMinOrderByAggregateInput_1.MountainMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainMinOrderByAggregateInput_1.MountainMinOrderByAggregateInput)
], MountainOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainSumOrderByAggregateInput_1.MountainSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainSumOrderByAggregateInput_1.MountainSumOrderByAggregateInput)
], MountainOrderByWithAggregationInput.prototype, "_sum", void 0);
MountainOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainOrderByWithAggregationInput", {
        isAbstract: true
    })
], MountainOrderByWithAggregationInput);
exports.MountainOrderByWithAggregationInput = MountainOrderByWithAggregationInput;
