"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRouteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteUpdateInput_1 = require("../../../inputs/RouteUpdateInput");
const RouteWhereUniqueInput_1 = require("../../../inputs/RouteWhereUniqueInput");
let UpdateRouteArgs = class UpdateRouteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateInput_1.RouteUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteUpdateInput_1.RouteUpdateInput)
], UpdateRouteArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], UpdateRouteArgs.prototype, "where", void 0);
UpdateRouteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateRouteArgs);
exports.UpdateRouteArgs = UpdateRouteArgs;
