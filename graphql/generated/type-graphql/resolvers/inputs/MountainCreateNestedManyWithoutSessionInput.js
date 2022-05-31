"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainCreateNestedManyWithoutSessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateManySessionInputEnvelope_1 = require("../inputs/MountainCreateManySessionInputEnvelope");
const MountainCreateOrConnectWithoutSessionInput_1 = require("../inputs/MountainCreateOrConnectWithoutSessionInput");
const MountainCreateWithoutSessionInput_1 = require("../inputs/MountainCreateWithoutSessionInput");
const MountainWhereUniqueInput_1 = require("../inputs/MountainWhereUniqueInput");
let MountainCreateNestedManyWithoutSessionInput = class MountainCreateNestedManyWithoutSessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainCreateWithoutSessionInput_1.MountainCreateWithoutSessionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainCreateNestedManyWithoutSessionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainCreateOrConnectWithoutSessionInput_1.MountainCreateOrConnectWithoutSessionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainCreateNestedManyWithoutSessionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateManySessionInputEnvelope_1.MountainCreateManySessionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainCreateManySessionInputEnvelope_1.MountainCreateManySessionInputEnvelope)
], MountainCreateNestedManyWithoutSessionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MountainWhereUniqueInput_1.MountainWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MountainCreateNestedManyWithoutSessionInput.prototype, "connect", void 0);
MountainCreateNestedManyWithoutSessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainCreateNestedManyWithoutSessionInput", {
        isAbstract: true
    })
], MountainCreateNestedManyWithoutSessionInput);
exports.MountainCreateNestedManyWithoutSessionInput = MountainCreateNestedManyWithoutSessionInput;
