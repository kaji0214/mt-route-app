"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutMountainsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutMountainsInput_1 = require("../inputs/UserCreateWithoutMountainsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutMountainsInput = class UserCreateOrConnectWithoutMountainsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutMountainsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMountainsInput_1.UserCreateWithoutMountainsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMountainsInput_1.UserCreateWithoutMountainsInput)
], UserCreateOrConnectWithoutMountainsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutMountainsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutMountainsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutMountainsInput);
exports.UserCreateOrConnectWithoutMountainsInput = UserCreateOrConnectWithoutMountainsInput;
