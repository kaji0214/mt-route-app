"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUpdateManyWithWhereWithoutSessionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RouteScalarWhereInput_1 = require("../inputs/RouteScalarWhereInput");
const RouteUpdateManyMutationInput_1 = require("../inputs/RouteUpdateManyMutationInput");
let RouteUpdateManyWithWhereWithoutSessionInput = class RouteUpdateManyWithWhereWithoutSessionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteScalarWhereInput_1.RouteScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteScalarWhereInput_1.RouteScalarWhereInput)
], RouteUpdateManyWithWhereWithoutSessionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RouteUpdateManyMutationInput_1.RouteUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RouteUpdateManyMutationInput_1.RouteUpdateManyMutationInput)
], RouteUpdateManyWithWhereWithoutSessionInput.prototype, "data", void 0);
RouteUpdateManyWithWhereWithoutSessionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RouteUpdateManyWithWhereWithoutSessionInput", {
        isAbstract: true
    })
], RouteUpdateManyWithWhereWithoutSessionInput);
exports.RouteUpdateManyWithWhereWithoutSessionInput = RouteUpdateManyWithWhereWithoutSessionInput;
