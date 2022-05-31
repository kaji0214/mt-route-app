"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateManyUserInputEnvelope_1 = require("../inputs/MountainCreateManyUserInputEnvelope");
const MountainCreateOrConnectWithoutUserInput_1 = require("../inputs/MountainCreateOrConnectWithoutUserInput");
const MountainCreateWithoutUserInput_1 = require("../inputs/MountainCreateWithoutUserInput");
const MountainScalarWhereInput_1 = require("../inputs/MountainScalarWhereInput");
const MountainUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/MountainUpdateManyWithWhereWithoutUserInput");
const MountainUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/MountainUpdateWithWhereUniqueWithoutUserInput");
const MountainUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/MountainUpsertWithWhereUniqueWithoutUserInput");
const MountainWhereUniqueInput_1 = require("../inputs/MountainWhereUniqueInput");
let MountainUpdateManyWithoutUserInput = class MountainUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainCreateWithoutUserInput_1.MountainCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainCreateOrConnectWithoutUserInput_1.MountainCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainUpsertWithWhereUniqueWithoutUserInput_1.MountainUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateManyUserInputEnvelope_1.MountainCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainCreateManyUserInputEnvelope_1.MountainCreateManyUserInputEnvelope)
], MountainUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainWhereUniqueInput_1.MountainWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainWhereUniqueInput_1.MountainWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainWhereUniqueInput_1.MountainWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainWhereUniqueInput_1.MountainWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainUpdateWithWhereUniqueWithoutUserInput_1.MountainUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainUpdateManyWithWhereWithoutUserInput_1.MountainUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainScalarWhereInput_1.MountainScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
MountainUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], MountainUpdateManyWithoutUserInput);
exports.MountainUpdateManyWithoutUserInput = MountainUpdateManyWithoutUserInput;
