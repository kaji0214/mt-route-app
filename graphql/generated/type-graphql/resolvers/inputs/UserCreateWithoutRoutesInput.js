"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const MountainCreateNestedManyWithoutUserInput_1 = require("../inputs/MountainCreateNestedManyWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
let UserCreateWithoutRoutesInput = class UserCreateWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRoutesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRoutesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutRoutesInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRoutesInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutRoutesInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutRoutesInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateNestedManyWithoutUserInput_1.MountainCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainCreateNestedManyWithoutUserInput_1.MountainCreateNestedManyWithoutUserInput)
], UserCreateWithoutRoutesInput.prototype, "mountains", void 0);
UserCreateWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutRoutesInput", {
        isAbstract: true
    })
], UserCreateWithoutRoutesInput);
exports.UserCreateWithoutRoutesInput = UserCreateWithoutRoutesInput;
