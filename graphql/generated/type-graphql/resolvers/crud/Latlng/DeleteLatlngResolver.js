"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLatlngResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteLatlngArgs_1 = require("./args/DeleteLatlngArgs");
const Latlng_1 = require("../../../models/Latlng");
const helpers_1 = require("../../../helpers");
let DeleteLatlngResolver = class DeleteLatlngResolver {
    async deleteLatlng(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).latlng.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Latlng_1.Latlng, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteLatlngArgs_1.DeleteLatlngArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteLatlngResolver.prototype, "deleteLatlng", null);
DeleteLatlngResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Latlng_1.Latlng)
], DeleteLatlngResolver);
exports.DeleteLatlngResolver = DeleteLatlngResolver;
