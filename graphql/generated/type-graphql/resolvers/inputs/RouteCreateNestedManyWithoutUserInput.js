"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateManyUserInputEnvelope_1 = require("../inputs/RouteCreateManyUserInputEnvelope");
const RouteCreateOrConnectWithoutUserInput_1 = require("../inputs/RouteCreateOrConnectWithoutUserInput");
const RouteCreateWithoutUserInput_1 = require("../inputs/RouteCreateWithoutUserInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteCreateNestedManyWithoutUserInput = class RouteCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteCreateWithoutUserInput_1.RouteCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteCreateOrConnectWithoutUserInput_1.RouteCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateManyUserInputEnvelope_1.RouteCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateManyUserInputEnvelope_1.RouteCreateManyUserInputEnvelope)
], RouteCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereUniqueInput_1.RouteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
RouteCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], RouteCreateNestedManyWithoutUserInput);
exports.RouteCreateNestedManyWithoutUserInput = RouteCreateNestedManyWithoutUserInput;
