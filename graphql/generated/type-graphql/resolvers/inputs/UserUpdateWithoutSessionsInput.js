"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateManyWithoutUserInput_1 = require("../inputs/AccountUpdateManyWithoutUserInput");
const MountainUpdateManyWithoutUserInput_1 = require("../inputs/MountainUpdateManyWithoutUserInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const RouteUpdateManyWithoutUserInput_1 = require("../inputs/RouteUpdateManyWithoutUserInput");
let UserUpdateWithoutSessionsInput = class UserUpdateWithoutSessionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutSessionsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutSessionsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutSessionsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutSessionsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput)
], UserUpdateWithoutSessionsInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateManyWithoutUserInput_1.RouteUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteUpdateManyWithoutUserInput_1.RouteUpdateManyWithoutUserInput)
], UserUpdateWithoutSessionsInput.prototype, "routes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateManyWithoutUserInput_1.MountainUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainUpdateManyWithoutUserInput_1.MountainUpdateManyWithoutUserInput)
], UserUpdateWithoutSessionsInput.prototype, "mountains", void 0);
UserUpdateWithoutSessionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutSessionsInput", {
        isAbstract: true
    })
], UserUpdateWithoutSessionsInput);
exports.UserUpdateWithoutSessionsInput = UserUpdateWithoutSessionsInput;
