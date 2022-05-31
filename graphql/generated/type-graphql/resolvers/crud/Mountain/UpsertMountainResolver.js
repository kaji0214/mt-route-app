"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertMountainResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertMountainArgs_1 = require("./args/UpsertMountainArgs");
const Mountain_1 = require("../../../models/Mountain");
const helpers_1 = require("../../../helpers");
let UpsertMountainResolver = class UpsertMountainResolver {
    async upsertMountain(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Mountain_1.Mountain, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertMountainArgs_1.UpsertMountainArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertMountainResolver.prototype, "upsertMountain", null);
UpsertMountainResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mountain_1.Mountain)
], UpsertMountainResolver);
exports.UpsertMountainResolver = UpsertMountainResolver;
