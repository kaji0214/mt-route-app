"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var LatlngScalarFieldEnum;
(function (LatlngScalarFieldEnum) {
    LatlngScalarFieldEnum["id"] = "id";
    LatlngScalarFieldEnum["createdAt"] = "createdAt";
    LatlngScalarFieldEnum["updatedAt"] = "updatedAt";
    LatlngScalarFieldEnum["lat"] = "lat";
    LatlngScalarFieldEnum["lng"] = "lng";
    LatlngScalarFieldEnum["routeId"] = "routeId";
})(LatlngScalarFieldEnum = exports.LatlngScalarFieldEnum || (exports.LatlngScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(LatlngScalarFieldEnum, {
    name: "LatlngScalarFieldEnum",
    description: undefined,
});
