"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLatlngArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngUpdateInput_1 = require("../../../inputs/LatlngUpdateInput");
const LatlngWhereUniqueInput_1 = require("../../../inputs/LatlngWhereUniqueInput");
let UpdateLatlngArgs = class UpdateLatlngArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngUpdateInput_1.LatlngUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngUpdateInput_1.LatlngUpdateInput)
], UpdateLatlngArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereUniqueInput_1.LatlngWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngWhereUniqueInput_1.LatlngWhereUniqueInput)
], UpdateLatlngArgs.prototype, "where", void 0);
UpdateLatlngArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateLatlngArgs);
exports.UpdateLatlngArgs = UpdateLatlngArgs;
