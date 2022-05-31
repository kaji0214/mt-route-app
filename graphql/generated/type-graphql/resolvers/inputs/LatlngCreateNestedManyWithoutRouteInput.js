"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngCreateNestedManyWithoutRouteInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngCreateManyRouteInputEnvelope_1 = require("../inputs/LatlngCreateManyRouteInputEnvelope");
const LatlngCreateOrConnectWithoutRouteInput_1 = require("../inputs/LatlngCreateOrConnectWithoutRouteInput");
const LatlngCreateWithoutRouteInput_1 = require("../inputs/LatlngCreateWithoutRouteInput");
const LatlngWhereUniqueInput_1 = require("../inputs/LatlngWhereUniqueInput");
let LatlngCreateNestedManyWithoutRouteInput = class LatlngCreateNestedManyWithoutRouteInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngCreateWithoutRouteInput_1.LatlngCreateWithoutRouteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngCreateNestedManyWithoutRouteInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngCreateOrConnectWithoutRouteInput_1.LatlngCreateOrConnectWithoutRouteInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngCreateNestedManyWithoutRouteInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LatlngCreateManyRouteInputEnvelope_1.LatlngCreateManyRouteInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LatlngCreateManyRouteInputEnvelope_1.LatlngCreateManyRouteInputEnvelope)
], LatlngCreateNestedManyWithoutRouteInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngWhereUniqueInput_1.LatlngWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngCreateNestedManyWithoutRouteInput.prototype, "connect", void 0);
LatlngCreateNestedManyWithoutRouteInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngCreateNestedManyWithoutRouteInput", {
        isAbstract: true
    })
], LatlngCreateNestedManyWithoutRouteInput);
exports.LatlngCreateNestedManyWithoutRouteInput = LatlngCreateNestedManyWithoutRouteInput;
