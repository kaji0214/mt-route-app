"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LatlngWhereUniqueInput = class LatlngWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngWhereUniqueInput.prototype, "id", void 0);
LatlngWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngWhereUniqueInput", {
        isAbstract: true
    })
], LatlngWhereUniqueInput);
exports.LatlngWhereUniqueInput = LatlngWhereUniqueInput;
