"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainCreateWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateNestedOneWithoutMountainInput_1 = require("../inputs/SessionCreateNestedOneWithoutMountainInput");
const UserCreateNestedOneWithoutMountainsInput_1 = require("../inputs/UserCreateNestedOneWithoutMountainsInput");
let MountainCreateWithoutRoutesInput = class MountainCreateWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MountainCreateWithoutRoutesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MountainCreateWithoutRoutesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MountainCreateWithoutRoutesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MountainCreateWithoutRoutesInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MountainCreateWithoutRoutesInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMountainsInput_1.UserCreateNestedOneWithoutMountainsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutMountainsInput_1.UserCreateNestedOneWithoutMountainsInput)
], MountainCreateWithoutRoutesInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedOneWithoutMountainInput_1.SessionCreateNestedOneWithoutMountainInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedOneWithoutMountainInput_1.SessionCreateNestedOneWithoutMountainInput)
], MountainCreateWithoutRoutesInput.prototype, "Session", void 0);
MountainCreateWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainCreateWithoutRoutesInput", {
        isAbstract: true
    })
], MountainCreateWithoutRoutesInput);
exports.MountainCreateWithoutRoutesInput = MountainCreateWithoutRoutesInput;
