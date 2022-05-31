"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SessionSumAggregate = class SessionSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SessionSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SessionSumAggregate.prototype, "userId", void 0);
SessionSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SessionSumAggregate", {
        isAbstract: true
    })
], SessionSumAggregate);
exports.SessionSumAggregate = SessionSumAggregate;
