"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngCreateNestedManyWithoutRouteInput_1 = require("../inputs/LatlngCreateNestedManyWithoutRouteInput");
const MountainCreateNestedOneWithoutRoutesInput_1 = require("../inputs/MountainCreateNestedOneWithoutRoutesInput");
const SessionCreateNestedOneWithoutRouteInput_1 = require("../inputs/SessionCreateNestedOneWithoutRouteInput");
let RouteCreateWithoutUserInput = class RouteCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RouteCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RouteCreateWithoutUserInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RouteCreateWithoutUserInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RouteCreateWithoutUserInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateNestedOneWithoutRoutesInput_1.MountainCreateNestedOneWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainCreateNestedOneWithoutRoutesInput_1.MountainCreateNestedOneWithoutRoutesInput)
], RouteCreateWithoutUserInput.prototype, "mountain", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngCreateNestedManyWithoutRouteInput_1.LatlngCreateNestedManyWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngCreateNestedManyWithoutRouteInput_1.LatlngCreateNestedManyWithoutRouteInput)
], RouteCreateWithoutUserInput.prototype, "latlngs", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedOneWithoutRouteInput_1.SessionCreateNestedOneWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedOneWithoutRouteInput_1.SessionCreateNestedOneWithoutRouteInput)
], RouteCreateWithoutUserInput.prototype, "Session", void 0);
RouteCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateWithoutUserInput", {
        isAbstract: true
    })
], RouteCreateWithoutUserInput);
exports.RouteCreateWithoutUserInput = RouteCreateWithoutUserInput;
