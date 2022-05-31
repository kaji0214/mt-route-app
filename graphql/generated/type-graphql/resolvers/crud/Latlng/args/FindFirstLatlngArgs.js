"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstLatlngArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngOrderByWithRelationInput_1 = require("../../../inputs/LatlngOrderByWithRelationInput");
const LatlngWhereInput_1 = require("../../../inputs/LatlngWhereInput");
const LatlngWhereUniqueInput_1 = require("../../../inputs/LatlngWhereUniqueInput");
const LatlngScalarFieldEnum_1 = require("../../../../enums/LatlngScalarFieldEnum");
let FindFirstLatlngArgs = class FindFirstLatlngArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereInput_1.LatlngWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngWhereInput_1.LatlngWhereInput)
], FindFirstLatlngArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngOrderByWithRelationInput_1.LatlngOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLatlngArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereUniqueInput_1.LatlngWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngWhereUniqueInput_1.LatlngWhereUniqueInput)
], FindFirstLatlngArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLatlngArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLatlngArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngScalarFieldEnum_1.LatlngScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLatlngArgs.prototype, "distinct", void 0);
FindFirstLatlngArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstLatlngArgs);
exports.FindFirstLatlngArgs = FindFirstLatlngArgs;
