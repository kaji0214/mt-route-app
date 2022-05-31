"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateNestedManyWithoutMountainInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateManyMountainInputEnvelope_1 = require("../inputs/RouteCreateManyMountainInputEnvelope");
const RouteCreateOrConnectWithoutMountainInput_1 = require("../inputs/RouteCreateOrConnectWithoutMountainInput");
const RouteCreateWithoutMountainInput_1 = require("../inputs/RouteCreateWithoutMountainInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteCreateNestedManyWithoutMountainInput = class RouteCreateNestedManyWithoutMountainInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteCreateWithoutMountainInput_1.RouteCreateWithoutMountainInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteCreateNestedManyWithoutMountainInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteCreateOrConnectWithoutMountainInput_1.RouteCreateOrConnectWithoutMountainInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteCreateNestedManyWithoutMountainInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateManyMountainInputEnvelope_1.RouteCreateManyMountainInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateManyMountainInputEnvelope_1.RouteCreateManyMountainInputEnvelope)
], RouteCreateNestedManyWithoutMountainInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteWhereUniqueInput_1.RouteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteCreateNestedManyWithoutMountainInput.prototype, "connect", void 0);
RouteCreateNestedManyWithoutMountainInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateNestedManyWithoutMountainInput", {
        isAbstract: true
    })
], RouteCreateNestedManyWithoutMountainInput);
exports.RouteCreateNestedManyWithoutMountainInput = RouteCreateNestedManyWithoutMountainInput;
