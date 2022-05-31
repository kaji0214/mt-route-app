"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainRoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteOrderByWithRelationInput_1 = require("../../../inputs/RouteOrderByWithRelationInput");
const RouteWhereInput_1 = require("../../../inputs/RouteWhereInput");
const RouteWhereUniqueInput_1 = require("../../../inputs/RouteWhereUniqueInput");
const RouteScalarFieldEnum_1 = require("../../../../enums/RouteScalarFieldEnum");
let MountainRoutesArgs = class MountainRoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereInput_1.RouteWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteWhereInput_1.RouteWhereInput)
], MountainRoutesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteOrderByWithRelationInput_1.RouteOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainRoutesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteWhereUniqueInput_1.RouteWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteWhereUniqueInput_1.RouteWhereUniqueInput)
], MountainRoutesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MountainRoutesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MountainRoutesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RouteScalarFieldEnum_1.RouteScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainRoutesArgs.prototype, "distinct", void 0);
MountainRoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], MountainRoutesArgs);
exports.MountainRoutesArgs = MountainRoutesArgs;
