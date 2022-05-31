"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertMountainArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateInput_1 = require("../../../inputs/MountainCreateInput");
const MountainUpdateInput_1 = require("../../../inputs/MountainUpdateInput");
const MountainWhereUniqueInput_1 = require("../../../inputs/MountainWhereUniqueInput");
let UpsertMountainArgs = class UpsertMountainArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereUniqueInput_1.MountainWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainWhereUniqueInput_1.MountainWhereUniqueInput)
], UpsertMountainArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateInput_1.MountainCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainCreateInput_1.MountainCreateInput)
], UpsertMountainArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateInput_1.MountainUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainUpdateInput_1.MountainUpdateInput)
], UpsertMountainArgs.prototype, "update", void 0);
UpsertMountainArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertMountainArgs);
exports.UpsertMountainArgs = UpsertMountainArgs;
