"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateManyUserInputEnvelope_1 = require("../inputs/RouteCreateManyUserInputEnvelope");
const RouteCreateOrConnectWithoutUserInput_1 = require("../inputs/RouteCreateOrConnectWithoutUserInput");
const RouteCreateWithoutUserInput_1 = require("../inputs/RouteCreateWithoutUserInput");
const RouteScalarWhereInput_1 = require("../inputs/RouteScalarWhereInput");
const RouteUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/RouteUpdateManyWithWhereWithoutUserInput");
const RouteUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/RouteUpdateWithWhereUniqueWithoutUserInput");
const RouteUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/RouteUpsertWithWhereUniqueWithoutUserInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteUpdateManyWithoutUserInput = class RouteUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteCreateWithoutUserInput_1.RouteCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteCreateOrConnectWithoutUserInput_1.RouteCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteUpsertWithWhereUniqueWithoutUserInput_1.RouteUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateManyUserInputEnvelope_1.RouteCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateManyUserInputEnvelope_1.RouteCreateManyUserInputEnvelope)
], RouteUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereUniqueInput_1.RouteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereUniqueInput_1.RouteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereUniqueInput_1.RouteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereUniqueInput_1.RouteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteUpdateWithWhereUniqueWithoutUserInput_1.RouteUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteUpdateManyWithWhereWithoutUserInput_1.RouteUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteScalarWhereInput_1.RouteScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
RouteUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], RouteUpdateManyWithoutUserInput);
exports.RouteUpdateManyWithoutUserInput = RouteUpdateManyWithoutUserInput;
