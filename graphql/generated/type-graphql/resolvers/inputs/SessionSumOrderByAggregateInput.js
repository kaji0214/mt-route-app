"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SessionSumOrderByAggregateInput = class SessionSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionSumOrderByAggregateInput.prototype, "userId", void 0);
SessionSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionSumOrderByAggregateInput", {
        isAbstract: true
    })
], SessionSumOrderByAggregateInput);
exports.SessionSumOrderByAggregateInput = SessionSumOrderByAggregateInput;
