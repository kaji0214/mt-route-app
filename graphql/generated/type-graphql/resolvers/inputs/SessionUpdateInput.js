"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MountainUpdateManyWithoutSessionInput_1 = require("../inputs/MountainUpdateManyWithoutSessionInput");
const RouteUpdateManyWithoutSessionInput_1 = require("../inputs/RouteUpdateManyWithoutSessionInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutSessionsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutSessionsInput");
let SessionUpdateInput = class SessionUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SessionUpdateInput.prototype, "sessionToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SessionUpdateInput.prototype, "expires", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSessionsInput_1.UserUpdateOneRequiredWithoutSessionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutSessionsInput_1.UserUpdateOneRequiredWithoutSessionsInput)
], SessionUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateManyWithoutSessionInput_1.MountainUpdateManyWithoutSessionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainUpdateManyWithoutSessionInput_1.MountainUpdateManyWithoutSessionInput)
], SessionUpdateInput.prototype, "Mountain", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateManyWithoutSessionInput_1.RouteUpdateManyWithoutSessionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RouteUpdateManyWithoutSessionInput_1.RouteUpdateManyWithoutSessionInput)
], SessionUpdateInput.prototype, "Route", void 0);
SessionUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SessionUpdateInput", {
        isAbstract: true
    })
], SessionUpdateInput);
exports.SessionUpdateInput = SessionUpdateInput;
