"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngUpdateWithWhereUniqueWithoutRouteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngUpdateWithoutRouteInput_1 = require("../inputs/LatlngUpdateWithoutRouteInput");
const LatlngWhereUniqueInput_1 = require("../inputs/LatlngWhereUniqueInput");
let LatlngUpdateWithWhereUniqueWithoutRouteInput = class LatlngUpdateWithWhereUniqueWithoutRouteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereUniqueInput_1.LatlngWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngWhereUniqueInput_1.LatlngWhereUniqueInput)
], LatlngUpdateWithWhereUniqueWithoutRouteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngUpdateWithoutRouteInput_1.LatlngUpdateWithoutRouteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngUpdateWithoutRouteInput_1.LatlngUpdateWithoutRouteInput)
], LatlngUpdateWithWhereUniqueWithoutRouteInput.prototype, "data", void 0);
LatlngUpdateWithWhereUniqueWithoutRouteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngUpdateWithWhereUniqueWithoutRouteInput", {
        isAbstract: true
    })
], LatlngUpdateWithWhereUniqueWithoutRouteInput);
exports.LatlngUpdateWithWhereUniqueWithoutRouteInput = LatlngUpdateWithWhereUniqueWithoutRouteInput;
