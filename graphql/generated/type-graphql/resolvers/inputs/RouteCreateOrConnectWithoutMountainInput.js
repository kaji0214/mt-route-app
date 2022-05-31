"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateOrConnectWithoutMountainInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateWithoutMountainInput_1 = require("../inputs/RouteCreateWithoutMountainInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteCreateOrConnectWithoutMountainInput = class RouteCreateOrConnectWithoutMountainInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], RouteCreateOrConnectWithoutMountainInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateWithoutMountainInput_1.RouteCreateWithoutMountainInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteCreateWithoutMountainInput_1.RouteCreateWithoutMountainInput)
], RouteCreateOrConnectWithoutMountainInput.prototype, "create", void 0);
RouteCreateOrConnectWithoutMountainInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateOrConnectWithoutMountainInput", {
        isAbstract: true
    })
], RouteCreateOrConnectWithoutMountainInput);
exports.RouteCreateOrConnectWithoutMountainInput = RouteCreateOrConnectWithoutMountainInput;
