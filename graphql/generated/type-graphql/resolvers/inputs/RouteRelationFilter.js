"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteWhereInput_1 = require("../inputs/RouteWhereInput");
let RouteRelationFilter = class RouteRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereInput_1.RouteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteWhereInput_1.RouteWhereInput)
], RouteRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereInput_1.RouteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteWhereInput_1.RouteWhereInput)
], RouteRelationFilter.prototype, "isNot", void 0);
RouteRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteRelationFilter", {
        isAbstract: true
    })
], RouteRelationFilter);
exports.RouteRelationFilter = RouteRelationFilter;
