"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteOrderByWithRelationInput_1 = require("../inputs/RouteOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LatlngOrderByWithRelationInput = class LatlngOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngOrderByWithRelationInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngOrderByWithRelationInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], LatlngOrderByWithRelationInput.prototype, "routeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteOrderByWithRelationInput_1.RouteOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteOrderByWithRelationInput_1.RouteOrderByWithRelationInput)
], LatlngOrderByWithRelationInput.prototype, "route", void 0);
LatlngOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngOrderByWithRelationInput", {
        isAbstract: true
    })
], LatlngOrderByWithRelationInput);
exports.LatlngOrderByWithRelationInput = LatlngOrderByWithRelationInput;
