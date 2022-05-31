"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUpdateWithWhereUniqueWithoutMountainInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteUpdateWithoutMountainInput_1 = require("../inputs/RouteUpdateWithoutMountainInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteUpdateWithWhereUniqueWithoutMountainInput = class RouteUpdateWithWhereUniqueWithoutMountainInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], RouteUpdateWithWhereUniqueWithoutMountainInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateWithoutMountainInput_1.RouteUpdateWithoutMountainInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteUpdateWithoutMountainInput_1.RouteUpdateWithoutMountainInput)
], RouteUpdateWithWhereUniqueWithoutMountainInput.prototype, "data", void 0);
RouteUpdateWithWhereUniqueWithoutMountainInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteUpdateWithWhereUniqueWithoutMountainInput", {
        isAbstract: true
    })
], RouteUpdateWithWhereUniqueWithoutMountainInput);
exports.RouteUpdateWithWhereUniqueWithoutMountainInput = RouteUpdateWithWhereUniqueWithoutMountainInput;
