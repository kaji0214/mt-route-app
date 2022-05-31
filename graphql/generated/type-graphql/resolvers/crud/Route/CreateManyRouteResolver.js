"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyRouteResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyRouteArgs_1 = require("./args/CreateManyRouteArgs");
const Route_1 = require("../../../models/Route");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyRouteResolver = class CreateManyRouteResolver {
    async createManyRoute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).route.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], CreateManyRouteResolver.prototype, "createManyRoute", null);
CreateManyRouteResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Route_1.Route)
], CreateManyRouteResolver);
exports.CreateManyRouteResolver = CreateManyRouteResolver;
