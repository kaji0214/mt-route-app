"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUpsertWithWhereUniqueWithoutSessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateWithoutSessionInput_1 = require("../inputs/RouteCreateWithoutSessionInput");
const RouteUpdateWithoutSessionInput_1 = require("../inputs/RouteUpdateWithoutSessionInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteUpsertWithWhereUniqueWithoutSessionInput = class RouteUpsertWithWhereUniqueWithoutSessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], RouteUpsertWithWhereUniqueWithoutSessionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateWithoutSessionInput_1.RouteUpdateWithoutSessionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteUpdateWithoutSessionInput_1.RouteUpdateWithoutSessionInput)
], RouteUpsertWithWhereUniqueWithoutSessionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateWithoutSessionInput_1.RouteCreateWithoutSessionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteCreateWithoutSessionInput_1.RouteCreateWithoutSessionInput)
], RouteUpsertWithWhereUniqueWithoutSessionInput.prototype, "create", void 0);
RouteUpsertWithWhereUniqueWithoutSessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteUpsertWithWhereUniqueWithoutSessionInput", {
        isAbstract: true
    })
], RouteUpsertWithWhereUniqueWithoutSessionInput);
exports.RouteUpsertWithWhereUniqueWithoutSessionInput = RouteUpsertWithWhereUniqueWithoutSessionInput;
