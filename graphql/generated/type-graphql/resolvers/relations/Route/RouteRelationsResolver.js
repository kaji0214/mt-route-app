"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Latlng_1 = require("../../../models/Latlng");
const Mountain_1 = require("../../../models/Mountain");
const Route_1 = require("../../../models/Route");
const Session_1 = require("../../../models/Session");
const User_1 = require("../../../models/User");
const RouteLatlngsArgs_1 = require("./args/RouteLatlngsArgs");
const helpers_1 = require("../../../helpers");
let RouteRelationsResolver = class RouteRelationsResolver {
    async mountain(route, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).route.findUnique({
            where: {
                id: route.id,
            },
        }).mountain({});
    }
    async latlngs(route, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).route.findUnique({
            where: {
                id: route.id,
            },
        }).latlngs(args);
    }
    async user(route, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).route.findUnique({
            where: {
                id: route.id,
            },
        }).user({});
    }
    async Session(route, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).route.findUnique({
            where: {
                id: route.id,
            },
        }).Session({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Mountain_1.Mountain, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Route_1.Route, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteRelationsResolver.prototype, "mountain", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Latlng_1.Latlng], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Route_1.Route, Object, RouteLatlngsArgs_1.RouteLatlngsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteRelationsResolver.prototype, "latlngs", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Route_1.Route, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Session_1.Session, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Route_1.Route, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RouteRelationsResolver.prototype, "Session", null);
RouteRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Route_1.Route)
], RouteRelationsResolver);
exports.RouteRelationsResolver = RouteRelationsResolver;
