"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateNestedManyWithoutUserInput_1 = require("../inputs/MountainCreateNestedManyWithoutUserInput");
const RouteCreateNestedManyWithoutUserInput_1 = require("../inputs/RouteCreateNestedManyWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
let UserCreateWithoutAccountsInput = class UserCreateWithoutAccountsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutAccountsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateNestedManyWithoutUserInput_1.RouteCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateNestedManyWithoutUserInput_1.RouteCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "routes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateNestedManyWithoutUserInput_1.MountainCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainCreateNestedManyWithoutUserInput_1.MountainCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "mountains", void 0);
UserCreateWithoutAccountsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutAccountsInput", {
        isAbstract: true
    })
], UserCreateWithoutAccountsInput);
exports.UserCreateWithoutAccountsInput = UserCreateWithoutAccountsInput;
