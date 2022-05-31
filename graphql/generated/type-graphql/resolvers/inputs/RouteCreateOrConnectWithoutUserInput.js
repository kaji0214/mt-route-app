"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateWithoutUserInput_1 = require("../inputs/RouteCreateWithoutUserInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteCreateOrConnectWithoutUserInput = class RouteCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], RouteCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateWithoutUserInput_1.RouteCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteCreateWithoutUserInput_1.RouteCreateWithoutUserInput)
], RouteCreateOrConnectWithoutUserInput.prototype, "create", void 0);
RouteCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], RouteCreateOrConnectWithoutUserInput);
exports.RouteCreateOrConnectWithoutUserInput = RouteCreateOrConnectWithoutUserInput;
