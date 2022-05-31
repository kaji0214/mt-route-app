"use strict";
var MountainWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const RouteListRelationFilter_1 = require("../inputs/RouteListRelationFilter");
const SessionRelationFilter_1 = require("../inputs/SessionRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let MountainWhereInput = MountainWhereInput_1 = class MountainWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], MountainWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MountainWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MountainWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MountainWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], MountainWhereInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], MountainWhereInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], MountainWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], MountainWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteListRelationFilter_1.RouteListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteListRelationFilter_1.RouteListRelationFilter)
], MountainWhereInput.prototype, "routes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionRelationFilter_1.SessionRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionRelationFilter_1.SessionRelationFilter)
], MountainWhereInput.prototype, "Session", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], MountainWhereInput.prototype, "sessionId", void 0);
MountainWhereInput = MountainWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainWhereInput", {
        isAbstract: true
    })
], MountainWhereInput);
exports.MountainWhereInput = MountainWhereInput;
