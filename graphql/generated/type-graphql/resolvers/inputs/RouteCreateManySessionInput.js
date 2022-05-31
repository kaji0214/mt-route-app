"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateManySessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RouteCreateManySessionInput = class RouteCreateManySessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RouteCreateManySessionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RouteCreateManySessionInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RouteCreateManySessionInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RouteCreateManySessionInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RouteCreateManySessionInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RouteCreateManySessionInput.prototype, "mountainId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RouteCreateManySessionInput.prototype, "userId", void 0);
RouteCreateManySessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateManySessionInput", {
        isAbstract: true
    })
], RouteCreateManySessionInput);
exports.RouteCreateManySessionInput = RouteCreateManySessionInput;
