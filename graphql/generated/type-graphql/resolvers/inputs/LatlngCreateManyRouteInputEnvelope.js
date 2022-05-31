"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngCreateManyRouteInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LatlngCreateManyRouteInput_1 = require("../inputs/LatlngCreateManyRouteInput");
let LatlngCreateManyRouteInputEnvelope = class LatlngCreateManyRouteInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LatlngCreateManyRouteInput_1.LatlngCreateManyRouteInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], LatlngCreateManyRouteInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], LatlngCreateManyRouteInputEnvelope.prototype, "skipDuplicates", void 0);
LatlngCreateManyRouteInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("LatlngCreateManyRouteInputEnvelope", {
        isAbstract: true
    })
], LatlngCreateManyRouteInputEnvelope);
exports.LatlngCreateManyRouteInputEnvelope = LatlngCreateManyRouteInputEnvelope;
