"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMountainResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMountainArgs_1 = require("./args/AggregateMountainArgs");
const Mountain_1 = require("../../../models/Mountain");
const AggregateMountain_1 = require("../../outputs/AggregateMountain");
const helpers_1 = require("../../../helpers");
let AggregateMountainResolver = class AggregateMountainResolver {
    async aggregateMountain(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMountain_1.AggregateMountain, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMountainArgs_1.AggregateMountainArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateMountainResolver.prototype, "aggregateMountain", null);
AggregateMountainResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mountain_1.Mountain)
], AggregateMountainResolver);
exports.AggregateMountainResolver = AggregateMountainResolver;
