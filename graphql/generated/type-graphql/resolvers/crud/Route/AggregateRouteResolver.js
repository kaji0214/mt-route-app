"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRouteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateRouteArgs_1 = require("./args/AggregateRouteArgs");
const Route_1 = require("../../../models/Route");
const AggregateRoute_1 = require("../../outputs/AggregateRoute");
const helpers_1 = require("../../../helpers");
let AggregateRouteResolver = class AggregateRouteResolver {
    async aggregateRoute(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).route.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateRoute_1.AggregateRoute, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateRouteArgs_1.AggregateRouteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRouteResolver.prototype, "aggregateRoute", null);
AggregateRouteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Route_1.Route)
], AggregateRouteResolver);
exports.AggregateRouteResolver = AggregateRouteResolver;
