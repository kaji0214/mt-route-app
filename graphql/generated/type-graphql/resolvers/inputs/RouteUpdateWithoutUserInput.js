"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const LatlngUpdateManyWithoutRouteInput_1 = require("../inputs/LatlngUpdateManyWithoutRouteInput");
const MountainUpdateOneRequiredWithoutRoutesInput_1 = require("../inputs/MountainUpdateOneRequiredWithoutRoutesInput");
const SessionUpdateOneWithoutRouteInput_1 = require("../inputs/SessionUpdateOneWithoutRouteInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let RouteUpdateWithoutUserInput = class RouteUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RouteUpdateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RouteUpdateWithoutUserInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RouteUpdateWithoutUserInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], RouteUpdateWithoutUserInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateOneRequiredWithoutRoutesInput_1.MountainUpdateOneRequiredWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainUpdateOneRequiredWithoutRoutesInput_1.MountainUpdateOneRequiredWithoutRoutesInput)
], RouteUpdateWithoutUserInput.prototype, "mountain", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngUpdateManyWithoutRouteInput_1.LatlngUpdateManyWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngUpdateManyWithoutRouteInput_1.LatlngUpdateManyWithoutRouteInput)
], RouteUpdateWithoutUserInput.prototype, "latlngs", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateOneWithoutRouteInput_1.SessionUpdateOneWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateOneWithoutRouteInput_1.SessionUpdateOneWithoutRouteInput)
], RouteUpdateWithoutUserInput.prototype, "Session", void 0);
RouteUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteUpdateWithoutUserInput", {
        isAbstract: true
    })
], RouteUpdateWithoutUserInput);
exports.RouteUpdateWithoutUserInput = RouteUpdateWithoutUserInput;
