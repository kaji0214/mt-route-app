"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMountainResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateMountainArgs_1 = require("./args/UpdateMountainArgs");
const Mountain_1 = require("../../../models/Mountain");
const helpers_1 = require("../../../helpers");
let UpdateMountainResolver = class UpdateMountainResolver {
    async updateMountain(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Mountain_1.Mountain, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateMountainArgs_1.UpdateMountainArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateMountainResolver.prototype, "updateMountain", null);
UpdateMountainResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mountain_1.Mountain)
], UpdateMountainResolver);
exports.UpdateMountainResolver = UpdateMountainResolver;
