"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngOrderByRelationAggregateInput_1 = require("../inputs/LatlngOrderByRelationAggregateInput");
const MountainOrderByWithRelationInput_1 = require("../inputs/MountainOrderByWithRelationInput");
const SessionOrderByWithRelationInput_1 = require("../inputs/SessionOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RouteOrderByWithRelationInput = class RouteOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByWithRelationInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainOrderByWithRelationInput_1.MountainOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainOrderByWithRelationInput_1.MountainOrderByWithRelationInput)
], RouteOrderByWithRelationInput.prototype, "mountain", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByWithRelationInput.prototype, "mountainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngOrderByRelationAggregateInput_1.LatlngOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngOrderByRelationAggregateInput_1.LatlngOrderByRelationAggregateInput)
], RouteOrderByWithRelationInput.prototype, "latlngs", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], RouteOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionOrderByWithRelationInput_1.SessionOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionOrderByWithRelationInput_1.SessionOrderByWithRelationInput)
], RouteOrderByWithRelationInput.prototype, "Session", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RouteOrderByWithRelationInput.prototype, "sessionId", void 0);
RouteOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteOrderByWithRelationInput", {
        isAbstract: true
    })
], RouteOrderByWithRelationInput);
exports.RouteOrderByWithRelationInput = RouteOrderByWithRelationInput;
