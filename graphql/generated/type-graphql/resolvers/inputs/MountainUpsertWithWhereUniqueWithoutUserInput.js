"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateWithoutUserInput_1 = require("../inputs/MountainCreateWithoutUserInput");
const MountainUpdateWithoutUserInput_1 = require("../inputs/MountainUpdateWithoutUserInput");
const MountainWhereUniqueInput_1 = require("../inputs/MountainWhereUniqueInput");
let MountainUpsertWithWhereUniqueWithoutUserInput = class MountainUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereUniqueInput_1.MountainWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainWhereUniqueInput_1.MountainWhereUniqueInput)
], MountainUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateWithoutUserInput_1.MountainUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainUpdateWithoutUserInput_1.MountainUpdateWithoutUserInput)
], MountainUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateWithoutUserInput_1.MountainCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainCreateWithoutUserInput_1.MountainCreateWithoutUserInput)
], MountainUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
MountainUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], MountainUpsertWithWhereUniqueWithoutUserInput);
exports.MountainUpsertWithWhereUniqueWithoutUserInput = MountainUpsertWithWhereUniqueWithoutUserInput;
