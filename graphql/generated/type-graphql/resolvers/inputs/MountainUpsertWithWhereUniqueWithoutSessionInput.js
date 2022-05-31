"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainUpsertWithWhereUniqueWithoutSessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateWithoutSessionInput_1 = require("../inputs/MountainCreateWithoutSessionInput");
const MountainUpdateWithoutSessionInput_1 = require("../inputs/MountainUpdateWithoutSessionInput");
const MountainWhereUniqueInput_1 = require("../inputs/MountainWhereUniqueInput");
let MountainUpsertWithWhereUniqueWithoutSessionInput = class MountainUpsertWithWhereUniqueWithoutSessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereUniqueInput_1.MountainWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainWhereUniqueInput_1.MountainWhereUniqueInput)
], MountainUpsertWithWhereUniqueWithoutSessionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateWithoutSessionInput_1.MountainUpdateWithoutSessionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainUpdateWithoutSessionInput_1.MountainUpdateWithoutSessionInput)
], MountainUpsertWithWhereUniqueWithoutSessionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateWithoutSessionInput_1.MountainCreateWithoutSessionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainCreateWithoutSessionInput_1.MountainCreateWithoutSessionInput)
], MountainUpsertWithWhereUniqueWithoutSessionInput.prototype, "create", void 0);
MountainUpsertWithWhereUniqueWithoutSessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainUpsertWithWhereUniqueWithoutSessionInput", {
        isAbstract: true
    })
], MountainUpsertWithWhereUniqueWithoutSessionInput);
exports.MountainUpsertWithWhereUniqueWithoutSessionInput = MountainUpsertWithWhereUniqueWithoutSessionInput;
