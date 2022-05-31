"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateWithoutMountainInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngCreateNestedManyWithoutRouteInput_1 = require("../inputs/LatlngCreateNestedManyWithoutRouteInput");
const SessionCreateNestedOneWithoutRouteInput_1 = require("../inputs/SessionCreateNestedOneWithoutRouteInput");
const UserCreateNestedOneWithoutRoutesInput_1 = require("../inputs/UserCreateNestedOneWithoutRoutesInput");
let RouteCreateWithoutMountainInput = class RouteCreateWithoutMountainInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RouteCreateWithoutMountainInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RouteCreateWithoutMountainInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RouteCreateWithoutMountainInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RouteCreateWithoutMountainInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngCreateNestedManyWithoutRouteInput_1.LatlngCreateNestedManyWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngCreateNestedManyWithoutRouteInput_1.LatlngCreateNestedManyWithoutRouteInput)
], RouteCreateWithoutMountainInput.prototype, "latlngs", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRoutesInput_1.UserCreateNestedOneWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutRoutesInput_1.UserCreateNestedOneWithoutRoutesInput)
], RouteCreateWithoutMountainInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedOneWithoutRouteInput_1.SessionCreateNestedOneWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedOneWithoutRouteInput_1.SessionCreateNestedOneWithoutRouteInput)
], RouteCreateWithoutMountainInput.prototype, "Session", void 0);
RouteCreateWithoutMountainInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateWithoutMountainInput", {
        isAbstract: true
    })
], RouteCreateWithoutMountainInput);
exports.RouteCreateWithoutMountainInput = RouteCreateWithoutMountainInput;
