"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLatlngArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngWhereUniqueInput_1 = require("../../../inputs/LatlngWhereUniqueInput");
let DeleteLatlngArgs = class DeleteLatlngArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereUniqueInput_1.LatlngWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngWhereUniqueInput_1.LatlngWhereUniqueInput)
], DeleteLatlngArgs.prototype, "where", void 0);
DeleteLatlngArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteLatlngArgs);
exports.DeleteLatlngArgs = DeleteLatlngArgs;
