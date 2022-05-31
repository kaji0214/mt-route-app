"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutRoutesInput_1 = require("../inputs/UserCreateOrConnectWithoutRoutesInput");
const UserCreateWithoutRoutesInput_1 = require("../inputs/UserCreateWithoutRoutesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutRoutesInput = class UserCreateNestedOneWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutRoutesInput_1.UserCreateWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutRoutesInput_1.UserCreateWithoutRoutesInput)
], UserCreateNestedOneWithoutRoutesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRoutesInput_1.UserCreateOrConnectWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutRoutesInput_1.UserCreateOrConnectWithoutRoutesInput)
], UserCreateNestedOneWithoutRoutesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutRoutesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutRoutesInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutRoutesInput);
exports.UserCreateNestedOneWithoutRoutesInput = UserCreateNestedOneWithoutRoutesInput;
