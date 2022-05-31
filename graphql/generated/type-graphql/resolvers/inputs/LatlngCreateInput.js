"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteCreateNestedOneWithoutLatlngsInput_1 = require("../inputs/RouteCreateNestedOneWithoutLatlngsInput");
let LatlngCreateInput = class LatlngCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LatlngCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LatlngCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngCreateInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngCreateInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteCreateNestedOneWithoutLatlngsInput_1.RouteCreateNestedOneWithoutLatlngsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteCreateNestedOneWithoutLatlngsInput_1.RouteCreateNestedOneWithoutLatlngsInput)
], LatlngCreateInput.prototype, "route", void 0);
LatlngCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngCreateInput", {
        isAbstract: true
    })
], LatlngCreateInput);
exports.LatlngCreateInput = LatlngCreateInput;
