"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyRouteArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateManyInput_1 = require("../../../inputs/RouteCreateManyInput");
let CreateManyRouteArgs = class CreateManyRouteArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteCreateManyInput_1.RouteCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyRouteArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyRouteArgs.prototype, "skipDuplicates", void 0);
CreateManyRouteArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyRouteArgs);
exports.CreateManyRouteArgs = CreateManyRouteArgs;
