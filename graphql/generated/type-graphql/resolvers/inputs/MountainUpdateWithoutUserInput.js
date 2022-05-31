"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const RouteUpdateManyWithoutMountainInput_1 = require("../inputs/RouteUpdateManyWithoutMountainInput");
const SessionUpdateOneWithoutMountainInput_1 = require("../inputs/SessionUpdateOneWithoutMountainInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MountainUpdateWithoutUserInput = class MountainUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MountainUpdateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MountainUpdateWithoutUserInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MountainUpdateWithoutUserInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], MountainUpdateWithoutUserInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], MountainUpdateWithoutUserInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateManyWithoutMountainInput_1.RouteUpdateManyWithoutMountainInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteUpdateManyWithoutMountainInput_1.RouteUpdateManyWithoutMountainInput)
], MountainUpdateWithoutUserInput.prototype, "routes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateOneWithoutMountainInput_1.SessionUpdateOneWithoutMountainInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateOneWithoutMountainInput_1.SessionUpdateOneWithoutMountainInput)
], MountainUpdateWithoutUserInput.prototype, "Session", void 0);
MountainUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainUpdateWithoutUserInput", {
        isAbstract: true
    })
], MountainUpdateWithoutUserInput);
exports.MountainUpdateWithoutUserInput = MountainUpdateWithoutUserInput;
