"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionMountainArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainOrderByWithRelationInput_1 = require("../../../inputs/MountainOrderByWithRelationInput");
const MountainWhereInput_1 = require("../../../inputs/MountainWhereInput");
const MountainWhereUniqueInput_1 = require("../../../inputs/MountainWhereUniqueInput");
const MountainScalarFieldEnum_1 = require("../../../../enums/MountainScalarFieldEnum");
let SessionMountainArgs = class SessionMountainArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereInput_1.MountainWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainWhereInput_1.MountainWhereInput)
], SessionMountainArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainOrderByWithRelationInput_1.MountainOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SessionMountainArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereUniqueInput_1.MountainWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainWhereUniqueInput_1.MountainWhereUniqueInput)
], SessionMountainArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SessionMountainArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SessionMountainArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainScalarFieldEnum_1.MountainScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SessionMountainArgs.prototype, "distinct", void 0);
SessionMountainArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], SessionMountainArgs);
exports.SessionMountainArgs = SessionMountainArgs;
