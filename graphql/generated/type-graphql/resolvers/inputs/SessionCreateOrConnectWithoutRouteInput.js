"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionCreateOrConnectWithoutRouteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateWithoutRouteInput_1 = require("../inputs/SessionCreateWithoutRouteInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionCreateOrConnectWithoutRouteInput = class SessionCreateOrConnectWithoutRouteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], SessionCreateOrConnectWithoutRouteInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateWithoutRouteInput_1.SessionCreateWithoutRouteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionCreateWithoutRouteInput_1.SessionCreateWithoutRouteInput)
], SessionCreateOrConnectWithoutRouteInput.prototype, "create", void 0);
SessionCreateOrConnectWithoutRouteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionCreateOrConnectWithoutRouteInput", {
        isAbstract: true
    })
], SessionCreateOrConnectWithoutRouteInput);
exports.SessionCreateOrConnectWithoutRouteInput = SessionCreateOrConnectWithoutRouteInput;
