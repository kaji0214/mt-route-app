"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateNestedManyWithoutMountainInput_1 = require("../inputs/RouteCreateNestedManyWithoutMountainInput");
const SessionCreateNestedOneWithoutMountainInput_1 = require("../inputs/SessionCreateNestedOneWithoutMountainInput");
let MountainCreateWithoutUserInput = class MountainCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MountainCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MountainCreateWithoutUserInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MountainCreateWithoutUserInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MountainCreateWithoutUserInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MountainCreateWithoutUserInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateNestedManyWithoutMountainInput_1.RouteCreateNestedManyWithoutMountainInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateNestedManyWithoutMountainInput_1.RouteCreateNestedManyWithoutMountainInput)
], MountainCreateWithoutUserInput.prototype, "routes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedOneWithoutMountainInput_1.SessionCreateNestedOneWithoutMountainInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedOneWithoutMountainInput_1.SessionCreateNestedOneWithoutMountainInput)
], MountainCreateWithoutUserInput.prototype, "Session", void 0);
MountainCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainCreateWithoutUserInput", {
        isAbstract: true
    })
], MountainCreateWithoutUserInput);
exports.MountainCreateWithoutUserInput = MountainCreateWithoutUserInput;
