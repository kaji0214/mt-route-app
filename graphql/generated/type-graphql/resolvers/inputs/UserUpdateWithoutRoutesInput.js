"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateManyWithoutUserInput_1 = require("../inputs/AccountUpdateManyWithoutUserInput");
const MountainUpdateManyWithoutUserInput_1 = require("../inputs/MountainUpdateManyWithoutUserInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const SessionUpdateManyWithoutUserInput_1 = require("../inputs/SessionUpdateManyWithoutUserInput");
let UserUpdateWithoutRoutesInput = class UserUpdateWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutRoutesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutRoutesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutRoutesInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutRoutesInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput)
], UserUpdateWithoutRoutesInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput)
], UserUpdateWithoutRoutesInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateManyWithoutUserInput_1.MountainUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainUpdateManyWithoutUserInput_1.MountainUpdateManyWithoutUserInput)
], UserUpdateWithoutRoutesInput.prototype, "mountains", void 0);
UserUpdateWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutRoutesInput", {
        isAbstract: true
    })
], UserUpdateWithoutRoutesInput);
exports.UserUpdateWithoutRoutesInput = UserUpdateWithoutRoutesInput;
