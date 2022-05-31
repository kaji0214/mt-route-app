"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainUpsertWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateWithoutRoutesInput_1 = require("../inputs/MountainCreateWithoutRoutesInput");
const MountainUpdateWithoutRoutesInput_1 = require("../inputs/MountainUpdateWithoutRoutesInput");
let MountainUpsertWithoutRoutesInput = class MountainUpsertWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateWithoutRoutesInput_1.MountainUpdateWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainUpdateWithoutRoutesInput_1.MountainUpdateWithoutRoutesInput)
], MountainUpsertWithoutRoutesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateWithoutRoutesInput_1.MountainCreateWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainCreateWithoutRoutesInput_1.MountainCreateWithoutRoutesInput)
], MountainUpsertWithoutRoutesInput.prototype, "create", void 0);
MountainUpsertWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainUpsertWithoutRoutesInput", {
        isAbstract: true
    })
], MountainUpsertWithoutRoutesInput);
exports.MountainUpsertWithoutRoutesInput = MountainUpsertWithoutRoutesInput;
