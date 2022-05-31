"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Latlng: crudResolvers.LatlngCrudResolver,
    Mountain: crudResolvers.MountainCrudResolver,
    Route: crudResolvers.RouteCrudResolver,
    Account: crudResolvers.AccountCrudResolver,
    Session: crudResolvers.SessionCrudResolver,
    VerificationToken: crudResolvers.VerificationTokenCrudResolver
};
const actionResolversMap = {
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    },
    Latlng: {
        latlng: actionResolvers.FindUniqueLatlngResolver,
        findFirstLatlng: actionResolvers.FindFirstLatlngResolver,
        latlngs: actionResolvers.FindManyLatlngResolver,
        createLatlng: actionResolvers.CreateLatlngResolver,
        createManyLatlng: actionResolvers.CreateManyLatlngResolver,
        deleteLatlng: actionResolvers.DeleteLatlngResolver,
        updateLatlng: actionResolvers.UpdateLatlngResolver,
        deleteManyLatlng: actionResolvers.DeleteManyLatlngResolver,
        updateManyLatlng: actionResolvers.UpdateManyLatlngResolver,
        upsertLatlng: actionResolvers.UpsertLatlngResolver,
        aggregateLatlng: actionResolvers.AggregateLatlngResolver,
        groupByLatlng: actionResolvers.GroupByLatlngResolver
    },
    Mountain: {
        mountain: actionResolvers.FindUniqueMountainResolver,
        findFirstMountain: actionResolvers.FindFirstMountainResolver,
        mountains: actionResolvers.FindManyMountainResolver,
        createMountain: actionResolvers.CreateMountainResolver,
        createManyMountain: actionResolvers.CreateManyMountainResolver,
        deleteMountain: actionResolvers.DeleteMountainResolver,
        updateMountain: actionResolvers.UpdateMountainResolver,
        deleteManyMountain: actionResolvers.DeleteManyMountainResolver,
        updateManyMountain: actionResolvers.UpdateManyMountainResolver,
        upsertMountain: actionResolvers.UpsertMountainResolver,
        aggregateMountain: actionResolvers.AggregateMountainResolver,
        groupByMountain: actionResolvers.GroupByMountainResolver
    },
    Route: {
        route: actionResolvers.FindUniqueRouteResolver,
        findFirstRoute: actionResolvers.FindFirstRouteResolver,
        routes: actionResolvers.FindManyRouteResolver,
        createRoute: actionResolvers.CreateRouteResolver,
        createManyRoute: actionResolvers.CreateManyRouteResolver,
        deleteRoute: actionResolvers.DeleteRouteResolver,
        updateRoute: actionResolvers.UpdateRouteResolver,
        deleteManyRoute: actionResolvers.DeleteManyRouteResolver,
        updateManyRoute: actionResolvers.UpdateManyRouteResolver,
        upsertRoute: actionResolvers.UpsertRouteResolver,
        aggregateRoute: actionResolvers.AggregateRouteResolver,
        groupByRoute: actionResolvers.GroupByRouteResolver
    },
    Account: {
        account: actionResolvers.FindUniqueAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        createAccount: actionResolvers.CreateAccountResolver,
        createManyAccount: actionResolvers.CreateManyAccountResolver,
        deleteAccount: actionResolvers.DeleteAccountResolver,
        updateAccount: actionResolvers.UpdateAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        upsertAccount: actionResolvers.UpsertAccountResolver,
        aggregateAccount: actionResolvers.AggregateAccountResolver,
        groupByAccount: actionResolvers.GroupByAccountResolver
    },
    Session: {
        session: actionResolvers.FindUniqueSessionResolver,
        findFirstSession: actionResolvers.FindFirstSessionResolver,
        sessions: actionResolvers.FindManySessionResolver,
        createSession: actionResolvers.CreateSessionResolver,
        createManySession: actionResolvers.CreateManySessionResolver,
        deleteSession: actionResolvers.DeleteSessionResolver,
        updateSession: actionResolvers.UpdateSessionResolver,
        deleteManySession: actionResolvers.DeleteManySessionResolver,
        updateManySession: actionResolvers.UpdateManySessionResolver,
        upsertSession: actionResolvers.UpsertSessionResolver,
        aggregateSession: actionResolvers.AggregateSessionResolver,
        groupBySession: actionResolvers.GroupBySessionResolver
    },
    VerificationToken: {
        verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
        findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
        verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
        createVerificationToken: actionResolvers.CreateVerificationTokenResolver,
        createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
        deleteVerificationToken: actionResolvers.DeleteVerificationTokenResolver,
        updateVerificationToken: actionResolvers.UpdateVerificationTokenResolver,
        deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
        updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
        upsertVerificationToken: actionResolvers.UpsertVerificationTokenResolver,
        aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
        groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver
    }
};
const crudResolversInfo = {
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
    Latlng: ["latlng", "findFirstLatlng", "latlngs", "createLatlng", "createManyLatlng", "deleteLatlng", "updateLatlng", "deleteManyLatlng", "updateManyLatlng", "upsertLatlng", "aggregateLatlng", "groupByLatlng"],
    Mountain: ["mountain", "findFirstMountain", "mountains", "createMountain", "createManyMountain", "deleteMountain", "updateMountain", "deleteManyMountain", "updateManyMountain", "upsertMountain", "aggregateMountain", "groupByMountain"],
    Route: ["route", "findFirstRoute", "routes", "createRoute", "createManyRoute", "deleteRoute", "updateRoute", "deleteManyRoute", "updateManyRoute", "upsertRoute", "aggregateRoute", "groupByRoute"],
    Account: ["account", "findFirstAccount", "accounts", "createAccount", "createManyAccount", "deleteAccount", "updateAccount", "deleteManyAccount", "updateManyAccount", "upsertAccount", "aggregateAccount", "groupByAccount"],
    Session: ["session", "findFirstSession", "sessions", "createSession", "createManySession", "deleteSession", "updateSession", "deleteManySession", "updateManySession", "upsertSession", "aggregateSession", "groupBySession"],
    VerificationToken: ["verificationToken", "findFirstVerificationToken", "verificationTokens", "createVerificationToken", "createManyVerificationToken", "deleteVerificationToken", "updateVerificationToken", "deleteManyVerificationToken", "updateManyVerificationToken", "upsertVerificationToken", "aggregateVerificationToken", "groupByVerificationToken"]
};
const argsInfo = {
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueLatlngArgs: ["where"],
    FindFirstLatlngArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyLatlngArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateLatlngArgs: ["data"],
    CreateManyLatlngArgs: ["data", "skipDuplicates"],
    DeleteLatlngArgs: ["where"],
    UpdateLatlngArgs: ["data", "where"],
    DeleteManyLatlngArgs: ["where"],
    UpdateManyLatlngArgs: ["data", "where"],
    UpsertLatlngArgs: ["where", "create", "update"],
    AggregateLatlngArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByLatlngArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueMountainArgs: ["where"],
    FindFirstMountainArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyMountainArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateMountainArgs: ["data"],
    CreateManyMountainArgs: ["data", "skipDuplicates"],
    DeleteMountainArgs: ["where"],
    UpdateMountainArgs: ["data", "where"],
    DeleteManyMountainArgs: ["where"],
    UpdateManyMountainArgs: ["data", "where"],
    UpsertMountainArgs: ["where", "create", "update"],
    AggregateMountainArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByMountainArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueRouteArgs: ["where"],
    FindFirstRouteArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyRouteArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateRouteArgs: ["data"],
    CreateManyRouteArgs: ["data", "skipDuplicates"],
    DeleteRouteArgs: ["where"],
    UpdateRouteArgs: ["data", "where"],
    DeleteManyRouteArgs: ["where"],
    UpdateManyRouteArgs: ["data", "where"],
    UpsertRouteArgs: ["where", "create", "update"],
    AggregateRouteArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByRouteArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAccountArgs: ["data"],
    CreateManyAccountArgs: ["data", "skipDuplicates"],
    DeleteAccountArgs: ["where"],
    UpdateAccountArgs: ["data", "where"],
    DeleteManyAccountArgs: ["where"],
    UpdateManyAccountArgs: ["data", "where"],
    UpsertAccountArgs: ["where", "create", "update"],
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueSessionArgs: ["where"],
    FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateSessionArgs: ["data"],
    CreateManySessionArgs: ["data", "skipDuplicates"],
    DeleteSessionArgs: ["where"],
    UpdateSessionArgs: ["data", "where"],
    DeleteManySessionArgs: ["where"],
    UpdateManySessionArgs: ["data", "where"],
    UpsertSessionArgs: ["where", "create", "update"],
    AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueVerificationTokenArgs: ["where"],
    FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateVerificationTokenArgs: ["data"],
    CreateManyVerificationTokenArgs: ["data", "skipDuplicates"],
    DeleteVerificationTokenArgs: ["where"],
    UpdateVerificationTokenArgs: ["data", "where"],
    DeleteManyVerificationTokenArgs: ["where"],
    UpdateManyVerificationTokenArgs: ["data", "where"],
    UpsertVerificationTokenArgs: ["where", "create", "update"],
    AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Latlng: relationResolvers.LatlngRelationsResolver,
    Mountain: relationResolvers.MountainRelationsResolver,
    Route: relationResolvers.RouteRelationsResolver,
    Account: relationResolvers.AccountRelationsResolver,
    Session: relationResolvers.SessionRelationsResolver
};
const relationResolversInfo = {
    User: ["accounts", "sessions", "routes", "mountains"],
    Latlng: ["route"],
    Mountain: ["user", "routes", "Session"],
    Route: ["mountain", "latlngs", "user", "Session"],
    Account: ["user"],
    Session: ["user", "Mountain", "Route"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "name", "email", "emailVerified", "image"],
    Latlng: ["id", "createdAt", "updatedAt", "lat", "lng", "routeId"],
    Mountain: ["id", "createdAt", "updatedAt", "name", "lat", "lng", "userId", "sessionId"],
    Route: ["id", "createdAt", "updatedAt", "name", "time", "mountainId", "userId", "sessionId"],
    Account: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    Session: ["id", "sessionToken", "userId", "expires"],
    VerificationToken: ["identifier", "token", "expires"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "emailVerified", "image", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateLatlng: ["_count", "_avg", "_sum", "_min", "_max"],
    LatlngGroupBy: ["id", "createdAt", "updatedAt", "lat", "lng", "routeId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateMountain: ["_count", "_avg", "_sum", "_min", "_max"],
    MountainGroupBy: ["id", "createdAt", "updatedAt", "name", "lat", "lng", "userId", "sessionId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateRoute: ["_count", "_avg", "_sum", "_min", "_max"],
    RouteGroupBy: ["id", "createdAt", "updatedAt", "name", "time", "mountainId", "userId", "sessionId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
    AccountGroupBy: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateSession: ["_count", "_avg", "_sum", "_min", "_max"],
    SessionGroupBy: ["id", "sessionToken", "userId", "expires", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateVerificationToken: ["_count", "_min", "_max"],
    VerificationTokenGroupBy: ["identifier", "token", "expires", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["accounts", "sessions", "routes", "mountains"],
    UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "name", "email", "emailVerified", "image"],
    UserMaxAggregate: ["id", "name", "email", "emailVerified", "image"],
    LatlngCountAggregate: ["id", "createdAt", "updatedAt", "lat", "lng", "routeId", "_all"],
    LatlngAvgAggregate: ["id", "lat", "lng", "routeId"],
    LatlngSumAggregate: ["id", "lat", "lng", "routeId"],
    LatlngMinAggregate: ["id", "createdAt", "updatedAt", "lat", "lng", "routeId"],
    LatlngMaxAggregate: ["id", "createdAt", "updatedAt", "lat", "lng", "routeId"],
    MountainCount: ["routes"],
    MountainCountAggregate: ["id", "createdAt", "updatedAt", "name", "lat", "lng", "userId", "sessionId", "_all"],
    MountainAvgAggregate: ["id", "lat", "lng", "userId", "sessionId"],
    MountainSumAggregate: ["id", "lat", "lng", "userId", "sessionId"],
    MountainMinAggregate: ["id", "createdAt", "updatedAt", "name", "lat", "lng", "userId", "sessionId"],
    MountainMaxAggregate: ["id", "createdAt", "updatedAt", "name", "lat", "lng", "userId", "sessionId"],
    RouteCount: ["latlngs"],
    RouteCountAggregate: ["id", "createdAt", "updatedAt", "name", "time", "mountainId", "userId", "sessionId", "_all"],
    RouteAvgAggregate: ["id", "time", "mountainId", "userId", "sessionId"],
    RouteSumAggregate: ["id", "time", "mountainId", "userId", "sessionId"],
    RouteMinAggregate: ["id", "createdAt", "updatedAt", "name", "time", "mountainId", "userId", "sessionId"],
    RouteMaxAggregate: ["id", "createdAt", "updatedAt", "name", "time", "mountainId", "userId", "sessionId"],
    AccountCountAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "_all"],
    AccountAvgAggregate: ["id", "userId", "expires_at"],
    AccountSumAggregate: ["id", "userId", "expires_at"],
    AccountMinAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountMaxAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionCount: ["Mountain", "Route"],
    SessionCountAggregate: ["id", "sessionToken", "userId", "expires", "_all"],
    SessionAvgAggregate: ["id", "userId"],
    SessionSumAggregate: ["id", "userId"],
    SessionMinAggregate: ["id", "sessionToken", "userId", "expires"],
    SessionMaxAggregate: ["id", "sessionToken", "userId", "expires"],
    VerificationTokenCountAggregate: ["identifier", "token", "expires", "_all"],
    VerificationTokenMinAggregate: ["identifier", "token", "expires"],
    VerificationTokenMaxAggregate: ["identifier", "token", "expires"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "accounts", "sessions", "routes", "mountains"],
    UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "accounts", "sessions", "routes", "mountains"],
    UserWhereUniqueInput: ["id", "email"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image"],
    LatlngWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "lat", "lng", "routeId", "route"],
    LatlngOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "lat", "lng", "routeId", "route"],
    LatlngWhereUniqueInput: ["id"],
    LatlngOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "lat", "lng", "routeId", "_count", "_avg", "_max", "_min", "_sum"],
    LatlngScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "lat", "lng", "routeId"],
    MountainWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "lat", "lng", "user", "userId", "routes", "Session", "sessionId"],
    MountainOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "lat", "lng", "user", "userId", "routes", "Session", "sessionId"],
    MountainWhereUniqueInput: ["id", "lat_lng"],
    MountainOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "lat", "lng", "userId", "sessionId", "_count", "_avg", "_max", "_min", "_sum"],
    MountainScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "lat", "lng", "userId", "sessionId"],
    RouteWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "time", "mountain", "mountainId", "latlngs", "user", "userId", "Session", "sessionId"],
    RouteOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "time", "mountain", "mountainId", "latlngs", "user", "userId", "Session", "sessionId"],
    RouteWhereUniqueInput: ["id"],
    RouteOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "time", "mountainId", "userId", "sessionId", "_count", "_avg", "_max", "_min", "_sum"],
    RouteScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "time", "mountainId", "userId", "sessionId"],
    AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "user"],
    AccountOrderByWithRelationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "user"],
    AccountWhereUniqueInput: ["id", "provider_providerAccountId"],
    AccountOrderByWithAggregationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "_count", "_avg", "_max", "_min", "_sum"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires", "user", "Mountain", "Route"],
    SessionOrderByWithRelationInput: ["id", "sessionToken", "userId", "expires", "user", "Mountain", "Route"],
    SessionWhereUniqueInput: ["id", "sessionToken"],
    SessionOrderByWithAggregationInput: ["id", "sessionToken", "userId", "expires", "_count", "_avg", "_max", "_min", "_sum"],
    SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
    VerificationTokenWhereInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    VerificationTokenOrderByWithRelationInput: ["identifier", "token", "expires"],
    VerificationTokenWhereUniqueInput: ["token", "identifier_token"],
    VerificationTokenOrderByWithAggregationInput: ["identifier", "token", "expires", "_count", "_max", "_min"],
    VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "identifier", "token", "expires"],
    UserCreateInput: ["name", "email", "emailVerified", "image", "accounts", "sessions", "routes", "mountains"],
    UserUpdateInput: ["name", "email", "emailVerified", "image", "accounts", "sessions", "routes", "mountains"],
    UserCreateManyInput: ["id", "name", "email", "emailVerified", "image"],
    UserUpdateManyMutationInput: ["name", "email", "emailVerified", "image"],
    LatlngCreateInput: ["createdAt", "updatedAt", "lat", "lng", "route"],
    LatlngUpdateInput: ["createdAt", "updatedAt", "lat", "lng", "route"],
    LatlngCreateManyInput: ["id", "createdAt", "updatedAt", "lat", "lng", "routeId"],
    LatlngUpdateManyMutationInput: ["createdAt", "updatedAt", "lat", "lng"],
    MountainCreateInput: ["createdAt", "updatedAt", "name", "lat", "lng", "user", "routes", "Session"],
    MountainUpdateInput: ["createdAt", "updatedAt", "name", "lat", "lng", "user", "routes", "Session"],
    MountainCreateManyInput: ["id", "createdAt", "updatedAt", "name", "lat", "lng", "userId", "sessionId"],
    MountainUpdateManyMutationInput: ["createdAt", "updatedAt", "name", "lat", "lng"],
    RouteCreateInput: ["createdAt", "updatedAt", "name", "time", "mountain", "latlngs", "user", "Session"],
    RouteUpdateInput: ["createdAt", "updatedAt", "name", "time", "mountain", "latlngs", "user", "Session"],
    RouteCreateManyInput: ["id", "createdAt", "updatedAt", "name", "time", "mountainId", "userId", "sessionId"],
    RouteUpdateManyMutationInput: ["createdAt", "updatedAt", "name", "time"],
    AccountCreateInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "user"],
    AccountUpdateInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token", "user"],
    AccountCreateManyInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountUpdateManyMutationInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionCreateInput: ["sessionToken", "expires", "user", "Mountain", "Route"],
    SessionUpdateInput: ["sessionToken", "expires", "user", "Mountain", "Route"],
    SessionCreateManyInput: ["id", "sessionToken", "userId", "expires"],
    SessionUpdateManyMutationInput: ["sessionToken", "expires"],
    VerificationTokenCreateInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateInput: ["identifier", "token", "expires"],
    VerificationTokenCreateManyInput: ["identifier", "token", "expires"],
    VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountListRelationFilter: ["every", "some", "none"],
    SessionListRelationFilter: ["every", "some", "none"],
    RouteListRelationFilter: ["every", "some", "none"],
    MountainListRelationFilter: ["every", "some", "none"],
    AccountOrderByRelationAggregateInput: ["_count"],
    SessionOrderByRelationAggregateInput: ["_count"],
    RouteOrderByRelationAggregateInput: ["_count"],
    MountainOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
    UserAvgOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image"],
    UserSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    RouteRelationFilter: ["is", "isNot"],
    LatlngCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "lat", "lng", "routeId"],
    LatlngAvgOrderByAggregateInput: ["id", "lat", "lng", "routeId"],
    LatlngMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "lat", "lng", "routeId"],
    LatlngMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "lat", "lng", "routeId"],
    LatlngSumOrderByAggregateInput: ["id", "lat", "lng", "routeId"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    UserRelationFilter: ["is", "isNot"],
    SessionRelationFilter: ["is", "isNot"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    MountainLatLngCompoundUniqueInput: ["lat", "lng"],
    MountainCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "lat", "lng", "userId", "sessionId"],
    MountainAvgOrderByAggregateInput: ["id", "lat", "lng", "userId", "sessionId"],
    MountainMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "lat", "lng", "userId", "sessionId"],
    MountainMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "lat", "lng", "userId", "sessionId"],
    MountainSumOrderByAggregateInput: ["id", "lat", "lng", "userId", "sessionId"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    MountainRelationFilter: ["is", "isNot"],
    LatlngListRelationFilter: ["every", "some", "none"],
    LatlngOrderByRelationAggregateInput: ["_count"],
    RouteCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "time", "mountainId", "userId", "sessionId"],
    RouteAvgOrderByAggregateInput: ["id", "time", "mountainId", "userId", "sessionId"],
    RouteMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "time", "mountainId", "userId", "sessionId"],
    RouteMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "time", "mountainId", "userId", "sessionId"],
    RouteSumOrderByAggregateInput: ["id", "time", "mountainId", "userId", "sessionId"],
    AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
    AccountCountOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountAvgOrderByAggregateInput: ["id", "userId", "expires_at"],
    AccountMaxOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountMinOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountSumOrderByAggregateInput: ["id", "userId", "expires_at"],
    SessionCountOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionAvgOrderByAggregateInput: ["id", "userId"],
    SessionMaxOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionMinOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
    SessionSumOrderByAggregateInput: ["id", "userId"],
    VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
    VerificationTokenCountOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMaxOrderByAggregateInput: ["identifier", "token", "expires"],
    VerificationTokenMinOrderByAggregateInput: ["identifier", "token", "expires"],
    AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    RouteCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    MountainCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    AccountUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SessionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    RouteUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    MountainUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    RouteCreateNestedOneWithoutLatlngsInput: ["create", "connectOrCreate", "connect"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    RouteUpdateOneRequiredWithoutLatlngsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutMountainsInput: ["create", "connectOrCreate", "connect"],
    RouteCreateNestedManyWithoutMountainInput: ["create", "connectOrCreate", "createMany", "connect"],
    SessionCreateNestedOneWithoutMountainInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutMountainsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    RouteUpdateManyWithoutMountainInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    SessionUpdateOneWithoutMountainInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    MountainCreateNestedOneWithoutRoutesInput: ["create", "connectOrCreate", "connect"],
    LatlngCreateNestedManyWithoutRouteInput: ["create", "connectOrCreate", "createMany", "connect"],
    UserCreateNestedOneWithoutRoutesInput: ["create", "connectOrCreate", "connect"],
    SessionCreateNestedOneWithoutRouteInput: ["create", "connectOrCreate", "connect"],
    MountainUpdateOneRequiredWithoutRoutesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    LatlngUpdateManyWithoutRouteInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserUpdateOneRequiredWithoutRoutesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    SessionUpdateOneWithoutRouteInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutAccountsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
    MountainCreateNestedManyWithoutSessionInput: ["create", "connectOrCreate", "createMany", "connect"],
    RouteCreateNestedManyWithoutSessionInput: ["create", "connectOrCreate", "createMany", "connect"],
    UserUpdateOneRequiredWithoutSessionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    MountainUpdateManyWithoutSessionInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    RouteUpdateManyWithoutSessionInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AccountCreateWithoutUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    SessionCreateWithoutUserInput: ["sessionToken", "expires", "Mountain", "Route"],
    SessionCreateOrConnectWithoutUserInput: ["where", "create"],
    SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    RouteCreateWithoutUserInput: ["createdAt", "updatedAt", "name", "time", "mountain", "latlngs", "Session"],
    RouteCreateOrConnectWithoutUserInput: ["where", "create"],
    RouteCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    MountainCreateWithoutUserInput: ["createdAt", "updatedAt", "name", "lat", "lng", "routes", "Session"],
    MountainCreateOrConnectWithoutUserInput: ["where", "create"],
    MountainCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
    RouteUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    RouteUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    RouteUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    RouteScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "time", "mountainId", "userId", "sessionId"],
    MountainUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    MountainUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    MountainUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    MountainScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "lat", "lng", "userId", "sessionId"],
    RouteCreateWithoutLatlngsInput: ["createdAt", "updatedAt", "name", "time", "mountain", "user", "Session"],
    RouteCreateOrConnectWithoutLatlngsInput: ["where", "create"],
    RouteUpsertWithoutLatlngsInput: ["update", "create"],
    RouteUpdateWithoutLatlngsInput: ["createdAt", "updatedAt", "name", "time", "mountain", "user", "Session"],
    UserCreateWithoutMountainsInput: ["name", "email", "emailVerified", "image", "accounts", "sessions", "routes"],
    UserCreateOrConnectWithoutMountainsInput: ["where", "create"],
    RouteCreateWithoutMountainInput: ["createdAt", "updatedAt", "name", "time", "latlngs", "user", "Session"],
    RouteCreateOrConnectWithoutMountainInput: ["where", "create"],
    RouteCreateManyMountainInputEnvelope: ["data", "skipDuplicates"],
    SessionCreateWithoutMountainInput: ["sessionToken", "expires", "user", "Route"],
    SessionCreateOrConnectWithoutMountainInput: ["where", "create"],
    UserUpsertWithoutMountainsInput: ["update", "create"],
    UserUpdateWithoutMountainsInput: ["name", "email", "emailVerified", "image", "accounts", "sessions", "routes"],
    RouteUpsertWithWhereUniqueWithoutMountainInput: ["where", "update", "create"],
    RouteUpdateWithWhereUniqueWithoutMountainInput: ["where", "data"],
    RouteUpdateManyWithWhereWithoutMountainInput: ["where", "data"],
    SessionUpsertWithoutMountainInput: ["update", "create"],
    SessionUpdateWithoutMountainInput: ["sessionToken", "expires", "user", "Route"],
    MountainCreateWithoutRoutesInput: ["createdAt", "updatedAt", "name", "lat", "lng", "user", "Session"],
    MountainCreateOrConnectWithoutRoutesInput: ["where", "create"],
    LatlngCreateWithoutRouteInput: ["createdAt", "updatedAt", "lat", "lng"],
    LatlngCreateOrConnectWithoutRouteInput: ["where", "create"],
    LatlngCreateManyRouteInputEnvelope: ["data", "skipDuplicates"],
    UserCreateWithoutRoutesInput: ["name", "email", "emailVerified", "image", "accounts", "sessions", "mountains"],
    UserCreateOrConnectWithoutRoutesInput: ["where", "create"],
    SessionCreateWithoutRouteInput: ["sessionToken", "expires", "user", "Mountain"],
    SessionCreateOrConnectWithoutRouteInput: ["where", "create"],
    MountainUpsertWithoutRoutesInput: ["update", "create"],
    MountainUpdateWithoutRoutesInput: ["createdAt", "updatedAt", "name", "lat", "lng", "user", "Session"],
    LatlngUpsertWithWhereUniqueWithoutRouteInput: ["where", "update", "create"],
    LatlngUpdateWithWhereUniqueWithoutRouteInput: ["where", "data"],
    LatlngUpdateManyWithWhereWithoutRouteInput: ["where", "data"],
    LatlngScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "lat", "lng", "routeId"],
    UserUpsertWithoutRoutesInput: ["update", "create"],
    UserUpdateWithoutRoutesInput: ["name", "email", "emailVerified", "image", "accounts", "sessions", "mountains"],
    SessionUpsertWithoutRouteInput: ["update", "create"],
    SessionUpdateWithoutRouteInput: ["sessionToken", "expires", "user", "Mountain"],
    UserCreateWithoutAccountsInput: ["name", "email", "emailVerified", "image", "sessions", "routes", "mountains"],
    UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
    UserUpsertWithoutAccountsInput: ["update", "create"],
    UserUpdateWithoutAccountsInput: ["name", "email", "emailVerified", "image", "sessions", "routes", "mountains"],
    UserCreateWithoutSessionsInput: ["name", "email", "emailVerified", "image", "accounts", "routes", "mountains"],
    UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
    MountainCreateWithoutSessionInput: ["createdAt", "updatedAt", "name", "lat", "lng", "user", "routes"],
    MountainCreateOrConnectWithoutSessionInput: ["where", "create"],
    MountainCreateManySessionInputEnvelope: ["data", "skipDuplicates"],
    RouteCreateWithoutSessionInput: ["createdAt", "updatedAt", "name", "time", "mountain", "latlngs", "user"],
    RouteCreateOrConnectWithoutSessionInput: ["where", "create"],
    RouteCreateManySessionInputEnvelope: ["data", "skipDuplicates"],
    UserUpsertWithoutSessionsInput: ["update", "create"],
    UserUpdateWithoutSessionsInput: ["name", "email", "emailVerified", "image", "accounts", "routes", "mountains"],
    MountainUpsertWithWhereUniqueWithoutSessionInput: ["where", "update", "create"],
    MountainUpdateWithWhereUniqueWithoutSessionInput: ["where", "data"],
    MountainUpdateManyWithWhereWithoutSessionInput: ["where", "data"],
    RouteUpsertWithWhereUniqueWithoutSessionInput: ["where", "update", "create"],
    RouteUpdateWithWhereUniqueWithoutSessionInput: ["where", "data"],
    RouteUpdateManyWithWhereWithoutSessionInput: ["where", "data"],
    AccountCreateManyUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionCreateManyUserInput: ["id", "sessionToken", "expires"],
    RouteCreateManyUserInput: ["id", "createdAt", "updatedAt", "name", "time", "mountainId", "sessionId"],
    MountainCreateManyUserInput: ["id", "createdAt", "updatedAt", "name", "lat", "lng", "sessionId"],
    AccountUpdateWithoutUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "oauth_token_secret", "oauth_token"],
    SessionUpdateWithoutUserInput: ["sessionToken", "expires", "Mountain", "Route"],
    RouteUpdateWithoutUserInput: ["createdAt", "updatedAt", "name", "time", "mountain", "latlngs", "Session"],
    MountainUpdateWithoutUserInput: ["createdAt", "updatedAt", "name", "lat", "lng", "routes", "Session"],
    RouteCreateManyMountainInput: ["id", "createdAt", "updatedAt", "name", "time", "userId", "sessionId"],
    RouteUpdateWithoutMountainInput: ["createdAt", "updatedAt", "name", "time", "latlngs", "user", "Session"],
    LatlngCreateManyRouteInput: ["id", "createdAt", "updatedAt", "lat", "lng"],
    LatlngUpdateWithoutRouteInput: ["createdAt", "updatedAt", "lat", "lng"],
    MountainCreateManySessionInput: ["id", "createdAt", "updatedAt", "name", "lat", "lng", "userId"],
    RouteCreateManySessionInput: ["id", "createdAt", "updatedAt", "name", "time", "mountainId", "userId"],
    MountainUpdateWithoutSessionInput: ["createdAt", "updatedAt", "name", "lat", "lng", "user", "routes"],
    RouteUpdateWithoutSessionInput: ["createdAt", "updatedAt", "name", "time", "mountain", "latlngs", "user"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
