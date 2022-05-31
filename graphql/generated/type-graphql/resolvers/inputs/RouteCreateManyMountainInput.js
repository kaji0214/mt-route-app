"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCreateManyMountainInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RouteCreateManyMountainInput = class RouteCreateManyMountainInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RouteCreateManyMountainInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RouteCreateManyMountainInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RouteCreateManyMountainInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RouteCreateManyMountainInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RouteCreateManyMountainInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RouteCreateManyMountainInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RouteCreateManyMountainInput.prototype, "sessionId", void 0);
RouteCreateManyMountainInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteCreateManyMountainInput", {
        isAbstract: true
    })
], RouteCreateManyMountainInput);
exports.RouteCreateManyMountainInput = RouteCreateManyMountainInput;
