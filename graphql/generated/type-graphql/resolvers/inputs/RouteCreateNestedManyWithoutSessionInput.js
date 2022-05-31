"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateNestedManyWithoutSessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateManySessionInputEnvelope_1 = require("../inputs/RouteCreateManySessionInputEnvelope");
const RouteCreateOrConnectWithoutSessionInput_1 = require("../inputs/RouteCreateOrConnectWithoutSessionInput");
const RouteCreateWithoutSessionInput_1 = require("../inputs/RouteCreateWithoutSessionInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteCreateNestedManyWithoutSessionInput = class RouteCreateNestedManyWithoutSessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteCreateWithoutSessionInput_1.RouteCreateWithoutSessionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteCreateNestedManyWithoutSessionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteCreateOrConnectWithoutSessionInput_1.RouteCreateOrConnectWithoutSessionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteCreateNestedManyWithoutSessionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateManySessionInputEnvelope_1.RouteCreateManySessionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateManySessionInputEnvelope_1.RouteCreateManySessionInputEnvelope)
], RouteCreateNestedManyWithoutSessionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereUniqueInput_1.RouteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteCreateNestedManyWithoutSessionInput.prototype, "connect", void 0);
RouteCreateNestedManyWithoutSessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateNestedManyWithoutSessionInput", {
        isAbstract: true
    })
], RouteCreateNestedManyWithoutSessionInput);
exports.RouteCreateNestedManyWithoutSessionInput = RouteCreateNestedManyWithoutSessionInput;
