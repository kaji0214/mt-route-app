"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainCreateWithoutSessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateNestedManyWithoutMountainInput_1 = require("../inputs/RouteCreateNestedManyWithoutMountainInput");
const UserCreateNestedOneWithoutMountainsInput_1 = require("../inputs/UserCreateNestedOneWithoutMountainsInput");
let MountainCreateWithoutSessionInput = class MountainCreateWithoutSessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MountainCreateWithoutSessionInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MountainCreateWithoutSessionInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MountainCreateWithoutSessionInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MountainCreateWithoutSessionInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MountainCreateWithoutSessionInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMountainsInput_1.UserCreateNestedOneWithoutMountainsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutMountainsInput_1.UserCreateNestedOneWithoutMountainsInput)
], MountainCreateWithoutSessionInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateNestedManyWithoutMountainInput_1.RouteCreateNestedManyWithoutMountainInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateNestedManyWithoutMountainInput_1.RouteCreateNestedManyWithoutMountainInput)
], MountainCreateWithoutSessionInput.prototype, "routes", void 0);
MountainCreateWithoutSessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainCreateWithoutSessionInput", {
        isAbstract: true
    })
], MountainCreateWithoutSessionInput);
exports.MountainCreateWithoutSessionInput = MountainCreateWithoutSessionInput;
