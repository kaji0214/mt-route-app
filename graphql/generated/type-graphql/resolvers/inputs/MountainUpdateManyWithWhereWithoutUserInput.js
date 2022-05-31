"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainScalarWhereInput_1 = require("../inputs/MountainScalarWhereInput");
const MountainUpdateManyMutationInput_1 = require("../inputs/MountainUpdateManyMutationInput");
let MountainUpdateManyWithWhereWithoutUserInput = class MountainUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainScalarWhereInput_1.MountainScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainScalarWhereInput_1.MountainScalarWhereInput)
], MountainUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateManyMutationInput_1.MountainUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainUpdateManyMutationInput_1.MountainUpdateManyMutationInput)
], MountainUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
MountainUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], MountainUpdateManyWithWhereWithoutUserInput);
exports.MountainUpdateManyWithWhereWithoutUserInput = MountainUpdateManyWithWhereWithoutUserInput;
