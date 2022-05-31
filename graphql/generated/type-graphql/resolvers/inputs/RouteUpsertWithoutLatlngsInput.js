"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUpsertWithoutLatlngsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateWithoutLatlngsInput_1 = require("../inputs/RouteCreateWithoutLatlngsInput");
const RouteUpdateWithoutLatlngsInput_1 = require("../inputs/RouteUpdateWithoutLatlngsInput");
let RouteUpsertWithoutLatlngsInput = class RouteUpsertWithoutLatlngsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateWithoutLatlngsInput_1.RouteUpdateWithoutLatlngsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteUpdateWithoutLatlngsInput_1.RouteUpdateWithoutLatlngsInput)
], RouteUpsertWithoutLatlngsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateWithoutLatlngsInput_1.RouteCreateWithoutLatlngsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteCreateWithoutLatlngsInput_1.RouteCreateWithoutLatlngsInput)
], RouteUpsertWithoutLatlngsInput.prototype, "create", void 0);
RouteUpsertWithoutLatlngsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteUpsertWithoutLatlngsInput", {
        isAbstract: true
    })
], RouteUpsertWithoutLatlngsInput);
exports.RouteUpsertWithoutLatlngsInput = RouteUpsertWithoutLatlngsInput;
