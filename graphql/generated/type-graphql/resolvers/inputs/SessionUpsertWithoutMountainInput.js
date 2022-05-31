"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpsertWithoutMountainInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateWithoutMountainInput_1 = require("../inputs/SessionCreateWithoutMountainInput");
const SessionUpdateWithoutMountainInput_1 = require("../inputs/SessionUpdateWithoutMountainInput");
let SessionUpsertWithoutMountainInput = class SessionUpsertWithoutMountainInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateWithoutMountainInput_1.SessionUpdateWithoutMountainInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionUpdateWithoutMountainInput_1.SessionUpdateWithoutMountainInput)
], SessionUpsertWithoutMountainInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateWithoutMountainInput_1.SessionCreateWithoutMountainInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SessionCreateWithoutMountainInput_1.SessionCreateWithoutMountainInput)
], SessionUpsertWithoutMountainInput.prototype, "create", void 0);
SessionUpsertWithoutMountainInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionUpsertWithoutMountainInput", {
        isAbstract: true
    })
], SessionUpsertWithoutMountainInput);
exports.SessionUpsertWithoutMountainInput = SessionUpsertWithoutMountainInput;
