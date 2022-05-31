"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MountainCount = class MountainCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MountainCount.prototype, "routes", void 0);
MountainCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MountainCount", {
        isAbstract: true
    })
], MountainCount);
exports.MountainCount = MountainCount;
