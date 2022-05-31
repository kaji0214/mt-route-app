"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyLatlngArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngWhereInput_1 = require("../../../inputs/LatlngWhereInput");
let DeleteManyLatlngArgs = class DeleteManyLatlngArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereInput_1.LatlngWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngWhereInput_1.LatlngWhereInput)
], DeleteManyLatlngArgs.prototype, "where", void 0);
DeleteManyLatlngArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyLatlngArgs);
exports.DeleteManyLatlngArgs = DeleteManyLatlngArgs;
