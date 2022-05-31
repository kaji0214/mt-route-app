"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RouteOrderByRelationAggregateInput = class RouteOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByRelationAggregateInput.prototype, "_count", void 0);
RouteOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteOrderByRelationAggregateInput", {
        isAbstract: true
    })
], RouteOrderByRelationAggregateInput);
exports.RouteOrderByRelationAggregateInput = RouteOrderByRelationAggregateInput;
