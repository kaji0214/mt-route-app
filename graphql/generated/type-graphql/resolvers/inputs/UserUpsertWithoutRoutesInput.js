"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutRoutesInput_1 = require("../inputs/UserCreateWithoutRoutesInput");
const UserUpdateWithoutRoutesInput_1 = require("../inputs/UserUpdateWithoutRoutesInput");
let UserUpsertWithoutRoutesInput = class UserUpsertWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutRoutesInput_1.UserUpdateWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutRoutesInput_1.UserUpdateWithoutRoutesInput)
], UserUpsertWithoutRoutesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutRoutesInput_1.UserCreateWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutRoutesInput_1.UserCreateWithoutRoutesInput)
], UserUpsertWithoutRoutesInput.prototype, "create", void 0);
UserUpsertWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutRoutesInput", {
        isAbstract: true
    })
], UserUpsertWithoutRoutesInput);
exports.UserUpsertWithoutRoutesInput = UserUpsertWithoutRoutesInput;
