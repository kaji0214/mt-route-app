"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateNestedManyWithoutSessionInput_1 = require("../inputs/MountainCreateNestedManyWithoutSessionInput");
const RouteCreateNestedManyWithoutSessionInput_1 = require("../inputs/RouteCreateNestedManyWithoutSessionInput");
let SessionCreateWithoutUserInput = class SessionCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SessionCreateWithoutUserInput.prototype, "sessionToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SessionCreateWithoutUserInput.prototype, "expires", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateNestedManyWithoutSessionInput_1.MountainCreateNestedManyWithoutSessionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainCreateNestedManyWithoutSessionInput_1.MountainCreateNestedManyWithoutSessionInput)
], SessionCreateWithoutUserInput.prototype, "Mountain", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateNestedManyWithoutSessionInput_1.RouteCreateNestedManyWithoutSessionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateNestedManyWithoutSessionInput_1.RouteCreateNestedManyWithoutSessionInput)
], SessionCreateWithoutUserInput.prototype, "Route", void 0);
SessionCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionCreateWithoutUserInput", {
        isAbstract: true
    })
], SessionCreateWithoutUserInput);
exports.SessionCreateWithoutUserInput = SessionCreateWithoutUserInput;
