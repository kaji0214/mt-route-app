"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainCreateManySessionInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateManySessionInput_1 = require("../inputs/MountainCreateManySessionInput");
let MountainCreateManySessionInputEnvelope = class MountainCreateManySessionInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainCreateManySessionInput_1.MountainCreateManySessionInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MountainCreateManySessionInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MountainCreateManySessionInputEnvelope.prototype, "skipDuplicates", void 0);
MountainCreateManySessionInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainCreateManySessionInputEnvelope", {
        isAbstract: true
    })
], MountainCreateManySessionInputEnvelope);
exports.MountainCreateManySessionInputEnvelope = MountainCreateManySessionInputEnvelope;
