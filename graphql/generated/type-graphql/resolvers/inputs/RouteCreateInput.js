"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngCreateNestedManyWithoutRouteInput_1 = require("../inputs/LatlngCreateNestedManyWithoutRouteInput");
const MountainCreateNestedOneWithoutRoutesInput_1 = require("../inputs/MountainCreateNestedOneWithoutRoutesInput");
const SessionCreateNestedOneWithoutRouteInput_1 = require("../inputs/SessionCreateNestedOneWithoutRouteInput");
const UserCreateNestedOneWithoutRoutesInput_1 = require("../inputs/UserCreateNestedOneWithoutRoutesInput");
let RouteCreateInput = class RouteCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RouteCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RouteCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RouteCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RouteCreateInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateNestedOneWithoutRoutesInput_1.MountainCreateNestedOneWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainCreateNestedOneWithoutRoutesInput_1.MountainCreateNestedOneWithoutRoutesInput)
], RouteCreateInput.prototype, "mountain", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngCreateNestedManyWithoutRouteInput_1.LatlngCreateNestedManyWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngCreateNestedManyWithoutRouteInput_1.LatlngCreateNestedManyWithoutRouteInput)
], RouteCreateInput.prototype, "latlngs", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRoutesInput_1.UserCreateNestedOneWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutRoutesInput_1.UserCreateNestedOneWithoutRoutesInput)
], RouteCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedOneWithoutRouteInput_1.SessionCreateNestedOneWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedOneWithoutRouteInput_1.SessionCreateNestedOneWithoutRouteInput)
], RouteCreateInput.prototype, "Session", void 0);
RouteCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateInput", {
        isAbstract: true
    })
], RouteCreateInput);
exports.RouteCreateInput = RouteCreateInput;
