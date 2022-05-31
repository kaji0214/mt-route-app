"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUpdateManyWithoutMountainInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateManyMountainInputEnvelope_1 = require("../inputs/RouteCreateManyMountainInputEnvelope");
const RouteCreateOrConnectWithoutMountainInput_1 = require("../inputs/RouteCreateOrConnectWithoutMountainInput");
const RouteCreateWithoutMountainInput_1 = require("../inputs/RouteCreateWithoutMountainInput");
const RouteScalarWhereInput_1 = require("../inputs/RouteScalarWhereInput");
const RouteUpdateManyWithWhereWithoutMountainInput_1 = require("../inputs/RouteUpdateManyWithWhereWithoutMountainInput");
const RouteUpdateWithWhereUniqueWithoutMountainInput_1 = require("../inputs/RouteUpdateWithWhereUniqueWithoutMountainInput");
const RouteUpsertWithWhereUniqueWithoutMountainInput_1 = require("../inputs/RouteUpsertWithWhereUniqueWithoutMountainInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteUpdateManyWithoutMountainInput = class RouteUpdateManyWithoutMountainInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteCreateWithoutMountainInput_1.RouteCreateWithoutMountainInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutMountainInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteCreateOrConnectWithoutMountainInput_1.RouteCreateOrConnectWithoutMountainInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutMountainInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteUpsertWithWhereUniqueWithoutMountainInput_1.RouteUpsertWithWhereUniqueWithoutMountainInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutMountainInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateManyMountainInputEnvelope_1.RouteCreateManyMountainInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateManyMountainInputEnvelope_1.RouteCreateManyMountainInputEnvelope)
], RouteUpdateManyWithoutMountainInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereUniqueInput_1.RouteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutMountainInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereUniqueInput_1.RouteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutMountainInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereUniqueInput_1.RouteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutMountainInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereUniqueInput_1.RouteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutMountainInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteUpdateWithWhereUniqueWithoutMountainInput_1.RouteUpdateWithWhereUniqueWithoutMountainInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutMountainInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteUpdateManyWithWhereWithoutMountainInput_1.RouteUpdateManyWithWhereWithoutMountainInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutMountainInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteScalarWhereInput_1.RouteScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteUpdateManyWithoutMountainInput.prototype, "deleteMany", void 0);
RouteUpdateManyWithoutMountainInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteUpdateManyWithoutMountainInput", {
        isAbstract: true
    })
], RouteUpdateManyWithoutMountainInput);
exports.RouteUpdateManyWithoutMountainInput = RouteUpdateManyWithoutMountainInput;
