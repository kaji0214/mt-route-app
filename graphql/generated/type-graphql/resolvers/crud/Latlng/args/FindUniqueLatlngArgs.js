"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLatlngArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngWhereUniqueInput_1 = require("../../../inputs/LatlngWhereUniqueInput");
let FindUniqueLatlngArgs = class FindUniqueLatlngArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereUniqueInput_1.LatlngWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngWhereUniqueInput_1.LatlngWhereUniqueInput)
], FindUniqueLatlngArgs.prototype, "where", void 0);
FindUniqueLatlngArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueLatlngArgs);
exports.FindUniqueLatlngArgs = FindUniqueLatlngArgs;
