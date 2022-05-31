"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngCreateManyRouteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LatlngCreateManyRouteInput = class LatlngCreateManyRouteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngCreateManyRouteInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LatlngCreateManyRouteInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LatlngCreateManyRouteInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngCreateManyRouteInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngCreateManyRouteInput.prototype, "lng", void 0);
LatlngCreateManyRouteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngCreateManyRouteInput", {
        isAbstract: true
    })
], LatlngCreateManyRouteInput);
exports.LatlngCreateManyRouteInput = LatlngCreateManyRouteInput;
