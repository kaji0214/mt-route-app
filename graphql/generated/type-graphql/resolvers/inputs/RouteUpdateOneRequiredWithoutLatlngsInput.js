"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUpdateOneRequiredWithoutLatlngsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateOrConnectWithoutLatlngsInput_1 = require("../inputs/RouteCreateOrConnectWithoutLatlngsInput");
const RouteCreateWithoutLatlngsInput_1 = require("../inputs/RouteCreateWithoutLatlngsInput");
const RouteUpdateWithoutLatlngsInput_1 = require("../inputs/RouteUpdateWithoutLatlngsInput");
const RouteUpsertWithoutLatlngsInput_1 = require("../inputs/RouteUpsertWithoutLatlngsInput");
const RouteWhereUniqueInput_1 = require("../inputs/RouteWhereUniqueInput");
let RouteUpdateOneRequiredWithoutLatlngsInput = class RouteUpdateOneRequiredWithoutLatlngsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateWithoutLatlngsInput_1.RouteCreateWithoutLatlngsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateWithoutLatlngsInput_1.RouteCreateWithoutLatlngsInput)
], RouteUpdateOneRequiredWithoutLatlngsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateOrConnectWithoutLatlngsInput_1.RouteCreateOrConnectWithoutLatlngsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteCreateOrConnectWithoutLatlngsInput_1.RouteCreateOrConnectWithoutLatlngsInput)
], RouteUpdateOneRequiredWithoutLatlngsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpsertWithoutLatlngsInput_1.RouteUpsertWithoutLatlngsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteUpsertWithoutLatlngsInput_1.RouteUpsertWithoutLatlngsInput)
], RouteUpdateOneRequiredWithoutLatlngsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], RouteUpdateOneRequiredWithoutLatlngsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateWithoutLatlngsInput_1.RouteUpdateWithoutLatlngsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteUpdateWithoutLatlngsInput_1.RouteUpdateWithoutLatlngsInput)
], RouteUpdateOneRequiredWithoutLatlngsInput.prototype, "update", void 0);
RouteUpdateOneRequiredWithoutLatlngsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteUpdateOneRequiredWithoutLatlngsInput", {
        isAbstract: true
    })
], RouteUpdateOneRequiredWithoutLatlngsInput);
exports.RouteUpdateOneRequiredWithoutLatlngsInput = RouteUpdateOneRequiredWithoutLatlngsInput;
