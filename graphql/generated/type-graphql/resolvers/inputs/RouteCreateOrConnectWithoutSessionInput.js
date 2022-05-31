"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateOrConnectWithoutSessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateWithoutSessionInput_1 = require("../inputs/RouteCreateWithoutSessionInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteCreateOrConnectWithoutSessionInput = class RouteCreateOrConnectWithoutSessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], RouteCreateOrConnectWithoutSessionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateWithoutSessionInput_1.RouteCreateWithoutSessionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteCreateWithoutSessionInput_1.RouteCreateWithoutSessionInput)
], RouteCreateOrConnectWithoutSessionInput.prototype, "create", void 0);
RouteCreateOrConnectWithoutSessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateOrConnectWithoutSessionInput", {
        isAbstract: true
    })
], RouteCreateOrConnectWithoutSessionInput);
exports.RouteCreateOrConnectWithoutSessionInput = RouteCreateOrConnectWithoutSessionInput;
