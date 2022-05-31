"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SessionAvgOrderByAggregateInput = class SessionAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SessionAvgOrderByAggregateInput.prototype, "userId", void 0);
SessionAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionAvgOrderByAggregateInput", {
        isAbstract: true
    })
], SessionAvgOrderByAggregateInput);
exports.SessionAvgOrderByAggregateInput = SessionAvgOrderByAggregateInput;
