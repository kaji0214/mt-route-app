"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMountainArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateInput_1 = require("../../../inputs/MountainCreateInput");
let CreateMountainArgs = class CreateMountainArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateInput_1.MountainCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainCreateInput_1.MountainCreateInput)
], CreateMountainArgs.prototype, "data", void 0);
CreateMountainArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateMountainArgs);
exports.CreateMountainArgs = CreateMountainArgs;
