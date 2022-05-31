"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRouteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteWhereUniqueInput_1 = require("../../../inputs/RouteWhereUniqueInput");
let FindUniqueRouteArgs = class FindUniqueRouteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], FindUniqueRouteArgs.prototype, "where", void 0);
FindUniqueRouteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueRouteArgs);
exports.FindUniqueRouteArgs = FindUniqueRouteArgs;
