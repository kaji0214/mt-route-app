"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainWhereInput_1 = require("../inputs/MountainWhereInput");
let MountainRelationFilter = class MountainRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereInput_1.MountainWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainWhereInput_1.MountainWhereInput)
], MountainRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereInput_1.MountainWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainWhereInput_1.MountainWhereInput)
], MountainRelationFilter.prototype, "isNot", void 0);
MountainRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainRelationFilter", {
        isAbstract: true
    })
], MountainRelationFilter);
exports.MountainRelationFilter = MountainRelationFilter;
