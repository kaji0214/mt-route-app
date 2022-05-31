"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSessionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateSessionArgs_1 = require("./args/CreateSessionArgs");
const Session_1 = require("../../../models/Session");
const helpers_1 = require("../../../helpers");
let CreateSessionResolver = class CreateSessionResolver {
    async createSession(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).session.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Session_1.Session, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateSessionArgs_1.CreateSessionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateSessionResolver.prototype, "createSession", null);
CreateSessionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Session_1.Session)
], CreateSessionResolver);
exports.CreateSessionResolver = CreateSessionResolver;
