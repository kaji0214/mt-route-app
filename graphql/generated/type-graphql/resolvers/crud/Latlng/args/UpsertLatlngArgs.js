"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertLatlngArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngCreateInput_1 = require("../../../inputs/LatlngCreateInput");
const LatlngUpdateInput_1 = require("../../../inputs/LatlngUpdateInput");
const LatlngWhereUniqueInput_1 = require("../../../inputs/LatlngWhereUniqueInput");
let UpsertLatlngArgs = class UpsertLatlngArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereUniqueInput_1.LatlngWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngWhereUniqueInput_1.LatlngWhereUniqueInput)
], UpsertLatlngArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngCreateInput_1.LatlngCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngCreateInput_1.LatlngCreateInput)
], UpsertLatlngArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngUpdateInput_1.LatlngUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngUpdateInput_1.LatlngUpdateInput)
], UpsertLatlngArgs.prototype, "update", void 0);
UpsertLatlngArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertLatlngArgs);
exports.UpsertLatlngArgs = UpsertLatlngArgs;
