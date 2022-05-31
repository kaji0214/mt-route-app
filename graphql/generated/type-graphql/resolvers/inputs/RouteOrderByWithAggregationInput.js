"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteAvgOrderByAggregateInput_1 = require("../inputs/RouteAvgOrderByAggregateInput");
const RouteCountOrderByAggregateInput_1 = require("../inputs/RouteCountOrderByAggregateInput");
const RouteMaxOrderByAggregateInput_1 = require("../inputs/RouteMaxOrderByAggregateInput");
const RouteMinOrderByAggregateInput_1 = require("../inputs/RouteMinOrderByAggregateInput");
const RouteSumOrderByAggregateInput_1 = require("../inputs/RouteSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RouteOrderByWithAggregationInput = class RouteOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByWithAggregationInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByWithAggregationInput.prototype, "mountainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByWithAggregationInput.prototype, "sessionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCountOrderByAggregateInput_1.RouteCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCountOrderByAggregateInput_1.RouteCountOrderByAggregateInput)
], RouteOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteAvgOrderByAggregateInput_1.RouteAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteAvgOrderByAggregateInput_1.RouteAvgOrderByAggregateInput)
], RouteOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteMaxOrderByAggregateInput_1.RouteMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteMaxOrderByAggregateInput_1.RouteMaxOrderByAggregateInput)
], RouteOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteMinOrderByAggregateInput_1.RouteMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteMinOrderByAggregateInput_1.RouteMinOrderByAggregateInput)
], RouteOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteSumOrderByAggregateInput_1.RouteSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteSumOrderByAggregateInput_1.RouteSumOrderByAggregateInput)
], RouteOrderByWithAggregationInput.prototype, "_sum", void 0);
RouteOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteOrderByWithAggregationInput", {
        isAbstract: true
    })
], RouteOrderByWithAggregationInput);
exports.RouteOrderByWithAggregationInput = RouteOrderByWithAggregationInput;
