"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMountainArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainWhereInput_1 = require("../../../inputs/MountainWhereInput");
let DeleteManyMountainArgs = class DeleteManyMountainArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereInput_1.MountainWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainWhereInput_1.MountainWhereInput)
], DeleteManyMountainArgs.prototype, "where", void 0);
DeleteManyMountainArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyMountainArgs);
exports.DeleteManyMountainArgs = DeleteManyMountainArgs;
