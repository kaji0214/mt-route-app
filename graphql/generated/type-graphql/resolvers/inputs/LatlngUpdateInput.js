"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const RouteUpdateOneRequiredWithoutLatlngsInput_1 = require("../inputs/RouteUpdateOneRequiredWithoutLatlngsInput");
let LatlngUpdateInput = class LatlngUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LatlngUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LatlngUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], LatlngUpdateInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], LatlngUpdateInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateOneRequiredWithoutLatlngsInput_1.RouteUpdateOneRequiredWithoutLatlngsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteUpdateOneRequiredWithoutLatlngsInput_1.RouteUpdateOneRequiredWithoutLatlngsInput)
], LatlngUpdateInput.prototype, "route", void 0);
LatlngUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngUpdateInput", {
        isAbstract: true
    })
], LatlngUpdateInput);
exports.LatlngUpdateInput = LatlngUpdateInput;
