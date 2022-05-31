"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateNestedOneWithoutRouteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateOrConnectWithoutRouteInput_1 = require("../inputs/SessionCreateOrConnectWithoutRouteInput");
const SessionCreateWithoutRouteInput_1 = require("../inputs/SessionCreateWithoutRouteInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionCreateNestedOneWithoutRouteInput = class SessionCreateNestedOneWithoutRouteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateWithoutRouteInput_1.SessionCreateWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateWithoutRouteInput_1.SessionCreateWithoutRouteInput)
], SessionCreateNestedOneWithoutRouteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateOrConnectWithoutRouteInput_1.SessionCreateOrConnectWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateOrConnectWithoutRouteInput_1.SessionCreateOrConnectWithoutRouteInput)
], SessionCreateNestedOneWithoutRouteInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], SessionCreateNestedOneWithoutRouteInput.prototype, "connect", void 0);
SessionCreateNestedOneWithoutRouteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionCreateNestedOneWithoutRouteInput", {
        isAbstract: true
    })
], SessionCreateNestedOneWithoutRouteInput);
exports.SessionCreateNestedOneWithoutRouteInput = SessionCreateNestedOneWithoutRouteInput;
