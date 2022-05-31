"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainLatLngCompoundUniqueInput_1 = require("../inputs/MountainLatLngCompoundUniqueInput");
let MountainWhereUniqueInput = class MountainWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], MountainWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainLatLngCompoundUniqueInput_1.MountainLatLngCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainLatLngCompoundUniqueInput_1.MountainLatLngCompoundUniqueInput)
], MountainWhereUniqueInput.prototype, "lat_lng", void 0);
MountainWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainWhereUniqueInput", {
        isAbstract: true
    })
], MountainWhereUniqueInput);
exports.MountainWhereUniqueInput = MountainWhereUniqueInput;
