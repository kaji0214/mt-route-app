"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainCreateOrConnectWithoutSessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateWithoutSessionInput_1 = require("../inputs/MountainCreateWithoutSessionInput");
const MountainWhereUniqueInput_1 = require("../inputs/MountainWhereUniqueInput");
let MountainCreateOrConnectWithoutSessionInput = class MountainCreateOrConnectWithoutSessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereUniqueInput_1.MountainWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainWhereUniqueInput_1.MountainWhereUniqueInput)
], MountainCreateOrConnectWithoutSessionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateWithoutSessionInput_1.MountainCreateWithoutSessionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainCreateWithoutSessionInput_1.MountainCreateWithoutSessionInput)
], MountainCreateOrConnectWithoutSessionInput.prototype, "create", void 0);
MountainCreateOrConnectWithoutSessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainCreateOrConnectWithoutSessionInput", {
        isAbstract: true
    })
], MountainCreateOrConnectWithoutSessionInput);
exports.MountainCreateOrConnectWithoutSessionInput = MountainCreateOrConnectWithoutSessionInput;
