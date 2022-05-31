"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LatlngSumOrderByAggregateInput = class LatlngSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngSumOrderByAggregateInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngSumOrderByAggregateInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngSumOrderByAggregateInput.prototype, "routeId", void 0);
LatlngSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngSumOrderByAggregateInput", {
        isAbstract: true
    })
], LatlngSumOrderByAggregateInput);
exports.LatlngSumOrderByAggregateInput = LatlngSumOrderByAggregateInput;
