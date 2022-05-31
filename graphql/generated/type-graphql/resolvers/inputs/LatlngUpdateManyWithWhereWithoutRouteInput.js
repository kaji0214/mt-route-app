"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngUpdateManyWithWhereWithoutRouteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngScalarWhereInput_1 = require("../inputs/LatlngScalarWhereInput");
const LatlngUpdateManyMutationInput_1 = require("../inputs/LatlngUpdateManyMutationInput");
let LatlngUpdateManyWithWhereWithoutRouteInput = class LatlngUpdateManyWithWhereWithoutRouteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngScalarWhereInput_1.LatlngScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngScalarWhereInput_1.LatlngScalarWhereInput)
], LatlngUpdateManyWithWhereWithoutRouteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngUpdateManyMutationInput_1.LatlngUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngUpdateManyMutationInput_1.LatlngUpdateManyMutationInput)
], LatlngUpdateManyWithWhereWithoutRouteInput.prototype, "data", void 0);
LatlngUpdateManyWithWhereWithoutRouteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngUpdateManyWithWhereWithoutRouteInput", {
        isAbstract: true
    })
], LatlngUpdateManyWithWhereWithoutRouteInput);
exports.LatlngUpdateManyWithWhereWithoutRouteInput = LatlngUpdateManyWithWhereWithoutRouteInput;
