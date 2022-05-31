"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLatlngArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngCreateInput_1 = require("../../../inputs/LatlngCreateInput");
let CreateLatlngArgs = class CreateLatlngArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngCreateInput_1.LatlngCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngCreateInput_1.LatlngCreateInput)
], CreateLatlngArgs.prototype, "data", void 0);
CreateLatlngArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateLatlngArgs);
exports.CreateLatlngArgs = CreateLatlngArgs;
