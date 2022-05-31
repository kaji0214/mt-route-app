"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateWithoutMountainInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const RouteUpdateManyWithoutSessionInput_1 = require("../inputs/RouteUpdateManyWithoutSessionInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutSessionsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutSessionsInput");
let SessionUpdateWithoutMountainInput = class SessionUpdateWithoutMountainInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SessionUpdateWithoutMountainInput.prototype, "sessionToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SessionUpdateWithoutMountainInput.prototype, "expires", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSessionsInput_1.UserUpdateOneRequiredWithoutSessionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutSessionsInput_1.UserUpdateOneRequiredWithoutSessionsInput)
], SessionUpdateWithoutMountainInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateManyWithoutSessionInput_1.RouteUpdateManyWithoutSessionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteUpdateManyWithoutSessionInput_1.RouteUpdateManyWithoutSessionInput)
], SessionUpdateWithoutMountainInput.prototype, "Route", void 0);
SessionUpdateWithoutMountainInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionUpdateWithoutMountainInput", {
        isAbstract: true
    })
], SessionUpdateWithoutMountainInput);
exports.SessionUpdateWithoutMountainInput = SessionUpdateWithoutMountainInput;
