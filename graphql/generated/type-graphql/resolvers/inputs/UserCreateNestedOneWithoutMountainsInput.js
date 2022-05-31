"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutMountainsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutMountainsInput_1 = require("../inputs/UserCreateOrConnectWithoutMountainsInput");
const UserCreateWithoutMountainsInput_1 = require("../inputs/UserCreateWithoutMountainsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutMountainsInput = class UserCreateNestedOneWithoutMountainsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMountainsInput_1.UserCreateWithoutMountainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMountainsInput_1.UserCreateWithoutMountainsInput)
], UserCreateNestedOneWithoutMountainsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMountainsInput_1.UserCreateOrConnectWithoutMountainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutMountainsInput_1.UserCreateOrConnectWithoutMountainsInput)
], UserCreateNestedOneWithoutMountainsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutMountainsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutMountainsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutMountainsInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutMountainsInput);
exports.UserCreateNestedOneWithoutMountainsInput = UserCreateNestedOneWithoutMountainsInput;
