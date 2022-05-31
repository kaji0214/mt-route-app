"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LatlngAvgOrderByAggregateInput = class LatlngAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngAvgOrderByAggregateInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngAvgOrderByAggregateInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngAvgOrderByAggregateInput.prototype, "routeId", void 0);
LatlngAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngAvgOrderByAggregateInput", {
        isAbstract: true
    })
], LatlngAvgOrderByAggregateInput);
exports.LatlngAvgOrderByAggregateInput = LatlngAvgOrderByAggregateInput;
