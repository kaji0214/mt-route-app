"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMountainArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateManyInput_1 = require("../../../inputs/MountainCreateManyInput");
let CreateManyMountainArgs = class CreateManyMountainArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainCreateManyInput_1.MountainCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyMountainArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyMountainArgs.prototype, "skipDuplicates", void 0);
CreateManyMountainArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyMountainArgs);
exports.CreateManyMountainArgs = CreateManyMountainArgs;
