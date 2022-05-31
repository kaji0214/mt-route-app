"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainUpdateOneRequiredWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MountainCreateOrConnectWithoutRoutesInput_1 = require("../inputs/MountainCreateOrConnectWithoutRoutesInput");
const MountainCreateWithoutRoutesInput_1 = require("../inputs/MountainCreateWithoutRoutesInput");
const MountainUpdateWithoutRoutesInput_1 = require("../inputs/MountainUpdateWithoutRoutesInput");
const MountainUpsertWithoutRoutesInput_1 = require("../inputs/MountainUpsertWithoutRoutesInput");
const MountainWhereUniqueInput_1 = require("../inputs/MountainWhereUniqueInput");
let MountainUpdateOneRequiredWithoutRoutesInput = class MountainUpdateOneRequiredWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateWithoutRoutesInput_1.MountainCreateWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainCreateWithoutRoutesInput_1.MountainCreateWithoutRoutesInput)
], MountainUpdateOneRequiredWithoutRoutesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainCreateOrConnectWithoutRoutesInput_1.MountainCreateOrConnectWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainCreateOrConnectWithoutRoutesInput_1.MountainCreateOrConnectWithoutRoutesInput)
], MountainUpdateOneRequiredWithoutRoutesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpsertWithoutRoutesInput_1.MountainUpsertWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainUpsertWithoutRoutesInput_1.MountainUpsertWithoutRoutesInput)
], MountainUpdateOneRequiredWithoutRoutesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainWhereUniqueInput_1.MountainWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainWhereUniqueInput_1.MountainWhereUniqueInput)
], MountainUpdateOneRequiredWithoutRoutesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MountainUpdateWithoutRoutesInput_1.MountainUpdateWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MountainUpdateWithoutRoutesInput_1.MountainUpdateWithoutRoutesInput)
], MountainUpdateOneRequiredWithoutRoutesInput.prototype, "update", void 0);
MountainUpdateOneRequiredWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MountainUpdateOneRequiredWithoutRoutesInput", {
        isAbstract: true
    })
], MountainUpdateOneRequiredWithoutRoutesInput);
exports.MountainUpdateOneRequiredWithoutRoutesInput = MountainUpdateOneRequiredWithoutRoutesInput;
