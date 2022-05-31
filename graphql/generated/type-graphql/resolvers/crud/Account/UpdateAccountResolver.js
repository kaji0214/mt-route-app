"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateAccountArgs_1 = require("./args/UpdateAccountArgs");
const Account_1 = require("../../../models/Account");
const helpers_1 = require("../../../helpers");
let UpdateAccountResolver = class UpdateAccountResolver {
    async updateAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).account.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Account_1.Account, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateAccountArgs_1.UpdateAccountArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateAccountResolver.prototype, "updateAccount", null);
UpdateAccountResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Account_1.Account)
], UpdateAccountResolver);
exports.UpdateAccountResolver = UpdateAccountResolver;
