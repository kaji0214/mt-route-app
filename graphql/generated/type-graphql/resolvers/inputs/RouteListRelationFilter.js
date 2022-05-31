"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteWhereInput_1 = require("../inputs/RouteWhereInput");
let RouteListRelationFilter = class RouteListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereInput_1.RouteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteWhereInput_1.RouteWhereInput)
], RouteListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereInput_1.RouteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteWhereInput_1.RouteWhereInput)
], RouteListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereInput_1.RouteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteWhereInput_1.RouteWhereInput)
], RouteListRelationFilter.prototype, "none", void 0);
RouteListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteListRelationFilter", {
        isAbstract: true
    })
], RouteListRelationFilter);
exports.RouteListRelationFilter = RouteListRelationFilter;
