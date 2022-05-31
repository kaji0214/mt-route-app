"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainUpdateManyWithoutUserInput_1 = require("../inputs/MountainUpdateManyWithoutUserInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const RouteUpdateManyWithoutUserInput_1 = require("../inputs/RouteUpdateManyWithoutUserInput");
const SessionUpdateManyWithoutUserInput_1 = require("../inputs/SessionUpdateManyWithoutUserInput");
let UserUpdateWithoutAccountsInput = class UserUpdateWithoutAccountsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutAccountsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutAccountsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutAccountsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutAccountsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput)
], UserUpdateWithoutAccountsInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateManyWithoutUserInput_1.RouteUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteUpdateManyWithoutUserInput_1.RouteUpdateManyWithoutUserInput)
], UserUpdateWithoutAccountsInput.prototype, "routes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateManyWithoutUserInput_1.MountainUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainUpdateManyWithoutUserInput_1.MountainUpdateManyWithoutUserInput)
], UserUpdateWithoutAccountsInput.prototype, "mountains", void 0);
UserUpdateWithoutAccountsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutAccountsInput", {
        isAbstract: true
    })
], UserUpdateWithoutAccountsInput);
exports.UserUpdateWithoutAccountsInput = UserUpdateWithoutAccountsInput;
