"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRouteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByRouteArgs_1 = require("./args/GroupByRouteArgs");
const Route_1 = require("../../../models/Route");
const RouteGroupBy_1 = require("../../outputs/RouteGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByRouteResolver = class GroupByRouteResolver {
    async groupByRoute(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RouteGroupBy_1.RouteGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRouteArgs_1.GroupByRouteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByRouteResolver.prototype, "groupByRoute", null);
GroupByRouteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Route_1.Route)
], GroupByRouteResolver);
exports.GroupByRouteResolver = GroupByRouteResolver;
