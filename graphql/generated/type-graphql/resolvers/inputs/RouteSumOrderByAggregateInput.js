"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RouteSumOrderByAggregateInput = class RouteSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteSumOrderByAggregateInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteSumOrderByAggregateInput.prototype, "mountainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteSumOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteSumOrderByAggregateInput.prototype, "sessionId", void 0);
RouteSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteSumOrderByAggregateInput", {
        isAbstract: true
    })
], RouteSumOrderByAggregateInput);
exports.RouteSumOrderByAggregateInput = RouteSumOrderByAggregateInput;
