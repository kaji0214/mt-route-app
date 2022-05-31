"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateOrConnectWithoutLatlngsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateWithoutLatlngsInput_1 = require("../inputs/RouteCreateWithoutLatlngsInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteCreateOrConnectWithoutLatlngsInput = class RouteCreateOrConnectWithoutLatlngsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], RouteCreateOrConnectWithoutLatlngsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateWithoutLatlngsInput_1.RouteCreateWithoutLatlngsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteCreateWithoutLatlngsInput_1.RouteCreateWithoutLatlngsInput)
], RouteCreateOrConnectWithoutLatlngsInput.prototype, "create", void 0);
RouteCreateOrConnectWithoutLatlngsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateOrConnectWithoutLatlngsInput", {
        isAbstract: true
    })
], RouteCreateOrConnectWithoutLatlngsInput);
exports.RouteCreateOrConnectWithoutLatlngsInput = RouteCreateOrConnectWithoutLatlngsInput;
