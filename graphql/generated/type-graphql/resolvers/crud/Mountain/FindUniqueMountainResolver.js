"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMountainResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueMountainArgs_1 = require("./args/FindUniqueMountainArgs");
const Mountain_1 = require("../../../models/Mountain");
const helpers_1 = require("../../../helpers");
let FindUniqueMountainResolver = class FindUniqueMountainResolver {
    async mountain(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Mountain_1.Mountain, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMountainArgs_1.FindUniqueMountainArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueMountainResolver.prototype, "mountain", null);
FindUniqueMountainResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mountain_1.Mountain)
], FindUniqueMountainResolver);
exports.FindUniqueMountainResolver = FindUniqueMountainResolver;
