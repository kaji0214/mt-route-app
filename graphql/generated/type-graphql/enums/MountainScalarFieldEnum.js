"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MountainScalarFieldEnum;
(function (MountainScalarFieldEnum) {
    MountainScalarFieldEnum["id"] = "id";
    MountainScalarFieldEnum["createdAt"] = "createdAt";
    MountainScalarFieldEnum["updatedAt"] = "updatedAt";
    MountainScalarFieldEnum["name"] = "name";
    MountainScalarFieldEnum["lat"] = "lat";
    MountainScalarFieldEnum["lng"] = "lng";
    MountainScalarFieldEnum["userId"] = "userId";
    MountainScalarFieldEnum["sessionId"] = "sessionId";
})(MountainScalarFieldEnum = exports.MountainScalarFieldEnum || (exports.MountainScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(MountainScalarFieldEnum, {
    name: "MountainScalarFieldEnum",
    description: undefined,
});
