"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngUpdateManyWithoutRouteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngCreateManyRouteInputEnvelope_1 = require("../inputs/LatlngCreateManyRouteInputEnvelope");
const LatlngCreateOrConnectWithoutRouteInput_1 = require("../inputs/LatlngCreateOrConnectWithoutRouteInput");
const LatlngCreateWithoutRouteInput_1 = require("../inputs/LatlngCreateWithoutRouteInput");
const LatlngScalarWhereInput_1 = require("../inputs/LatlngScalarWhereInput");
const LatlngUpdateManyWithWhereWithoutRouteInput_1 = require("../inputs/LatlngUpdateManyWithWhereWithoutRouteInput");
const LatlngUpdateWithWhereUniqueWithoutRouteInput_1 = require("../inputs/LatlngUpdateWithWhereUniqueWithoutRouteInput");
const LatlngUpsertWithWhereUniqueWithoutRouteInput_1 = require("../inputs/LatlngUpsertWithWhereUniqueWithoutRouteInput");
const LatlngWhereUniqueInput_1 = require("../inputs/LatlngWhereUniqueInput");
let LatlngUpdateManyWithoutRouteInput = class LatlngUpdateManyWithoutRouteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngCreateWithoutRouteInput_1.LatlngCreateWithoutRouteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngUpdateManyWithoutRouteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngCreateOrConnectWithoutRouteInput_1.LatlngCreateOrConnectWithoutRouteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngUpdateManyWithoutRouteInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngUpsertWithWhereUniqueWithoutRouteInput_1.LatlngUpsertWithWhereUniqueWithoutRouteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngUpdateManyWithoutRouteInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngCreateManyRouteInputEnvelope_1.LatlngCreateManyRouteInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngCreateManyRouteInputEnvelope_1.LatlngCreateManyRouteInputEnvelope)
], LatlngUpdateManyWithoutRouteInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngWhereUniqueInput_1.LatlngWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngUpdateManyWithoutRouteInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngWhereUniqueInput_1.LatlngWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngUpdateManyWithoutRouteInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngWhereUniqueInput_1.LatlngWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngUpdateManyWithoutRouteInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngWhereUniqueInput_1.LatlngWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngUpdateManyWithoutRouteInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngUpdateWithWhereUniqueWithoutRouteInput_1.LatlngUpdateWithWhereUniqueWithoutRouteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngUpdateManyWithoutRouteInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngUpdateManyWithWhereWithoutRouteInput_1.LatlngUpdateManyWithWhereWithoutRouteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngUpdateManyWithoutRouteInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngScalarWhereInput_1.LatlngScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngUpdateManyWithoutRouteInput.prototype, "deleteMany", void 0);
LatlngUpdateManyWithoutRouteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngUpdateManyWithoutRouteInput", {
        isAbstract: true
    })
], LatlngUpdateManyWithoutRouteInput);
exports.LatlngUpdateManyWithoutRouteInput = LatlngUpdateManyWithoutRouteInput;
