"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutRoutesInput_1 = require("../inputs/UserCreateWithoutRoutesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutRoutesInput = class UserCreateOrConnectWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutRoutesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutRoutesInput_1.UserCreateWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutRoutesInput_1.UserCreateWithoutRoutesInput)
], UserCreateOrConnectWithoutRoutesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutRoutesInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutRoutesInput);
exports.UserCreateOrConnectWithoutRoutesInput = UserCreateOrConnectWithoutRoutesInput;
