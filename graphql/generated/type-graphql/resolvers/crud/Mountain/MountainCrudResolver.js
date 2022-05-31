"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMountainArgs_1 = require("./args/AggregateMountainArgs");
const CreateManyMountainArgs_1 = require("./args/CreateManyMountainArgs");
const CreateMountainArgs_1 = require("./args/CreateMountainArgs");
const DeleteManyMountainArgs_1 = require("./args/DeleteManyMountainArgs");
const DeleteMountainArgs_1 = require("./args/DeleteMountainArgs");
const FindFirstMountainArgs_1 = require("./args/FindFirstMountainArgs");
const FindManyMountainArgs_1 = require("./args/FindManyMountainArgs");
const FindUniqueMountainArgs_1 = require("./args/FindUniqueMountainArgs");
const GroupByMountainArgs_1 = require("./args/GroupByMountainArgs");
const UpdateManyMountainArgs_1 = require("./args/UpdateManyMountainArgs");
const UpdateMountainArgs_1 = require("./args/UpdateMountainArgs");
const UpsertMountainArgs_1 = require("./args/UpsertMountainArgs");
const helpers_1 = require("../../../helpers");
const Mountain_1 = require("../../../models/Mountain");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMountain_1 = require("../../outputs/AggregateMountain");
const MountainGroupBy_1 = require("../../outputs/MountainGroupBy");
let MountainCrudResolver = class MountainCrudResolver {
    async mountain(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMountain(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async mountains(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createMountain(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyMountain(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteMountain(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateMountain(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMountain(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyMountain(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertMountain(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateMountain(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByMountain(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mountain.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
], MountainCrudResolver.prototype, "mountain", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Mountain_1.Mountain, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMountainArgs_1.FindFirstMountainArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MountainCrudResolver.prototype, "findFirstMountain", null);
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
], MountainCrudResolver.prototype, "mountains", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Mountain_1.Mountain, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateMountainArgs_1.CreateMountainArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MountainCrudResolver.prototype, "createMountain", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyMountainArgs_1.CreateManyMountainArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MountainCrudResolver.prototype, "createManyMountain", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Mountain_1.Mountain, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteMountainArgs_1.DeleteMountainArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MountainCrudResolver.prototype, "deleteMountain", null);
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
], MountainCrudResolver.prototype, "updateMountain", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyMountainArgs_1.DeleteManyMountainArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MountainCrudResolver.prototype, "deleteManyMountain", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyMountainArgs_1.UpdateManyMountainArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MountainCrudResolver.prototype, "updateManyMountain", null);
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
], MountainCrudResolver.prototype, "upsertMountain", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMountain_1.AggregateMountain, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMountainArgs_1.AggregateMountainArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MountainCrudResolver.prototype, "aggregateMountain", null);
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
], MountainCrudResolver.prototype, "groupByMountain", null);
MountainCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Mountain_1.Mountain)
], MountainCrudResolver);
exports.MountainCrudResolver = MountainCrudResolver;
