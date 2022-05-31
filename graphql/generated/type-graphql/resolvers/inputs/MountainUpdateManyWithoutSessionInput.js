"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainUpdateManyWithoutSessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateManySessionInputEnvelope_1 = require("../inputs/MountainCreateManySessionInputEnvelope");
const MountainCreateOrConnectWithoutSessionInput_1 = require("../inputs/MountainCreateOrConnectWithoutSessionInput");
const MountainCreateWithoutSessionInput_1 = require("../inputs/MountainCreateWithoutSessionInput");
const MountainScalarWhereInput_1 = require("../inputs/MountainScalarWhereInput");
const MountainUpdateManyWithWhereWithoutSessionInput_1 = require("../inputs/MountainUpdateManyWithWhereWithoutSessionInput");
const MountainUpdateWithWhereUniqueWithoutSessionInput_1 = require("../inputs/MountainUpdateWithWhereUniqueWithoutSessionInput");
const MountainUpsertWithWhereUniqueWithoutSessionInput_1 = require("../inputs/MountainUpsertWithWhereUniqueWithoutSessionInput");
const MountainWhereUniqueInput_1 = require("../inputs/MountainWhereUniqueInput");
let MountainUpdateManyWithoutSessionInput = class MountainUpdateManyWithoutSessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainCreateWithoutSessionInput_1.MountainCreateWithoutSessionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutSessionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainCreateOrConnectWithoutSessionInput_1.MountainCreateOrConnectWithoutSessionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutSessionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainUpsertWithWhereUniqueWithoutSessionInput_1.MountainUpsertWithWhereUniqueWithoutSessionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutSessionInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateManySessionInputEnvelope_1.MountainCreateManySessionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainCreateManySessionInputEnvelope_1.MountainCreateManySessionInputEnvelope)
], MountainUpdateManyWithoutSessionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainWhereUniqueInput_1.MountainWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutSessionInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainWhereUniqueInput_1.MountainWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutSessionInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainWhereUniqueInput_1.MountainWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutSessionInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainWhereUniqueInput_1.MountainWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutSessionInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainUpdateWithWhereUniqueWithoutSessionInput_1.MountainUpdateWithWhereUniqueWithoutSessionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutSessionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainUpdateManyWithWhereWithoutSessionInput_1.MountainUpdateManyWithWhereWithoutSessionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutSessionInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainScalarWhereInput_1.MountainScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainUpdateManyWithoutSessionInput.prototype, "deleteMany", void 0);
MountainUpdateManyWithoutSessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainUpdateManyWithoutSessionInput", {
        isAbstract: true
    })
], MountainUpdateManyWithoutSessionInput);
exports.MountainUpdateManyWithoutSessionInput = MountainUpdateManyWithoutSessionInput;
