"use strict";
var RouteWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const LatlngListRelationFilter_1 = require("../inputs/LatlngListRelationFilter");
const MountainRelationFilter_1 = require("../inputs/MountainRelationFilter");
const SessionRelationFilter_1 = require("../inputs/SessionRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let RouteWhereInput = RouteWhereInput_1 = class RouteWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RouteWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RouteWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RouteWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], RouteWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RouteWhereInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainRelationFilter_1.MountainRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainRelationFilter_1.MountainRelationFilter)
], RouteWhereInput.prototype, "mountain", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RouteWhereInput.prototype, "mountainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngListRelationFilter_1.LatlngListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngListRelationFilter_1.LatlngListRelationFilter)
], RouteWhereInput.prototype, "latlngs", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], RouteWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RouteWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionRelationFilter_1.SessionRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionRelationFilter_1.SessionRelationFilter)
], RouteWhereInput.prototype, "Session", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], RouteWhereInput.prototype, "sessionId", void 0);
RouteWhereInput = RouteWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteWhereInput", {
        isAbstract: true
    })
], RouteWhereInput);
exports.RouteWhereInput = RouteWhereInput;
