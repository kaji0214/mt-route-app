"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyRouteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteUpdateManyMutationInput_1 = require("../../../inputs/RouteUpdateManyMutationInput");
const RouteWhereInput_1 = require("../../../inputs/RouteWhereInput");
let UpdateManyRouteArgs = class UpdateManyRouteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateManyMutationInput_1.RouteUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteUpdateManyMutationInput_1.RouteUpdateManyMutationInput)
], UpdateManyRouteArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereInput_1.RouteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteWhereInput_1.RouteWhereInput)
], UpdateManyRouteArgs.prototype, "where", void 0);
UpdateManyRouteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyRouteArgs);
exports.UpdateManyRouteArgs = UpdateManyRouteArgs;
