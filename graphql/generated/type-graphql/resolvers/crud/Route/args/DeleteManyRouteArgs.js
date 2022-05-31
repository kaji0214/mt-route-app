"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyRouteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteWhereInput_1 = require("../../../inputs/RouteWhereInput");
let DeleteManyRouteArgs = class DeleteManyRouteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereInput_1.RouteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteWhereInput_1.RouteWhereInput)
], DeleteManyRouteArgs.prototype, "where", void 0);
DeleteManyRouteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyRouteArgs);
exports.DeleteManyRouteArgs = DeleteManyRouteArgs;
