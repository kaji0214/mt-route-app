"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateNestedOneWithoutLatlngsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateOrConnectWithoutLatlngsInput_1 = require("../inputs/RouteCreateOrConnectWithoutLatlngsInput");
const RouteCreateWithoutLatlngsInput_1 = require("../inputs/RouteCreateWithoutLatlngsInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteCreateNestedOneWithoutLatlngsInput = class RouteCreateNestedOneWithoutLatlngsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateWithoutLatlngsInput_1.RouteCreateWithoutLatlngsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateWithoutLatlngsInput_1.RouteCreateWithoutLatlngsInput)
], RouteCreateNestedOneWithoutLatlngsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateOrConnectWithoutLatlngsInput_1.RouteCreateOrConnectWithoutLatlngsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateOrConnectWithoutLatlngsInput_1.RouteCreateOrConnectWithoutLatlngsInput)
], RouteCreateNestedOneWithoutLatlngsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], RouteCreateNestedOneWithoutLatlngsInput.prototype, "connect", void 0);
RouteCreateNestedOneWithoutLatlngsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateNestedOneWithoutLatlngsInput", {
        isAbstract: true
    })
], RouteCreateNestedOneWithoutLatlngsInput);
exports.RouteCreateNestedOneWithoutLatlngsInput = RouteCreateNestedOneWithoutLatlngsInput;
