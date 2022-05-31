"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateRouteArgs_1 = require("./args/AggregateRouteArgs");
const CreateManyRouteArgs_1 = require("./args/CreateManyRouteArgs");
const CreateRouteArgs_1 = require("./args/CreateRouteArgs");
const DeleteManyRouteArgs_1 = require("./args/DeleteManyRouteArgs");
const DeleteRouteArgs_1 = require("./args/DeleteRouteArgs");
const FindFirstRouteArgs_1 = require("./args/FindFirstRouteArgs");
const FindManyRouteArgs_1 = require("./args/FindManyRouteArgs");
const FindUniqueRouteArgs_1 = require("./args/FindUniqueRouteArgs");
const GroupByRouteArgs_1 = require("./args/GroupByRouteArgs");
const UpdateManyRouteArgs_1 = require("./args/UpdateManyRouteArgs");
const UpdateRouteArgs_1 = require("./args/UpdateRouteArgs");
const UpsertRouteArgs_1 = require("./args/UpsertRouteArgs");
const helpers_1 = require("../../../helpers");
const Route_1 = require("../../../models/Route");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateRoute_1 = require("../../outputs/AggregateRoute");
const RouteGroupBy_1 = require("../../outputs/RouteGroupBy");
let RouteCrudResolver = class RouteCrudResolver {
    async route(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRoute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async routes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createRoute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyRoute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteRoute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateRoute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyRoute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyRoute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertRoute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateRoute(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).route.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByRoute(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRouteArgs_1.FindUniqueRouteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteCrudResolver.prototype, "route", null);
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
], RouteCrudResolver.prototype, "findFirstRoute", null);
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
], RouteCrudResolver.prototype, "routes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Route_1.Route, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateRouteArgs_1.CreateRouteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteCrudResolver.prototype, "createRoute", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyRouteArgs_1.CreateManyRouteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteCrudResolver.prototype, "createManyRoute", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Route_1.Route, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteRouteArgs_1.DeleteRouteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteCrudResolver.prototype, "deleteRoute", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Route_1.Route, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateRouteArgs_1.UpdateRouteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteCrudResolver.prototype, "updateRoute", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyRouteArgs_1.DeleteManyRouteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteCrudResolver.prototype, "deleteManyRoute", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyRouteArgs_1.UpdateManyRouteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteCrudResolver.prototype, "updateManyRoute", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Route_1.Route, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertRouteArgs_1.UpsertRouteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteCrudResolver.prototype, "upsertRoute", null);
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
], RouteCrudResolver.prototype, "aggregateRoute", null);
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
], RouteCrudResolver.prototype, "groupByRoute", null);
RouteCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Route_1.Route)
], RouteCrudResolver);
exports.RouteCrudResolver = RouteCrudResolver;
