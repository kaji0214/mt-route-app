"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateWithoutSessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngCreateNestedManyWithoutRouteInput_1 = require("../inputs/LatlngCreateNestedManyWithoutRouteInput");
const MountainCreateNestedOneWithoutRoutesInput_1 = require("../inputs/MountainCreateNestedOneWithoutRoutesInput");
const UserCreateNestedOneWithoutRoutesInput_1 = require("../inputs/UserCreateNestedOneWithoutRoutesInput");
let RouteCreateWithoutSessionInput = class RouteCreateWithoutSessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RouteCreateWithoutSessionInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RouteCreateWithoutSessionInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RouteCreateWithoutSessionInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RouteCreateWithoutSessionInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateNestedOneWithoutRoutesInput_1.MountainCreateNestedOneWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainCreateNestedOneWithoutRoutesInput_1.MountainCreateNestedOneWithoutRoutesInput)
], RouteCreateWithoutSessionInput.prototype, "mountain", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngCreateNestedManyWithoutRouteInput_1.LatlngCreateNestedManyWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngCreateNestedManyWithoutRouteInput_1.LatlngCreateNestedManyWithoutRouteInput)
], RouteCreateWithoutSessionInput.prototype, "latlngs", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRoutesInput_1.UserCreateNestedOneWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutRoutesInput_1.UserCreateNestedOneWithoutRoutesInput)
], RouteCreateWithoutSessionInput.prototype, "user", void 0);
RouteCreateWithoutSessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateWithoutSessionInput", {
        isAbstract: true
    })
], RouteCreateWithoutSessionInput);
exports.RouteCreateWithoutSessionInput = RouteCreateWithoutSessionInput;
