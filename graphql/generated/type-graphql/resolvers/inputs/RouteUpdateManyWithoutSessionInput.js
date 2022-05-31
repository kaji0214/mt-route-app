"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUpdateManyWithoutSessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateManySessionInputEnvelope_1 = require("../inputs/RouteCreateManySessionInputEnvelope");
const RouteCreateOrConnectWithoutSessionInput_1 = require("../inputs/RouteCreateOrConnectWithoutSessionInput");
const RouteCreateWithoutSessionInput_1 = require("../inputs/RouteCreateWithoutSessionInput");
const RouteScalarWhereInput_1 = require("../inputs/RouteScalarWhereInput");
const RouteUpdateManyWithWhereWithoutSessionInput_1 = require("../inputs/RouteUpdateManyWithWhereWithoutSessionInput");
const RouteUpdateWithWhereUniqueWithoutSessionInput_1 = require("../inputs/RouteUpdateWithWhereUniqueWithoutSessionInput");
const RouteUpsertWithWhereUniqueWithoutSessionInput_1 = require("../inputs/RouteUpsertWithWhereUniqueWithoutSessionInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteUpdateManyWithoutSessionInput = class RouteUpdateManyWithoutSessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteCreateWithoutSessionInput_1.RouteCreateWithoutSessionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutSessionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteCreateOrConnectWithoutSessionInput_1.RouteCreateOrConnectWithoutSessionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutSessionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteUpsertWithWhereUniqueWithoutSessionInput_1.RouteUpsertWithWhereUniqueWithoutSessionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutSessionInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateManySessionInputEnvelope_1.RouteCreateManySessionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateManySessionInputEnvelope_1.RouteCreateManySessionInputEnvelope)
], RouteUpdateManyWithoutSessionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereUniqueInput_1.RouteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutSessionInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereUniqueInput_1.RouteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutSessionInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereUniqueInput_1.RouteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutSessionInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereUniqueInput_1.RouteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutSessionInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteUpdateWithWhereUniqueWithoutSessionInput_1.RouteUpdateWithWhereUniqueWithoutSessionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutSessionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteUpdateManyWithWhereWithoutSessionInput_1.RouteUpdateManyWithWhereWithoutSessionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutSessionInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteScalarWhereInput_1.RouteScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutSessionInput.prototype, "deleteMany", void 0);
RouteUpdateManyWithoutSessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteUpdateManyWithoutSessionInput", {
        isAbstract: true
    })
], RouteUpdateManyWithoutSessionInput);
exports.RouteUpdateManyWithoutSessionInput = RouteUpdateManyWithoutSessionInput;
