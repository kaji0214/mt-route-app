"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRouteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateInput_1 = require("../../../inputs/RouteCreateInput");
let CreateRouteArgs = class CreateRouteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateInput_1.RouteCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteCreateInput_1.RouteCreateInput)
], CreateRouteArgs.prototype, "data", void 0);
CreateRouteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateRouteArgs);
exports.CreateRouteArgs = CreateRouteArgs;
