"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCount_1 = require("../resolvers/outputs/SessionCount");
let Session = class Session {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Session.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Session.prototype, "sessionToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Session.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Session.prototype, "expires", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCount_1.SessionCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCount_1.SessionCount)
], Session.prototype, "_count", void 0);
Session = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Session", {
        isAbstract: true
    })
], Session);
exports.Session = Session;
