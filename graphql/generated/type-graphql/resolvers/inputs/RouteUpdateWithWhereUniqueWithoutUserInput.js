"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteUpdateWithoutUserInput_1 = require("../inputs/RouteUpdateWithoutUserInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteUpdateWithWhereUniqueWithoutUserInput = class RouteUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], RouteUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateWithoutUserInput_1.RouteUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteUpdateWithoutUserInput_1.RouteUpdateWithoutUserInput)
], RouteUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
RouteUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], RouteUpdateWithWhereUniqueWithoutUserInput);
exports.RouteUpdateWithWhereUniqueWithoutUserInput = RouteUpdateWithWhereUniqueWithoutUserInput;
