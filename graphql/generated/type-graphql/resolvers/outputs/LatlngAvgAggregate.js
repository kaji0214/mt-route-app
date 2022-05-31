"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let LatlngAvgAggregate = class LatlngAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngAvgAggregate.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngAvgAggregate.prototype, "lng", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], LatlngAvgAggregate.prototype, "routeId", void 0);
LatlngAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("LatlngAvgAggregate", {
        isAbstract: true
    })
], LatlngAvgAggregate);
exports.LatlngAvgAggregate = LatlngAvgAggregate;
