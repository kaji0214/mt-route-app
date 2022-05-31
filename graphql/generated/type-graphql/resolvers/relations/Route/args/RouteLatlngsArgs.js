"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteLatlngsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngOrderByWithRelationInput_1 = require("../../../inputs/LatlngOrderByWithRelationInput");
const LatlngWhereInput_1 = require("../../../inputs/LatlngWhereInput");
const LatlngWhereUniqueInput_1 = require("../../../inputs/LatlngWhereUniqueInput");
const LatlngScalarFieldEnum_1 = require("../../../../enums/LatlngScalarFieldEnum");
let RouteLatlngsArgs = class RouteLatlngsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereInput_1.LatlngWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngWhereInput_1.LatlngWhereInput)
], RouteLatlngsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngOrderByWithRelationInput_1.LatlngOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteLatlngsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereUniqueInput_1.LatlngWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngWhereUniqueInput_1.LatlngWhereUniqueInput)
], RouteLatlngsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RouteLatlngsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RouteLatlngsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngScalarFieldEnum_1.LatlngScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RouteLatlngsArgs.prototype, "distinct", void 0);
RouteLatlngsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], RouteLatlngsArgs);
exports.RouteLatlngsArgs = RouteLatlngsArgs;
