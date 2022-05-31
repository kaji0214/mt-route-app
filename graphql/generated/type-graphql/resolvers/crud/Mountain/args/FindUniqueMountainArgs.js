"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMountainArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainWhereUniqueInput_1 = require("../../../inputs/MountainWhereUniqueInput");
let FindUniqueMountainArgs = class FindUniqueMountainArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereUniqueInput_1.MountainWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainWhereUniqueInput_1.MountainWhereUniqueInput)
], FindUniqueMountainArgs.prototype, "where", void 0);
FindUniqueMountainArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueMountainArgs);
exports.FindUniqueMountainArgs = FindUniqueMountainArgs;
