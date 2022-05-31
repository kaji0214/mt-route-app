"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateNestedManyWithoutMountainInput_1 = require("../inputs/RouteCreateNestedManyWithoutMountainInput");
const SessionCreateNestedOneWithoutMountainInput_1 = require("../inputs/SessionCreateNestedOneWithoutMountainInput");
const UserCreateNestedOneWithoutMountainsInput_1 = require("../inputs/UserCreateNestedOneWithoutMountainsInput");
let MountainCreateInput = class MountainCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MountainCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MountainCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MountainCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MountainCreateInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MountainCreateInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMountainsInput_1.UserCreateNestedOneWithoutMountainsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutMountainsInput_1.UserCreateNestedOneWithoutMountainsInput)
], MountainCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateNestedManyWithoutMountainInput_1.RouteCreateNestedManyWithoutMountainInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateNestedManyWithoutMountainInput_1.RouteCreateNestedManyWithoutMountainInput)
], MountainCreateInput.prototype, "routes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedOneWithoutMountainInput_1.SessionCreateNestedOneWithoutMountainInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedOneWithoutMountainInput_1.SessionCreateNestedOneWithoutMountainInput)
], MountainCreateInput.prototype, "Session", void 0);
MountainCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainCreateInput", {
        isAbstract: true
    })
], MountainCreateInput);
exports.MountainCreateInput = MountainCreateInput;
