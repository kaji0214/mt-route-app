"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateOrConnectWithoutMountainInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateWithoutMountainInput_1 = require("../inputs/SessionCreateWithoutMountainInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionCreateOrConnectWithoutMountainInput = class SessionCreateOrConnectWithoutMountainInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], SessionCreateOrConnectWithoutMountainInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateWithoutMountainInput_1.SessionCreateWithoutMountainInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionCreateWithoutMountainInput_1.SessionCreateWithoutMountainInput)
], SessionCreateOrConnectWithoutMountainInput.prototype, "create", void 0);
SessionCreateOrConnectWithoutMountainInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionCreateOrConnectWithoutMountainInput", {
        isAbstract: true
    })
], SessionCreateOrConnectWithoutMountainInput);
exports.SessionCreateOrConnectWithoutMountainInput = SessionCreateOrConnectWithoutMountainInput;
