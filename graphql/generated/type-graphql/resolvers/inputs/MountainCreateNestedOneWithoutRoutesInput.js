"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainCreateNestedOneWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateOrConnectWithoutRoutesInput_1 = require("../inputs/MountainCreateOrConnectWithoutRoutesInput");
const MountainCreateWithoutRoutesInput_1 = require("../inputs/MountainCreateWithoutRoutesInput");
const MountainWhereUniqueInput_1 = require("../inputs/MountainWhereUniqueInput");
let MountainCreateNestedOneWithoutRoutesInput = class MountainCreateNestedOneWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateWithoutRoutesInput_1.MountainCreateWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainCreateWithoutRoutesInput_1.MountainCreateWithoutRoutesInput)
], MountainCreateNestedOneWithoutRoutesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateOrConnectWithoutRoutesInput_1.MountainCreateOrConnectWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainCreateOrConnectWithoutRoutesInput_1.MountainCreateOrConnectWithoutRoutesInput)
], MountainCreateNestedOneWithoutRoutesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereUniqueInput_1.MountainWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainWhereUniqueInput_1.MountainWhereUniqueInput)
], MountainCreateNestedOneWithoutRoutesInput.prototype, "connect", void 0);
MountainCreateNestedOneWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainCreateNestedOneWithoutRoutesInput", {
        isAbstract: true
    })
], MountainCreateNestedOneWithoutRoutesInput);
exports.MountainCreateNestedOneWithoutRoutesInput = MountainCreateNestedOneWithoutRoutesInput;
