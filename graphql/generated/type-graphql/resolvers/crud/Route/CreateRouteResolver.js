"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRouteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateRouteArgs_1 = require("./args/CreateRouteArgs");
const Route_1 = require("../../../models/Route");
const helpers_1 = require("../../../helpers");
let CreateRouteResolver = class CreateRouteResolver {
    async createRoute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], CreateRouteResolver.prototype, "createRoute", null);
CreateRouteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Route_1.Route)
], CreateRouteResolver);
exports.CreateRouteResolver = CreateRouteResolver;
