"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Mountain_1 = require("../../../models/Mountain");
const Route_1 = require("../../../models/Route");
const Session_1 = require("../../../models/Session");
const User_1 = require("../../../models/User");
const SessionMountainArgs_1 = require("./args/SessionMountainArgs");
const SessionRouteArgs_1 = require("./args/SessionRouteArgs");
const helpers_1 = require("../../../helpers");
let SessionRelationsResolver = class SessionRelationsResolver {
    async user(session, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).session.findUnique({
            where: {
                id: session.id,
            },
        }).user({});
    }
    async Mountain(session, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).session.findUnique({
            where: {
                id: session.id,
            },
        }).Mountain(args);
    }
    async Route(session, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).session.findUnique({
            where: {
                id: session.id,
            },
        }).Route(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Session_1.Session, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SessionRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Mountain_1.Mountain], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Session_1.Session, Object, SessionMountainArgs_1.SessionMountainArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SessionRelationsResolver.prototype, "Mountain", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Route_1.Route], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Session_1.Session, Object, SessionRouteArgs_1.SessionRouteArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SessionRelationsResolver.prototype, "Route", null);
SessionRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Session_1.Session)
], SessionRelationsResolver);
exports.SessionRelationsResolver = SessionRelationsResolver;
