"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyRouteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyRouteArgs_1 = require("./args/FindManyRouteArgs");
const Route_1 = require("../../../models/Route");
const helpers_1 = require("../../../helpers");
let FindManyRouteResolver = class FindManyRouteResolver {
    async routes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Route_1.Route], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyRouteArgs_1.FindManyRouteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyRouteResolver.prototype, "routes", null);
FindManyRouteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Route_1.Route)
], FindManyRouteResolver);
exports.FindManyRouteResolver = FindManyRouteResolver;
