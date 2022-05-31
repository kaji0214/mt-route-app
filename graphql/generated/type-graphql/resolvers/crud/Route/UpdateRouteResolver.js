"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRouteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateRouteArgs_1 = require("./args/UpdateRouteArgs");
const Route_1 = require("../../../models/Route");
const helpers_1 = require("../../../helpers");
let UpdateRouteResolver = class UpdateRouteResolver {
    async updateRoute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateRouteResolver.prototype, "updateRoute", null);
UpdateRouteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Route_1.Route)
], UpdateRouteResolver);
exports.UpdateRouteResolver = UpdateRouteResolver;
