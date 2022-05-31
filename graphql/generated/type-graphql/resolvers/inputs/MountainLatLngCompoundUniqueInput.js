"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainLatLngCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MountainLatLngCompoundUniqueInput = class MountainLatLngCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MountainLatLngCompoundUniqueInput.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MountainLatLngCompoundUniqueInput.prototype, "lng", void 0);
MountainLatLngCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainLatLngCompoundUniqueInput", {
        isAbstract: true
    })
], MountainLatLngCompoundUniqueInput);
exports.MountainLatLngCompoundUniqueInput = MountainLatLngCompoundUniqueInput;
