"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateManySessionInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateManySessionInput_1 = require("../inputs/RouteCreateManySessionInput");
let RouteCreateManySessionInputEnvelope = class RouteCreateManySessionInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteCreateManySessionInput_1.RouteCreateManySessionInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], RouteCreateManySessionInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], RouteCreateManySessionInputEnvelope.prototype, "skipDuplicates", void 0);
RouteCreateManySessionInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateManySessionInputEnvelope", {
        isAbstract: true
    })
], RouteCreateManySessionInputEnvelope);
exports.RouteCreateManySessionInputEnvelope = RouteCreateManySessionInputEnvelope;
