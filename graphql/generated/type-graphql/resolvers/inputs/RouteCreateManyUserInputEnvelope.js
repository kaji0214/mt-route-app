"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateManyUserInput_1 = require("../inputs/RouteCreateManyUserInput");
let RouteCreateManyUserInputEnvelope = class RouteCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteCreateManyUserInput_1.RouteCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], RouteCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], RouteCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
RouteCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], RouteCreateManyUserInputEnvelope);
exports.RouteCreateManyUserInputEnvelope = RouteCreateManyUserInputEnvelope;
