"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateWithoutUserInput_1 = require("../inputs/MountainCreateWithoutUserInput");
const MountainWhereUniqueInput_1 = require("../inputs/MountainWhereUniqueInput");
let MountainCreateOrConnectWithoutUserInput = class MountainCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereUniqueInput_1.MountainWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainWhereUniqueInput_1.MountainWhereUniqueInput)
], MountainCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateWithoutUserInput_1.MountainCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainCreateWithoutUserInput_1.MountainCreateWithoutUserInput)
], MountainCreateOrConnectWithoutUserInput.prototype, "create", void 0);
MountainCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], MountainCreateOrConnectWithoutUserInput);
exports.MountainCreateOrConnectWithoutUserInput = MountainCreateOrConnectWithoutUserInput;
