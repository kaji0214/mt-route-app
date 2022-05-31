"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LatlngSumAggregate = class LatlngSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngSumAggregate.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngSumAggregate.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngSumAggregate.prototype, "routeId", void 0);
LatlngSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LatlngSumAggregate", {
        isAbstract: true
    })
], LatlngSumAggregate);
exports.LatlngSumAggregate = LatlngSumAggregate;
