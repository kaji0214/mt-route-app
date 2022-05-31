"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateWithoutLatlngsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateNestedOneWithoutRoutesInput_1 = require("../inputs/MountainCreateNestedOneWithoutRoutesInput");
const SessionCreateNestedOneWithoutRouteInput_1 = require("../inputs/SessionCreateNestedOneWithoutRouteInput");
const UserCreateNestedOneWithoutRoutesInput_1 = require("../inputs/UserCreateNestedOneWithoutRoutesInput");
let RouteCreateWithoutLatlngsInput = class RouteCreateWithoutLatlngsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RouteCreateWithoutLatlngsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RouteCreateWithoutLatlngsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RouteCreateWithoutLatlngsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RouteCreateWithoutLatlngsInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateNestedOneWithoutRoutesInput_1.MountainCreateNestedOneWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainCreateNestedOneWithoutRoutesInput_1.MountainCreateNestedOneWithoutRoutesInput)
], RouteCreateWithoutLatlngsInput.prototype, "mountain", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRoutesInput_1.UserCreateNestedOneWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutRoutesInput_1.UserCreateNestedOneWithoutRoutesInput)
], RouteCreateWithoutLatlngsInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedOneWithoutRouteInput_1.SessionCreateNestedOneWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedOneWithoutRouteInput_1.SessionCreateNestedOneWithoutRouteInput)
], RouteCreateWithoutLatlngsInput.prototype, "Session", void 0);
RouteCreateWithoutLatlngsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateWithoutLatlngsInput", {
        isAbstract: true
    })
], RouteCreateWithoutLatlngsInput);
exports.RouteCreateWithoutLatlngsInput = RouteCreateWithoutLatlngsInput;
