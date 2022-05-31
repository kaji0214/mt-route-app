"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUpdateWithWhereUniqueWithoutSessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteUpdateWithoutSessionInput_1 = require("../inputs/RouteUpdateWithoutSessionInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteUpdateWithWhereUniqueWithoutSessionInput = class RouteUpdateWithWhereUniqueWithoutSessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], RouteUpdateWithWhereUniqueWithoutSessionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateWithoutSessionInput_1.RouteUpdateWithoutSessionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteUpdateWithoutSessionInput_1.RouteUpdateWithoutSessionInput)
], RouteUpdateWithWhereUniqueWithoutSessionInput.prototype, "data", void 0);
RouteUpdateWithWhereUniqueWithoutSessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteUpdateWithWhereUniqueWithoutSessionInput", {
        isAbstract: true
    })
], RouteUpdateWithWhereUniqueWithoutSessionInput);
exports.RouteUpdateWithWhereUniqueWithoutSessionInput = RouteUpdateWithWhereUniqueWithoutSessionInput;
