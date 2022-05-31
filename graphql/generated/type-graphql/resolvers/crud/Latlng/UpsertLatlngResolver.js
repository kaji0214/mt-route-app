"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertLatlngResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertLatlngArgs_1 = require("./args/UpsertLatlngArgs");
const Latlng_1 = require("../../../models/Latlng");
const helpers_1 = require("../../../helpers");
let UpsertLatlngResolver = class UpsertLatlngResolver {
    async upsertLatlng(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).latlng.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Latlng_1.Latlng, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertLatlngArgs_1.UpsertLatlngArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertLatlngResolver.prototype, "upsertLatlng", null);
UpsertLatlngResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Latlng_1.Latlng)
], UpsertLatlngResolver);
exports.UpsertLatlngResolver = UpsertLatlngResolver;
