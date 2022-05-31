"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutMountainsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateManyWithoutUserInput_1 = require("../inputs/AccountUpdateManyWithoutUserInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const RouteUpdateManyWithoutUserInput_1 = require("../inputs/RouteUpdateManyWithoutUserInput");
const SessionUpdateManyWithoutUserInput_1 = require("../inputs/SessionUpdateManyWithoutUserInput");
let UserUpdateWithoutMountainsInput = class UserUpdateWithoutMountainsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutMountainsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutMountainsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutMountainsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutMountainsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput)
], UserUpdateWithoutMountainsInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput)
], UserUpdateWithoutMountainsInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateManyWithoutUserInput_1.RouteUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteUpdateManyWithoutUserInput_1.RouteUpdateManyWithoutUserInput)
], UserUpdateWithoutMountainsInput.prototype, "routes", void 0);
UserUpdateWithoutMountainsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutMountainsInput", {
        isAbstract: true
    })
], UserUpdateWithoutMountainsInput);
exports.UserUpdateWithoutMountainsInput = UserUpdateWithoutMountainsInput;
