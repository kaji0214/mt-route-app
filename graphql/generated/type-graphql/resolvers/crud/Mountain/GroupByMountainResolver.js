"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMountainResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByMountainArgs_1 = require("./args/GroupByMountainArgs");
const Mountain_1 = require("../../../models/Mountain");
const MountainGroupBy_1 = require("../../outputs/MountainGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByMountainResolver = class GroupByMountainResolver {
    async groupByMountain(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MountainGroupBy_1.MountainGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMountainArgs_1.GroupByMountainArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByMountainResolver.prototype, "groupByMountain", null);
GroupByMountainResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mountain_1.Mountain)
], GroupByMountainResolver);
exports.GroupByMountainResolver = GroupByMountainResolver;
