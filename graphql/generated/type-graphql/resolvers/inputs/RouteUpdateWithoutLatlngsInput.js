"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUpdateWithoutLatlngsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const MountainUpdateOneRequiredWithoutRoutesInput_1 = require("../inputs/MountainUpdateOneRequiredWithoutRoutesInput");
const SessionUpdateOneWithoutRouteInput_1 = require("../inputs/SessionUpdateOneWithoutRouteInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutRoutesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutRoutesInput");
let RouteUpdateWithoutLatlngsInput = class RouteUpdateWithoutLatlngsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RouteUpdateWithoutLatlngsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RouteUpdateWithoutLatlngsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RouteUpdateWithoutLatlngsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], RouteUpdateWithoutLatlngsInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateOneRequiredWithoutRoutesInput_1.MountainUpdateOneRequiredWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainUpdateOneRequiredWithoutRoutesInput_1.MountainUpdateOneRequiredWithoutRoutesInput)
], RouteUpdateWithoutLatlngsInput.prototype, "mountain", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutRoutesInput_1.UserUpdateOneRequiredWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutRoutesInput_1.UserUpdateOneRequiredWithoutRoutesInput)
], RouteUpdateWithoutLatlngsInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateOneWithoutRouteInput_1.SessionUpdateOneWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateOneWithoutRouteInput_1.SessionUpdateOneWithoutRouteInput)
], RouteUpdateWithoutLatlngsInput.prototype, "Session", void 0);
RouteUpdateWithoutLatlngsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteUpdateWithoutLatlngsInput", {
        isAbstract: true
    })
], RouteUpdateWithoutLatlngsInput);
exports.RouteUpdateWithoutLatlngsInput = RouteUpdateWithoutLatlngsInput;
