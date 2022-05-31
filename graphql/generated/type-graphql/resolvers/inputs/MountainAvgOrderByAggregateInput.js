"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MountainAvgOrderByAggregateInput = class MountainAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainAvgOrderByAggregateInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainAvgOrderByAggregateInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainAvgOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainAvgOrderByAggregateInput.prototype, "sessionId", void 0);
MountainAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainAvgOrderByAggregateInput", {
        isAbstract: true
    })
], MountainAvgOrderByAggregateInput);
exports.MountainAvgOrderByAggregateInput = MountainAvgOrderByAggregateInput;
