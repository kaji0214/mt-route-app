"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Latlng_1 = require("../../../models/Latlng");
const Route_1 = require("../../../models/Route");
const helpers_1 = require("../../../helpers");
let LatlngRelationsResolver = class LatlngRelationsResolver {
    async route(latlng, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).latlng.findUnique({
            where: {
                id: latlng.id,
            },
        }).route({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Route_1.Route, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Latlng_1.Latlng, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LatlngRelationsResolver.prototype, "route", null);
LatlngRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Latlng_1.Latlng)
], LatlngRelationsResolver);
exports.LatlngRelationsResolver = LatlngRelationsResolver;
