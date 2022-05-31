"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Mountain_1 = require("../../../models/Mountain");
const Route_1 = require("../../../models/Route");
const Session_1 = require("../../../models/Session");
const User_1 = require("../../../models/User");
const MountainRoutesArgs_1 = require("./args/MountainRoutesArgs");
const helpers_1 = require("../../../helpers");
let MountainRelationsResolver = class MountainRelationsResolver {
    async user(mountain, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.findUnique({
            where: {
                id: mountain.id,
            },
        }).user({});
    }
    async routes(mountain, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.findUnique({
            where: {
                id: mountain.id,
            },
        }).routes(args);
    }
    async Session(mountain, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.findUnique({
            where: {
                id: mountain.id,
            },
        }).Session({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Mountain_1.Mountain, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MountainRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Route_1.Route], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Mountain_1.Mountain, Object, MountainRoutesArgs_1.MountainRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MountainRelationsResolver.prototype, "routes", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Session_1.Session, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Mountain_1.Mountain, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MountainRelationsResolver.prototype, "Session", null);
MountainRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mountain_1.Mountain)
], MountainRelationsResolver);
exports.MountainRelationsResolver = MountainRelationsResolver;
