"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRouteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstRouteArgs_1 = require("./args/FindFirstRouteArgs");
const Route_1 = require("../../../models/Route");
const helpers_1 = require("../../../helpers");
let FindFirstRouteResolver = class FindFirstRouteResolver {
    async findFirstRoute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Route_1.Route, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRouteArgs_1.FindFirstRouteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstRouteResolver.prototype, "findFirstRoute", null);
FindFirstRouteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Route_1.Route)
], FindFirstRouteResolver);
exports.FindFirstRouteResolver = FindFirstRouteResolver;
