"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUpdateWithoutSessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const LatlngUpdateManyWithoutRouteInput_1 = require("../inputs/LatlngUpdateManyWithoutRouteInput");
const MountainUpdateOneRequiredWithoutRoutesInput_1 = require("../inputs/MountainUpdateOneRequiredWithoutRoutesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutRoutesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutRoutesInput");
let RouteUpdateWithoutSessionInput = class RouteUpdateWithoutSessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RouteUpdateWithoutSessionInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RouteUpdateWithoutSessionInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RouteUpdateWithoutSessionInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], RouteUpdateWithoutSessionInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateOneRequiredWithoutRoutesInput_1.MountainUpdateOneRequiredWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainUpdateOneRequiredWithoutRoutesInput_1.MountainUpdateOneRequiredWithoutRoutesInput)
], RouteUpdateWithoutSessionInput.prototype, "mountain", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngUpdateManyWithoutRouteInput_1.LatlngUpdateManyWithoutRouteInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngUpdateManyWithoutRouteInput_1.LatlngUpdateManyWithoutRouteInput)
], RouteUpdateWithoutSessionInput.prototype, "latlngs", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutRoutesInput_1.UserUpdateOneRequiredWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutRoutesInput_1.UserUpdateOneRequiredWithoutRoutesInput)
], RouteUpdateWithoutSessionInput.prototype, "user", void 0);
RouteUpdateWithoutSessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteUpdateWithoutSessionInput", {
        isAbstract: true
    })
], RouteUpdateWithoutSessionInput);
exports.RouteUpdateWithoutSessionInput = RouteUpdateWithoutSessionInput;
