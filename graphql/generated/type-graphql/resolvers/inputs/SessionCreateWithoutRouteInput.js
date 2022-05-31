"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateWithoutRouteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateNestedManyWithoutSessionInput_1 = require("../inputs/MountainCreateNestedManyWithoutSessionInput");
const UserCreateNestedOneWithoutSessionsInput_1 = require("../inputs/UserCreateNestedOneWithoutSessionsInput");
let SessionCreateWithoutRouteInput = class SessionCreateWithoutRouteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SessionCreateWithoutRouteInput.prototype, "sessionToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SessionCreateWithoutRouteInput.prototype, "expires", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSessionsInput_1.UserCreateNestedOneWithoutSessionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutSessionsInput_1.UserCreateNestedOneWithoutSessionsInput)
], SessionCreateWithoutRouteInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateNestedManyWithoutSessionInput_1.MountainCreateNestedManyWithoutSessionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainCreateNestedManyWithoutSessionInput_1.MountainCreateNestedManyWithoutSessionInput)
], SessionCreateWithoutRouteInput.prototype, "Mountain", void 0);
SessionCreateWithoutRouteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionCreateWithoutRouteInput", {
        isAbstract: true
    })
], SessionCreateWithoutRouteInput);
exports.SessionCreateWithoutRouteInput = SessionCreateWithoutRouteInput;
