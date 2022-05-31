"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainUpdateWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const SessionUpdateOneWithoutMountainInput_1 = require("../inputs/SessionUpdateOneWithoutMountainInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutMountainsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutMountainsInput");
let MountainUpdateWithoutRoutesInput = class MountainUpdateWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MountainUpdateWithoutRoutesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MountainUpdateWithoutRoutesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MountainUpdateWithoutRoutesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], MountainUpdateWithoutRoutesInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], MountainUpdateWithoutRoutesInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMountainsInput_1.UserUpdateOneRequiredWithoutMountainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutMountainsInput_1.UserUpdateOneRequiredWithoutMountainsInput)
], MountainUpdateWithoutRoutesInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateOneWithoutMountainInput_1.SessionUpdateOneWithoutMountainInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateOneWithoutMountainInput_1.SessionUpdateOneWithoutMountainInput)
], MountainUpdateWithoutRoutesInput.prototype, "Session", void 0);
MountainUpdateWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainUpdateWithoutRoutesInput", {
        isAbstract: true
    })
], MountainUpdateWithoutRoutesInput);
exports.MountainUpdateWithoutRoutesInput = MountainUpdateWithoutRoutesInput;
