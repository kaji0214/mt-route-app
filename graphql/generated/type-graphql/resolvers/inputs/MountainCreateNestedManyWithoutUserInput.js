"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateManyUserInputEnvelope_1 = require("../inputs/MountainCreateManyUserInputEnvelope");
const MountainCreateOrConnectWithoutUserInput_1 = require("../inputs/MountainCreateOrConnectWithoutUserInput");
const MountainCreateWithoutUserInput_1 = require("../inputs/MountainCreateWithoutUserInput");
const MountainWhereUniqueInput_1 = require("../inputs/MountainWhereUniqueInput");
let MountainCreateNestedManyWithoutUserInput = class MountainCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainCreateWithoutUserInput_1.MountainCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainCreateOrConnectWithoutUserInput_1.MountainCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateManyUserInputEnvelope_1.MountainCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainCreateManyUserInputEnvelope_1.MountainCreateManyUserInputEnvelope)
], MountainCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainWhereUniqueInput_1.MountainWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
MountainCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], MountainCreateNestedManyWithoutUserInput);
exports.MountainCreateNestedManyWithoutUserInput = MountainCreateNestedManyWithoutUserInput;
