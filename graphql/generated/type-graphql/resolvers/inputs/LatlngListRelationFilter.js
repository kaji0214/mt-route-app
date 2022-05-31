"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngWhereInput_1 = require("../inputs/LatlngWhereInput");
let LatlngListRelationFilter = class LatlngListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereInput_1.LatlngWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngWhereInput_1.LatlngWhereInput)
], LatlngListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereInput_1.LatlngWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngWhereInput_1.LatlngWhereInput)
], LatlngListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereInput_1.LatlngWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngWhereInput_1.LatlngWhereInput)
], LatlngListRelationFilter.prototype, "none", void 0);
LatlngListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngListRelationFilter", {
        isAbstract: true
    })
], LatlngListRelationFilter);
exports.LatlngListRelationFilter = LatlngListRelationFilter;
