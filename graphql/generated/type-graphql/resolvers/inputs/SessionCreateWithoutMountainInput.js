"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateWithoutMountainInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateNestedManyWithoutSessionInput_1 = require("../inputs/RouteCreateNestedManyWithoutSessionInput");
const UserCreateNestedOneWithoutSessionsInput_1 = require("../inputs/UserCreateNestedOneWithoutSessionsInput");
let SessionCreateWithoutMountainInput = class SessionCreateWithoutMountainInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SessionCreateWithoutMountainInput.prototype, "sessionToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SessionCreateWithoutMountainInput.prototype, "expires", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSessionsInput_1.UserCreateNestedOneWithoutSessionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutSessionsInput_1.UserCreateNestedOneWithoutSessionsInput)
], SessionCreateWithoutMountainInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateNestedManyWithoutSessionInput_1.RouteCreateNestedManyWithoutSessionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateNestedManyWithoutSessionInput_1.RouteCreateNestedManyWithoutSessionInput)
], SessionCreateWithoutMountainInput.prototype, "Route", void 0);
SessionCreateWithoutMountainInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionCreateWithoutMountainInput", {
        isAbstract: true
    })
], SessionCreateWithoutMountainInput);
exports.SessionCreateWithoutMountainInput = SessionCreateWithoutMountainInput;
