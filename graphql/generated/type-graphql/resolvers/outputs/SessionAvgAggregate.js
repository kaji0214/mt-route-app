"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SessionAvgAggregate = class SessionAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SessionAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SessionAvgAggregate.prototype, "userId", void 0);
SessionAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SessionAvgAggregate", {
        isAbstract: true
    })
], SessionAvgAggregate);
exports.SessionAvgAggregate = SessionAvgAggregate;
