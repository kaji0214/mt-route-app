"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainUpdateWithoutSessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const RouteUpdateManyWithoutMountainInput_1 = require("../inputs/RouteUpdateManyWithoutMountainInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutMountainsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutMountainsInput");
let MountainUpdateWithoutSessionInput = class MountainUpdateWithoutSessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MountainUpdateWithoutSessionInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MountainUpdateWithoutSessionInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MountainUpdateWithoutSessionInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], MountainUpdateWithoutSessionInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], MountainUpdateWithoutSessionInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMountainsInput_1.UserUpdateOneRequiredWithoutMountainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutMountainsInput_1.UserUpdateOneRequiredWithoutMountainsInput)
], MountainUpdateWithoutSessionInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateManyWithoutMountainInput_1.RouteUpdateManyWithoutMountainInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteUpdateManyWithoutMountainInput_1.RouteUpdateManyWithoutMountainInput)
], MountainUpdateWithoutSessionInput.prototype, "routes", void 0);
MountainUpdateWithoutSessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainUpdateWithoutSessionInput", {
        isAbstract: true
    })
], MountainUpdateWithoutSessionInput);
exports.MountainUpdateWithoutSessionInput = MountainUpdateWithoutSessionInput;
