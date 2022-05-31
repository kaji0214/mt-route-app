"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionWhereInput_1 = require("../inputs/SessionWhereInput");
let SessionRelationFilter = class SessionRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionWhereInput_1.SessionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionWhereInput_1.SessionWhereInput)
], SessionRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionWhereInput_1.SessionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionWhereInput_1.SessionWhereInput)
], SessionRelationFilter.prototype, "isNot", void 0);
SessionRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionRelationFilter", {
        isAbstract: true
    })
], SessionRelationFilter);
exports.SessionRelationFilter = SessionRelationFilter;
