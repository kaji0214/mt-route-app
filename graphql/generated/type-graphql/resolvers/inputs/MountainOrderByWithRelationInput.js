"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteOrderByRelationAggregateInput_1 = require("../inputs/RouteOrderByRelationAggregateInput");
const SessionOrderByWithRelationInput_1 = require("../inputs/SessionOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MountainOrderByWithRelationInput = class MountainOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByWithRelationInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByWithRelationInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], MountainOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteOrderByRelationAggregateInput_1.RouteOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteOrderByRelationAggregateInput_1.RouteOrderByRelationAggregateInput)
], MountainOrderByWithRelationInput.prototype, "routes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionOrderByWithRelationInput_1.SessionOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionOrderByWithRelationInput_1.SessionOrderByWithRelationInput)
], MountainOrderByWithRelationInput.prototype, "Session", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MountainOrderByWithRelationInput.prototype, "sessionId", void 0);
MountainOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainOrderByWithRelationInput", {
        isAbstract: true
    })
], MountainOrderByWithRelationInput);
exports.MountainOrderByWithRelationInput = MountainOrderByWithRelationInput;
