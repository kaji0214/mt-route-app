"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatlngCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateLatlngArgs_1 = require("./args/AggregateLatlngArgs");
const CreateLatlngArgs_1 = require("./args/CreateLatlngArgs");
const CreateManyLatlngArgs_1 = require("./args/CreateManyLatlngArgs");
const DeleteLatlngArgs_1 = require("./args/DeleteLatlngArgs");
const DeleteManyLatlngArgs_1 = require("./args/DeleteManyLatlngArgs");
const FindFirstLatlngArgs_1 = require("./args/FindFirstLatlngArgs");
const FindManyLatlngArgs_1 = require("./args/FindManyLatlngArgs");
const FindUniqueLatlngArgs_1 = require("./args/FindUniqueLatlngArgs");
const GroupByLatlngArgs_1 = require("./args/GroupByLatlngArgs");
const UpdateLatlngArgs_1 = require("./args/UpdateLatlngArgs");
const UpdateManyLatlngArgs_1 = require("./args/UpdateManyLatlngArgs");
const UpsertLatlngArgs_1 = require("./args/UpsertLatlngArgs");
const helpers_1 = require("../../../helpers");
const Latlng_1 = require("../../../models/Latlng");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateLatlng_1 = require("../../outputs/AggregateLatlng");
const LatlngGroupBy_1 = require("../../outputs/LatlngGroupBy");
let LatlngCrudResolver = class LatlngCrudResolver {
    async latlng(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).latlng.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLatlng(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).latlng.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async latlngs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).latlng.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createLatlng(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).latlng.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyLatlng(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).latlng.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteLatlng(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).latlng.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateLatlng(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).latlng.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyLatlng(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).latlng.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyLatlng(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).latlng.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertLatlng(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).latlng.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateLatlng(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).latlng.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByLatlng(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).latlng.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Latlng_1.Latlng, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLatlngArgs_1.FindUniqueLatlngArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LatlngCrudResolver.prototype, "latlng", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Latlng_1.Latlng, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstLatlngArgs_1.FindFirstLatlngArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LatlngCrudResolver.prototype, "findFirstLatlng", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Latlng_1.Latlng], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyLatlngArgs_1.FindManyLatlngArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LatlngCrudResolver.prototype, "latlngs", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Latlng_1.Latlng, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateLatlngArgs_1.CreateLatlngArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LatlngCrudResolver.prototype, "createLatlng", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyLatlngArgs_1.CreateManyLatlngArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LatlngCrudResolver.prototype, "createManyLatlng", null);
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
], LatlngCrudResolver.prototype, "deleteLatlng", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Latlng_1.Latlng, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateLatlngArgs_1.UpdateLatlngArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LatlngCrudResolver.prototype, "updateLatlng", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyLatlngArgs_1.DeleteManyLatlngArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LatlngCrudResolver.prototype, "deleteManyLatlng", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyLatlngArgs_1.UpdateManyLatlngArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LatlngCrudResolver.prototype, "updateManyLatlng", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Latlng_1.Latlng, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertLatlngArgs_1.UpsertLatlngArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LatlngCrudResolver.prototype, "upsertLatlng", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateLatlng_1.AggregateLatlng, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateLatlngArgs_1.AggregateLatlngArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LatlngCrudResolver.prototype, "aggregateLatlng", null);
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
], LatlngCrudResolver.prototype, "groupByLatlng", null);
LatlngCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Latlng_1.Latlng)
], LatlngCrudResolver);
exports.LatlngCrudResolver = LatlngCrudResolver;
