"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainUpdateManyWithWhereWithoutSessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainScalarWhereInput_1 = require("../inputs/MountainScalarWhereInput");
const MountainUpdateManyMutationInput_1 = require("../inputs/MountainUpdateManyMutationInput");
let MountainUpdateManyWithWhereWithoutSessionInput = class MountainUpdateManyWithWhereWithoutSessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainScalarWhereInput_1.MountainScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainScalarWhereInput_1.MountainScalarWhereInput)
], MountainUpdateManyWithWhereWithoutSessionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateManyMutationInput_1.MountainUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainUpdateManyMutationInput_1.MountainUpdateManyMutationInput)
], MountainUpdateManyWithWhereWithoutSessionInput.prototype, "data", void 0);
MountainUpdateManyWithWhereWithoutSessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainUpdateManyWithWhereWithoutSessionInput", {
        isAbstract: true
    })
], MountainUpdateManyWithWhereWithoutSessionInput);
exports.MountainUpdateManyWithWhereWithoutSessionInput = MountainUpdateManyWithWhereWithoutSessionInput;
