"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutMountainsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutMountainsInput_1 = require("../inputs/UserCreateWithoutMountainsInput");
const UserUpdateWithoutMountainsInput_1 = require("../inputs/UserUpdateWithoutMountainsInput");
let UserUpsertWithoutMountainsInput = class UserUpsertWithoutMountainsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutMountainsInput_1.UserUpdateWithoutMountainsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutMountainsInput_1.UserUpdateWithoutMountainsInput)
], UserUpsertWithoutMountainsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMountainsInput_1.UserCreateWithoutMountainsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMountainsInput_1.UserCreateWithoutMountainsInput)
], UserUpsertWithoutMountainsInput.prototype, "create", void 0);
UserUpsertWithoutMountainsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutMountainsInput", {
        isAbstract: true
    })
], UserUpsertWithoutMountainsInput);
exports.UserUpsertWithoutMountainsInput = UserUpsertWithoutMountainsInput;
