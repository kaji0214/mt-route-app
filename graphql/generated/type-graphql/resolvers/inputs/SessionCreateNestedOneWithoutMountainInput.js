"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateNestedOneWithoutMountainInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateOrConnectWithoutMountainInput_1 = require("../inputs/SessionCreateOrConnectWithoutMountainInput");
const SessionCreateWithoutMountainInput_1 = require("../inputs/SessionCreateWithoutMountainInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionCreateNestedOneWithoutMountainInput = class SessionCreateNestedOneWithoutMountainInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateWithoutMountainInput_1.SessionCreateWithoutMountainInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateWithoutMountainInput_1.SessionCreateWithoutMountainInput)
], SessionCreateNestedOneWithoutMountainInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateOrConnectWithoutMountainInput_1.SessionCreateOrConnectWithoutMountainInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateOrConnectWithoutMountainInput_1.SessionCreateOrConnectWithoutMountainInput)
], SessionCreateNestedOneWithoutMountainInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], SessionCreateNestedOneWithoutMountainInput.prototype, "connect", void 0);
SessionCreateNestedOneWithoutMountainInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionCreateNestedOneWithoutMountainInput", {
        isAbstract: true
    })
], SessionCreateNestedOneWithoutMountainInput);
exports.SessionCreateNestedOneWithoutMountainInput = SessionCreateNestedOneWithoutMountainInput;
