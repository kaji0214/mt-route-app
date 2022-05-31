"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateWithoutUserInput_1 = require("../inputs/RouteCreateWithoutUserInput");
const RouteUpdateWithoutUserInput_1 = require("../inputs/RouteUpdateWithoutUserInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteUpsertWithWhereUniqueWithoutUserInput = class RouteUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], RouteUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateWithoutUserInput_1.RouteUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteUpdateWithoutUserInput_1.RouteUpdateWithoutUserInput)
], RouteUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateWithoutUserInput_1.RouteCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteCreateWithoutUserInput_1.RouteCreateWithoutUserInput)
], RouteUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
RouteUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], RouteUpsertWithWhereUniqueWithoutUserInput);
exports.RouteUpsertWithWhereUniqueWithoutUserInput = RouteUpsertWithWhereUniqueWithoutUserInput;
