"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyLatlngArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngUpdateManyMutationInput_1 = require("../../../inputs/LatlngUpdateManyMutationInput");
const LatlngWhereInput_1 = require("../../../inputs/LatlngWhereInput");
let UpdateManyLatlngArgs = class UpdateManyLatlngArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngUpdateManyMutationInput_1.LatlngUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngUpdateManyMutationInput_1.LatlngUpdateManyMutationInput)
], UpdateManyLatlngArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereInput_1.LatlngWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngWhereInput_1.LatlngWhereInput)
], UpdateManyLatlngArgs.prototype, "where", void 0);
UpdateManyLatlngArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyLatlngArgs);
exports.UpdateManyLatlngArgs = UpdateManyLatlngArgs;
