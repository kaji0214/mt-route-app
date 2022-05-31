"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainWhereInput_1 = require("../inputs/MountainWhereInput");
let MountainListRelationFilter = class MountainListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereInput_1.MountainWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainWhereInput_1.MountainWhereInput)
], MountainListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereInput_1.MountainWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainWhereInput_1.MountainWhereInput)
], MountainListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereInput_1.MountainWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainWhereInput_1.MountainWhereInput)
], MountainListRelationFilter.prototype, "none", void 0);
MountainListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainListRelationFilter", {
        isAbstract: true
    })
], MountainListRelationFilter);
exports.MountainListRelationFilter = MountainListRelationFilter;
