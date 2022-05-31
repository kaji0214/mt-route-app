"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMountainArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainOrderByWithRelationInput_1 = require("../../../inputs/MountainOrderByWithRelationInput");
const MountainWhereInput_1 = require("../../../inputs/MountainWhereInput");
const MountainWhereUniqueInput_1 = require("../../../inputs/MountainWhereUniqueInput");
const MountainScalarFieldEnum_1 = require("../../../../enums/MountainScalarFieldEnum");
let FindFirstMountainArgs = class FindFirstMountainArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereInput_1.MountainWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainWhereInput_1.MountainWhereInput)
], FindFirstMountainArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainOrderByWithRelationInput_1.MountainOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstMountainArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereUniqueInput_1.MountainWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainWhereUniqueInput_1.MountainWhereUniqueInput)
], FindFirstMountainArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstMountainArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstMountainArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainScalarFieldEnum_1.MountainScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstMountainArgs.prototype, "distinct", void 0);
FindFirstMountainArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstMountainArgs);
exports.FindFirstMountainArgs = FindFirstMountainArgs;
