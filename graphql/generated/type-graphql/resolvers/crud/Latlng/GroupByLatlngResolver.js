"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLatlngResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByLatlngArgs_1 = require("./args/GroupByLatlngArgs");
const Latlng_1 = require("../../../models/Latlng");
const LatlngGroupBy_1 = require("../../outputs/LatlngGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByLatlngResolver = class GroupByLatlngResolver {
    async groupByLatlng(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).latlng.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LatlngGroupBy_1.LatlngGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByLatlngArgs_1.GroupByLatlngArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByLatlngResolver.prototype, "groupByLatlng", null);
GroupByLatlngResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Latlng_1.Latlng)
], GroupByLatlngResolver);
exports.GroupByLatlngResolver = GroupByLatlngResolver;
