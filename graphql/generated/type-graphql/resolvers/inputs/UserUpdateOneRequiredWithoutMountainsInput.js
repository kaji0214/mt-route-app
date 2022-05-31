"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutMountainsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutMountainsInput_1 = require("../inputs/UserCreateOrConnectWithoutMountainsInput");
const UserCreateWithoutMountainsInput_1 = require("../inputs/UserCreateWithoutMountainsInput");
const UserUpdateWithoutMountainsInput_1 = require("../inputs/UserUpdateWithoutMountainsInput");
const UserUpsertWithoutMountainsInput_1 = require("../inputs/UserUpsertWithoutMountainsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutMountainsInput = class UserUpdateOneRequiredWithoutMountainsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMountainsInput_1.UserCreateWithoutMountainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMountainsInput_1.UserCreateWithoutMountainsInput)
], UserUpdateOneRequiredWithoutMountainsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMountainsInput_1.UserCreateOrConnectWithoutMountainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutMountainsInput_1.UserCreateOrConnectWithoutMountainsInput)
], UserUpdateOneRequiredWithoutMountainsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutMountainsInput_1.UserUpsertWithoutMountainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutMountainsInput_1.UserUpsertWithoutMountainsInput)
], UserUpdateOneRequiredWithoutMountainsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutMountainsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutMountainsInput_1.UserUpdateWithoutMountainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutMountainsInput_1.UserUpdateWithoutMountainsInput)
], UserUpdateOneRequiredWithoutMountainsInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutMountainsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutMountainsInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutMountainsInput);
exports.UserUpdateOneRequiredWithoutMountainsInput = UserUpdateOneRequiredWithoutMountainsInput;
