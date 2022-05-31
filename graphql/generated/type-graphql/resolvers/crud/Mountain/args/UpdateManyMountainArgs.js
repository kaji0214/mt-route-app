"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMountainArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainUpdateManyMutationInput_1 = require("../../../inputs/MountainUpdateManyMutationInput");
const MountainWhereInput_1 = require("../../../inputs/MountainWhereInput");
let UpdateManyMountainArgs = class UpdateManyMountainArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateManyMutationInput_1.MountainUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainUpdateManyMutationInput_1.MountainUpdateManyMutationInput)
], UpdateManyMountainArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereInput_1.MountainWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainWhereInput_1.MountainWhereInput)
], UpdateManyMountainArgs.prototype, "where", void 0);
UpdateManyMountainArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyMountainArgs);
exports.UpdateManyMountainArgs = UpdateManyMountainArgs;
