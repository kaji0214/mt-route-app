"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateManyMountainInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateManyMountainInput_1 = require("../inputs/RouteCreateManyMountainInput");
let RouteCreateManyMountainInputEnvelope = class RouteCreateManyMountainInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteCreateManyMountainInput_1.RouteCreateManyMountainInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], RouteCreateManyMountainInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], RouteCreateManyMountainInputEnvelope.prototype, "skipDuplicates", void 0);
RouteCreateManyMountainInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateManyMountainInputEnvelope", {
        isAbstract: true
    })
], RouteCreateManyMountainInputEnvelope);
exports.RouteCreateManyMountainInputEnvelope = RouteCreateManyMountainInputEnvelope;
