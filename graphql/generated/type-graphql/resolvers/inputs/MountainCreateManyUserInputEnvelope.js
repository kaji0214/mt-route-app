"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateManyUserInput_1 = require("../inputs/MountainCreateManyUserInput");
let MountainCreateManyUserInputEnvelope = class MountainCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainCreateManyUserInput_1.MountainCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MountainCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MountainCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
MountainCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], MountainCreateManyUserInputEnvelope);
exports.MountainCreateManyUserInputEnvelope = MountainCreateManyUserInputEnvelope;
