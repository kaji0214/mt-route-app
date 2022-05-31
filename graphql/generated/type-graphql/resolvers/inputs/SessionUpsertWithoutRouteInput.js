"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpsertWithoutRouteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateWithoutRouteInput_1 = require("../inputs/SessionCreateWithoutRouteInput");
const SessionUpdateWithoutRouteInput_1 = require("../inputs/SessionUpdateWithoutRouteInput");
let SessionUpsertWithoutRouteInput = class SessionUpsertWithoutRouteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateWithoutRouteInput_1.SessionUpdateWithoutRouteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionUpdateWithoutRouteInput_1.SessionUpdateWithoutRouteInput)
], SessionUpsertWithoutRouteInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateWithoutRouteInput_1.SessionCreateWithoutRouteInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionCreateWithoutRouteInput_1.SessionCreateWithoutRouteInput)
], SessionUpsertWithoutRouteInput.prototype, "create", void 0);
SessionUpsertWithoutRouteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionUpsertWithoutRouteInput", {
        isAbstract: true
    })
], SessionUpsertWithoutRouteInput);
exports.SessionUpsertWithoutRouteInput = SessionUpsertWithoutRouteInput;
