"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLatlngArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngCreateManyInput_1 = require("../../../inputs/LatlngCreateManyInput");
let CreateManyLatlngArgs = class CreateManyLatlngArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngCreateManyInput_1.LatlngCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyLatlngArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyLatlngArgs.prototype, "skipDuplicates", void 0);
CreateManyLatlngArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyLatlngArgs);
exports.CreateManyLatlngArgs = CreateManyLatlngArgs;
