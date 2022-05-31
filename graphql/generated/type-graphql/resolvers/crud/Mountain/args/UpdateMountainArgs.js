"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMountainArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainUpdateInput_1 = require("../../../inputs/MountainUpdateInput");
const MountainWhereUniqueInput_1 = require("../../../inputs/MountainWhereUniqueInput");
let UpdateMountainArgs = class UpdateMountainArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateInput_1.MountainUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainUpdateInput_1.MountainUpdateInput)
], UpdateMountainArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereUniqueInput_1.MountainWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainWhereUniqueInput_1.MountainWhereUniqueInput)
], UpdateMountainArgs.prototype, "where", void 0);
UpdateMountainArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateMountainArgs);
exports.UpdateMountainArgs = UpdateMountainArgs;
