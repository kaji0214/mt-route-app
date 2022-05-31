"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RouteScalarFieldEnum;
(function (RouteScalarFieldEnum) {
    RouteScalarFieldEnum["id"] = "id";
    RouteScalarFieldEnum["createdAt"] = "createdAt";
    RouteScalarFieldEnum["updatedAt"] = "updatedAt";
    RouteScalarFieldEnum["name"] = "name";
    RouteScalarFieldEnum["time"] = "time";
    RouteScalarFieldEnum["mountainId"] = "mountainId";
    RouteScalarFieldEnum["userId"] = "userId";
    RouteScalarFieldEnum["sessionId"] = "sessionId";
})(RouteScalarFieldEnum = exports.RouteScalarFieldEnum || (exports.RouteScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(RouteScalarFieldEnum, {
    name: "RouteScalarFieldEnum",
    description: undefined,
});
