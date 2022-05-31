"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUpdateWithoutMountainInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const LatlngUpdateManyWithoutRouteInput_1 = require("../inputs/LatlngUpdateManyWithoutRouteInput");
const SessionUpdateOneWithoutRouteInput_1 = require("../inputs/SessionUpdateOneWithoutRouteInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutRoutesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutRoutesInput");
let RouteUpdateWithoutMountainInput = class RouteUpdateWithoutMountainInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RouteUpdateWithoutMountainInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RouteUpdateWithoutMountainInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RouteUpdateWithoutMountainInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], RouteUpdateWithoutMountainInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngUpdateManyWithoutRouteInput_1.LatlngUpdateManyWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngUpdateManyWithoutRouteInput_1.LatlngUpdateManyWithoutRouteInput)
], RouteUpdateWithoutMountainInput.prototype, "latlngs", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutRoutesInput_1.UserUpdateOneRequiredWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutRoutesInput_1.UserUpdateOneRequiredWithoutRoutesInput)
], RouteUpdateWithoutMountainInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateOneWithoutRouteInput_1.SessionUpdateOneWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateOneWithoutRouteInput_1.SessionUpdateOneWithoutRouteInput)
], RouteUpdateWithoutMountainInput.prototype, "Session", void 0);
RouteUpdateWithoutMountainInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteUpdateWithoutMountainInput", {
        isAbstract: true
    })
], RouteUpdateWithoutMountainInput);
exports.RouteUpdateWithoutMountainInput = RouteUpdateWithoutMountainInput;
