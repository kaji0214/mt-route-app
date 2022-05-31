"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngCreateOrConnectWithoutRouteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngCreateWithoutRouteInput_1 = require("../inputs/LatlngCreateWithoutRouteInput");
const LatlngWhereUniqueInput_1 = require("../inputs/LatlngWhereUniqueInput");
let LatlngCreateOrConnectWithoutRouteInput = class LatlngCreateOrConnectWithoutRouteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngWhereUniqueInput_1.LatlngWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngWhereUniqueInput_1.LatlngWhereUniqueInput)
], LatlngCreateOrConnectWithoutRouteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngCreateWithoutRouteInput_1.LatlngCreateWithoutRouteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LatlngCreateWithoutRouteInput_1.LatlngCreateWithoutRouteInput)
], LatlngCreateOrConnectWithoutRouteInput.prototype, "create", void 0);
LatlngCreateOrConnectWithoutRouteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngCreateOrConnectWithoutRouteInput", {
        isAbstract: true
    })
], LatlngCreateOrConnectWithoutRouteInput);
exports.LatlngCreateOrConnectWithoutRouteInput = LatlngCreateOrConnectWithoutRouteInput;
