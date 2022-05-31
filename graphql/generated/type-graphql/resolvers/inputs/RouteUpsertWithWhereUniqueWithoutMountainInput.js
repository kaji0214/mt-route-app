"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUpsertWithWhereUniqueWithoutMountainInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateWithoutMountainInput_1 = require("../inputs/RouteCreateWithoutMountainInput");
const RouteUpdateWithoutMountainInput_1 = require("../inputs/RouteUpdateWithoutMountainInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteUpsertWithWhereUniqueWithoutMountainInput = class RouteUpsertWithWhereUniqueWithoutMountainInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], RouteUpsertWithWhereUniqueWithoutMountainInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateWithoutMountainInput_1.RouteUpdateWithoutMountainInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteUpdateWithoutMountainInput_1.RouteUpdateWithoutMountainInput)
], RouteUpsertWithWhereUniqueWithoutMountainInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateWithoutMountainInput_1.RouteCreateWithoutMountainInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteCreateWithoutMountainInput_1.RouteCreateWithoutMountainInput)
], RouteUpsertWithWhereUniqueWithoutMountainInput.prototype, "create", void 0);
RouteUpsertWithWhereUniqueWithoutMountainInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteUpsertWithWhereUniqueWithoutMountainInput", {
        isAbstract: true
    })
], RouteUpsertWithWhereUniqueWithoutMountainInput);
exports.RouteUpsertWithWhereUniqueWithoutMountainInput = RouteUpsertWithWhereUniqueWithoutMountainInput;
