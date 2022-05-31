"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RouteWhereUniqueInput = class RouteWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RouteWhereUniqueInput.prototype, "id", void 0);
RouteWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteWhereUniqueInput", {
        isAbstract: true
    })
], RouteWhereUniqueInput);
exports.RouteWhereUniqueInput = RouteWhereUniqueInput;
