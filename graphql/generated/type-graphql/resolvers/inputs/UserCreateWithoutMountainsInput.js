"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutMountainsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const RouteCreateNestedManyWithoutUserInput_1 = require("../inputs/RouteCreateNestedManyWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
let UserCreateWithoutMountainsInput = class UserCreateWithoutMountainsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutMountainsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutMountainsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutMountainsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutMountainsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutMountainsInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutMountainsInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateNestedManyWithoutUserInput_1.RouteCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateNestedManyWithoutUserInput_1.RouteCreateNestedManyWithoutUserInput)
], UserCreateWithoutMountainsInput.prototype, "routes", void 0);
UserCreateWithoutMountainsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutMountainsInput", {
        isAbstract: true
    })
], UserCreateWithoutMountainsInput);
exports.UserCreateWithoutMountainsInput = UserCreateWithoutMountainsInput;
