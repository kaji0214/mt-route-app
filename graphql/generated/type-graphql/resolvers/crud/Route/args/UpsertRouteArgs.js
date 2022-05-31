"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertRouteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateInput_1 = require("../../../inputs/RouteCreateInput");
const RouteUpdateInput_1 = require("../../../inputs/RouteUpdateInput");
const RouteWhereUniqueInput_1 = require("../../../inputs/RouteWhereUniqueInput");
let UpsertRouteArgs = class UpsertRouteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], UpsertRouteArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateInput_1.RouteCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteCreateInput_1.RouteCreateInput)
], UpsertRouteArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateInput_1.RouteUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteUpdateInput_1.RouteUpdateInput)
], UpsertRouteArgs.prototype, "update", void 0);
UpsertRouteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertRouteArgs);
exports.UpsertRouteArgs = UpsertRouteArgs;
