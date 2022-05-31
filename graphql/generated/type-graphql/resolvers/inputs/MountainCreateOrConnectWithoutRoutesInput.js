"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainCreateOrConnectWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateWithoutRoutesInput_1 = require("../inputs/MountainCreateWithoutRoutesInput");
const MountainWhereUniqueInput_1 = require("../inputs/MountainWhereUniqueInput");
let MountainCreateOrConnectWithoutRoutesInput = class MountainCreateOrConnectWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereUniqueInput_1.MountainWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainWhereUniqueInput_1.MountainWhereUniqueInput)
], MountainCreateOrConnectWithoutRoutesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateWithoutRoutesInput_1.MountainCreateWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MountainCreateWithoutRoutesInput_1.MountainCreateWithoutRoutesInput)
], MountainCreateOrConnectWithoutRoutesInput.prototype, "create", void 0);
MountainCreateOrConnectWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainCreateOrConnectWithoutRoutesInput", {
        isAbstract: true
    })
], MountainCreateOrConnectWithoutRoutesInput);
exports.MountainCreateOrConnectWithoutRoutesInput = MountainCreateOrConnectWithoutRoutesInput;
