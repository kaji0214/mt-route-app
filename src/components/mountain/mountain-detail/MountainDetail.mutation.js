"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.MOUNTAIN_DELETE_MUTATION_WITH_SESSION = exports.MOUNTAIN_DELETE_FRAGMENT = void 0;
var graphql_tag_1 = require("graphql-tag");
exports.MOUNTAIN_DELETE_FRAGMENT = (0, graphql_tag_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment MountainDelete on Mountain {\n    id\n  }\n"], ["\n  fragment MountainDelete on Mountain {\n    id\n  }\n"])));
exports.MOUNTAIN_DELETE_MUTATION_WITH_SESSION = (0, graphql_tag_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n\n  mutation DeleteMountainWithSession(\n    $where: MountainWhereUniqueInput!\n    $data: MountainDeleteWithSessionInput!\n  ) {\n    deleteMountainWithSession(where: $where, data: $data) {\n      ...MountainDelete\n    }\n  }\n"], ["\n  ", "\n\n  mutation DeleteMountainWithSession(\n    $where: MountainWhereUniqueInput!\n    $data: MountainDeleteWithSessionInput!\n  ) {\n    deleteMountainWithSession(where: $where, data: $data) {\n      ...MountainDelete\n    }\n  }\n"])), exports.MOUNTAIN_DELETE_FRAGMENT);
var templateObject_1, templateObject_2;
