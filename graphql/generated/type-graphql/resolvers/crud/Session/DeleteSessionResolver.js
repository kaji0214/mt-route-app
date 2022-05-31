"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSessionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteSessionArgs_1 = require("./args/DeleteSessionArgs");
const Session_1 = require("../../../models/Session");
const helpers_1 = require("../../../helpers");
let DeleteSessionResolver = class DeleteSessionResolver {
    async deleteSession(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).session.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Session_1.Session, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteSessionArgs_1.DeleteSessionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteSessionResolver.prototype, "deleteSession", null);
DeleteSessionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Session_1.Session)
], DeleteSessionResolver);
exports.DeleteSessionResolver = DeleteSessionResolver;
