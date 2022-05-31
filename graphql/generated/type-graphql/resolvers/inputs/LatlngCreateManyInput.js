"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LatlngCreateManyInput = class LatlngCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LatlngCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], LatlngCreateManyInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngCreateManyInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngCreateManyInput.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngCreateManyInput.prototype, "routeId", void 0);
LatlngCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngCreateManyInput", {
        isAbstract: true
    })
], LatlngCreateManyInput);
exports.LatlngCreateManyInput = LatlngCreateManyInput;
