"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainUpdateWithWhereUniqueWithoutSessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainUpdateWithoutSessionInput_1 = require("../inputs/MountainUpdateWithoutSessionInput");
const MountainWhereUniqueInput_1 = require("../inputs/MountainWhereUniqueInput");
let MountainUpdateWithWhereUniqueWithoutSessionInput = class MountainUpdateWithWhereUniqueWithoutSessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereUniqueInput_1.MountainWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainWhereUniqueInput_1.MountainWhereUniqueInput)
], MountainUpdateWithWhereUniqueWithoutSessionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateWithoutSessionInput_1.MountainUpdateWithoutSessionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainUpdateWithoutSessionInput_1.MountainUpdateWithoutSessionInput)
], MountainUpdateWithWhereUniqueWithoutSessionInput.prototype, "data", void 0);
MountainUpdateWithWhereUniqueWithoutSessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainUpdateWithWhereUniqueWithoutSessionInput", {
        isAbstract: true
    })
], MountainUpdateWithWhereUniqueWithoutSessionInput);
exports.MountainUpdateWithWhereUniqueWithoutSessionInput = MountainUpdateWithWhereUniqueWithoutSessionInput;
