"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutRoutesInput_1 = require("../inputs/UserCreateOrConnectWithoutRoutesInput");
const UserCreateWithoutRoutesInput_1 = require("../inputs/UserCreateWithoutRoutesInput");
const UserUpdateWithoutRoutesInput_1 = require("../inputs/UserUpdateWithoutRoutesInput");
const UserUpsertWithoutRoutesInput_1 = require("../inputs/UserUpsertWithoutRoutesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutRoutesInput = class UserUpdateOneRequiredWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutRoutesInput_1.UserCreateWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutRoutesInput_1.UserCreateWithoutRoutesInput)
], UserUpdateOneRequiredWithoutRoutesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRoutesInput_1.UserCreateOrConnectWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutRoutesInput_1.UserCreateOrConnectWithoutRoutesInput)
], UserUpdateOneRequiredWithoutRoutesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutRoutesInput_1.UserUpsertWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutRoutesInput_1.UserUpsertWithoutRoutesInput)
], UserUpdateOneRequiredWithoutRoutesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutRoutesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutRoutesInput_1.UserUpdateWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutRoutesInput_1.UserUpdateWithoutRoutesInput)
], UserUpdateOneRequiredWithoutRoutesInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutRoutesInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutRoutesInput);
exports.UserUpdateOneRequiredWithoutRoutesInput = UserUpdateOneRequiredWithoutRoutesInput;
