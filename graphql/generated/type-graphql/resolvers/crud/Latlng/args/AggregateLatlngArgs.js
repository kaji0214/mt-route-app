"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLatlngArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngOrderByWithRelationInput_1 = require("../../../inputs/LatlngOrderByWithRelationInput");
const LatlngWhereInput_1 = require("../../../inputs/LatlngWhereInput");
const LatlngWhereUniqueInput_1 = require("../../../inputs/LatlngWhereUniqueInput");
let AggregateLatlngArgs = class AggregateLatlngArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereInput_1.LatlngWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngWhereInput_1.LatlngWhereInput)
], AggregateLatlngArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngOrderByWithRelationInput_1.LatlngOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateLatlngArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereUniqueInput_1.LatlngWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngWhereUniqueInput_1.LatlngWhereUniqueInput)
], AggregateLatlngArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateLatlngArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateLatlngArgs.prototype, "skip", void 0);
AggregateLatlngArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateLatlngArgs);
exports.AggregateLatlngArgs = AggregateLatlngArgs;
