"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateManyWithoutUserInput_1 = require("../inputs/AccountUpdateManyWithoutUserInput");
const MountainUpdateManyWithoutUserInput_1 = require("../inputs/MountainUpdateManyWithoutUserInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const RouteUpdateManyWithoutUserInput_1 = require("../inputs/RouteUpdateManyWithoutUserInput");
const SessionUpdateManyWithoutUserInput_1 = require("../inputs/SessionUpdateManyWithoutUserInput");
let UserUpdateInput = class UserUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput)
], UserUpdateInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput)
], UserUpdateInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateManyWithoutUserInput_1.RouteUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteUpdateManyWithoutUserInput_1.RouteUpdateManyWithoutUserInput)
], UserUpdateInput.prototype, "routes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateManyWithoutUserInput_1.MountainUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainUpdateManyWithoutUserInput_1.MountainUpdateManyWithoutUserInput)
], UserUpdateInput.prototype, "mountains", void 0);
UserUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateInput", {
        isAbstract: true
    })
], UserUpdateInput);
exports.UserUpdateInput = UserUpdateInput;
