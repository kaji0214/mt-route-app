"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMountainResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyMountainArgs_1 = require("./args/FindManyMountainArgs");
const Mountain_1 = require("../../../models/Mountain");
const helpers_1 = require("../../../helpers");
let FindManyMountainResolver = class FindManyMountainResolver {
    async mountains(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Mountain_1.Mountain], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMountainArgs_1.FindManyMountainArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyMountainResolver.prototype, "mountains", null);
FindManyMountainResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mountain_1.Mountain)
], FindManyMountainResolver);
exports.FindManyMountainResolver = FindManyMountainResolver;
