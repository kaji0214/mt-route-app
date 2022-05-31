"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateOneWithoutRouteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateOrConnectWithoutRouteInput_1 = require("../inputs/SessionCreateOrConnectWithoutRouteInput");
const SessionCreateWithoutRouteInput_1 = require("../inputs/SessionCreateWithoutRouteInput");
const SessionUpdateWithoutRouteInput_1 = require("../inputs/SessionUpdateWithoutRouteInput");
const SessionUpsertWithoutRouteInput_1 = require("../inputs/SessionUpsertWithoutRouteInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionUpdateOneWithoutRouteInput = class SessionUpdateOneWithoutRouteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateWithoutRouteInput_1.SessionCreateWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateWithoutRouteInput_1.SessionCreateWithoutRouteInput)
], SessionUpdateOneWithoutRouteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateOrConnectWithoutRouteInput_1.SessionCreateOrConnectWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateOrConnectWithoutRouteInput_1.SessionCreateOrConnectWithoutRouteInput)
], SessionUpdateOneWithoutRouteInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpsertWithoutRouteInput_1.SessionUpsertWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpsertWithoutRouteInput_1.SessionUpsertWithoutRouteInput)
], SessionUpdateOneWithoutRouteInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SessionUpdateOneWithoutRouteInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SessionUpdateOneWithoutRouteInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], SessionUpdateOneWithoutRouteInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateWithoutRouteInput_1.SessionUpdateWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateWithoutRouteInput_1.SessionUpdateWithoutRouteInput)
], SessionUpdateOneWithoutRouteInput.prototype, "update", void 0);
SessionUpdateOneWithoutRouteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionUpdateOneWithoutRouteInput", {
        isAbstract: true
    })
], SessionUpdateOneWithoutRouteInput);
exports.SessionUpdateOneWithoutRouteInput = SessionUpdateOneWithoutRouteInput;
