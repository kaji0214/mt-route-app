"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngAvgOrderByAggregateInput_1 = require("../inputs/LatlngAvgOrderByAggregateInput");
const LatlngCountOrderByAggregateInput_1 = require("../inputs/LatlngCountOrderByAggregateInput");
const LatlngMaxOrderByAggregateInput_1 = require("../inputs/LatlngMaxOrderByAggregateInput");
const LatlngMinOrderByAggregateInput_1 = require("../inputs/LatlngMinOrderByAggregateInput");
const LatlngSumOrderByAggregateInput_1 = require("../inputs/LatlngSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LatlngOrderByWithAggregationInput = class LatlngOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngOrderByWithAggregationInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngOrderByWithAggregationInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngOrderByWithAggregationInput.prototype, "routeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngCountOrderByAggregateInput_1.LatlngCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngCountOrderByAggregateInput_1.LatlngCountOrderByAggregateInput)
], LatlngOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngAvgOrderByAggregateInput_1.LatlngAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngAvgOrderByAggregateInput_1.LatlngAvgOrderByAggregateInput)
], LatlngOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngMaxOrderByAggregateInput_1.LatlngMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngMaxOrderByAggregateInput_1.LatlngMaxOrderByAggregateInput)
], LatlngOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngMinOrderByAggregateInput_1.LatlngMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngMinOrderByAggregateInput_1.LatlngMinOrderByAggregateInput)
], LatlngOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngSumOrderByAggregateInput_1.LatlngSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngSumOrderByAggregateInput_1.LatlngSumOrderByAggregateInput)
], LatlngOrderByWithAggregationInput.prototype, "_sum", void 0);
LatlngOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngOrderByWithAggregationInput", {
        isAbstract: true
    })
], LatlngOrderByWithAggregationInput);
exports.LatlngOrderByWithAggregationInput = LatlngOrderByWithAggregationInput;
