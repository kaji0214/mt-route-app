"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainUpdateWithoutUserInput_1 = require("../inputs/MountainUpdateWithoutUserInput");
const MountainWhereUniqueInput_1 = require("../inputs/MountainWhereUniqueInput");
let MountainUpdateWithWhereUniqueWithoutUserInput = class MountainUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereUniqueInput_1.MountainWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainWhereUniqueInput_1.MountainWhereUniqueInput)
], MountainUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateWithoutUserInput_1.MountainUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainUpdateWithoutUserInput_1.MountainUpdateWithoutUserInput)
], MountainUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
MountainUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], MountainUpdateWithWhereUniqueWithoutUserInput);
exports.MountainUpdateWithWhereUniqueWithoutUserInput = MountainUpdateWithWhereUniqueWithoutUserInput;
