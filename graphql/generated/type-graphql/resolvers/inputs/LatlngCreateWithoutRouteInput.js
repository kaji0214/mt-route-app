"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngCreateWithoutRouteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LatlngCreateWithoutRouteInput = class LatlngCreateWithoutRouteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LatlngCreateWithoutRouteInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LatlngCreateWithoutRouteInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngCreateWithoutRouteInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngCreateWithoutRouteInput.prototype, "lng", void 0);
LatlngCreateWithoutRouteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngCreateWithoutRouteInput", {
        isAbstract: true
    })
], LatlngCreateWithoutRouteInput);
exports.LatlngCreateWithoutRouteInput = LatlngCreateWithoutRouteInput;
