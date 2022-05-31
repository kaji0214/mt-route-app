"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MountainOrderByRelationAggregateInput = class MountainOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByRelationAggregateInput.prototype, "_count", void 0);
MountainOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainOrderByRelationAggregateInput", {
        isAbstract: true
    })
], MountainOrderByRelationAggregateInput);
exports.MountainOrderByRelationAggregateInput = MountainOrderByRelationAggregateInput;
