"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngUpsertWithWhereUniqueWithoutRouteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngCreateWithoutRouteInput_1 = require("../inputs/LatlngCreateWithoutRouteInput");
const LatlngUpdateWithoutRouteInput_1 = require("../inputs/LatlngUpdateWithoutRouteInput");
const LatlngWhereUniqueInput_1 = require("../inputs/LatlngWhereUniqueInput");
let LatlngUpsertWithWhereUniqueWithoutRouteInput = class LatlngUpsertWithWhereUniqueWithoutRouteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereUniqueInput_1.LatlngWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngWhereUniqueInput_1.LatlngWhereUniqueInput)
], LatlngUpsertWithWhereUniqueWithoutRouteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngUpdateWithoutRouteInput_1.LatlngUpdateWithoutRouteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngUpdateWithoutRouteInput_1.LatlngUpdateWithoutRouteInput)
], LatlngUpsertWithWhereUniqueWithoutRouteInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngCreateWithoutRouteInput_1.LatlngCreateWithoutRouteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngCreateWithoutRouteInput_1.LatlngCreateWithoutRouteInput)
], LatlngUpsertWithWhereUniqueWithoutRouteInput.prototype, "create", void 0);
LatlngUpsertWithWhereUniqueWithoutRouteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngUpsertWithWhereUniqueWithoutRouteInput", {
        isAbstract: true
    })
], LatlngUpsertWithWhereUniqueWithoutRouteInput);
exports.LatlngUpsertWithWhereUniqueWithoutRouteInput = LatlngUpsertWithWhereUniqueWithoutRouteInput;
