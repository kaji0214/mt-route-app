"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateOneWithoutMountainInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateOrConnectWithoutMountainInput_1 = require("../inputs/SessionCreateOrConnectWithoutMountainInput");
const SessionCreateWithoutMountainInput_1 = require("../inputs/SessionCreateWithoutMountainInput");
const SessionUpdateWithoutMountainInput_1 = require("../inputs/SessionUpdateWithoutMountainInput");
const SessionUpsertWithoutMountainInput_1 = require("../inputs/SessionUpsertWithoutMountainInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionUpdateOneWithoutMountainInput = class SessionUpdateOneWithoutMountainInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateWithoutMountainInput_1.SessionCreateWithoutMountainInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateWithoutMountainInput_1.SessionCreateWithoutMountainInput)
], SessionUpdateOneWithoutMountainInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateOrConnectWithoutMountainInput_1.SessionCreateOrConnectWithoutMountainInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateOrConnectWithoutMountainInput_1.SessionCreateOrConnectWithoutMountainInput)
], SessionUpdateOneWithoutMountainInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpsertWithoutMountainInput_1.SessionUpsertWithoutMountainInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpsertWithoutMountainInput_1.SessionUpsertWithoutMountainInput)
], SessionUpdateOneWithoutMountainInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SessionUpdateOneWithoutMountainInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SessionUpdateOneWithoutMountainInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], SessionUpdateOneWithoutMountainInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateWithoutMountainInput_1.SessionUpdateWithoutMountainInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateWithoutMountainInput_1.SessionUpdateWithoutMountainInput)
], SessionUpdateOneWithoutMountainInput.prototype, "update", void 0);
SessionUpdateOneWithoutMountainInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionUpdateOneWithoutMountainInput", {
        isAbstract: true
    })
], SessionUpdateOneWithoutMountainInput);
exports.SessionUpdateOneWithoutMountainInput = SessionUpdateOneWithoutMountainInput;
