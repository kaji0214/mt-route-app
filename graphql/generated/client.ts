import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  id_token?: InputMaybe<Scalars['String']>;
  oauth_token?: InputMaybe<Scalars['String']>;
  oauth_token_secret?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['Int']>;
  id_token?: InputMaybe<Scalars['String']>;
  oauth_token?: InputMaybe<Scalars['String']>;
  oauth_token_secret?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
};

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  oauth_token?: InputMaybe<StringNullableFilter>;
  oauth_token_secret?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oauth_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oauth_token_secret?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oauth_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oauth_token_secret?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  oauth_token?: InputMaybe<StringNullableFilter>;
  oauth_token_secret?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type AccountWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateMountain = {
  __typename?: 'AggregateMountain';
  _avg?: Maybe<MountainAvgAggregate>;
  _count?: Maybe<MountainCountAggregate>;
  _max?: Maybe<MountainMaxAggregate>;
  _min?: Maybe<MountainMinAggregate>;
  _sum?: Maybe<MountainSumAggregate>;
};

export type AggregateRoute = {
  __typename?: 'AggregateRoute';
  _avg?: Maybe<RouteAvgAggregate>;
  _count?: Maybe<RouteCountAggregate>;
  _max?: Maybe<RouteMaxAggregate>;
  _min?: Maybe<RouteMinAggregate>;
  _sum?: Maybe<RouteSumAggregate>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Latlng = {
  __typename?: 'Latlng';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  routeId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type LatlngCreateManyRouteInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LatlngCreateManyRouteInputEnvelope = {
  data: Array<LatlngCreateManyRouteInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type LatlngCreateNestedManyWithoutRouteInput = {
  connect?: InputMaybe<Array<LatlngWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LatlngCreateOrConnectWithoutRouteInput>>;
  create?: InputMaybe<Array<LatlngCreateWithoutRouteInput>>;
  createMany?: InputMaybe<LatlngCreateManyRouteInputEnvelope>;
};

export type LatlngCreateOrConnectWithoutRouteInput = {
  create: LatlngCreateWithoutRouteInput;
  where: LatlngWhereUniqueInput;
};

export type LatlngCreateWithoutRouteInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LatlngInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type LatlngListRelationFilter = {
  every?: InputMaybe<LatlngWhereInput>;
  none?: InputMaybe<LatlngWhereInput>;
  some?: InputMaybe<LatlngWhereInput>;
};

export type LatlngOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LatlngOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  route?: InputMaybe<RouteOrderByWithRelationInput>;
  routeId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum LatlngScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Lat = 'lat',
  Lng = 'lng',
  RouteId = 'routeId',
  UpdatedAt = 'updatedAt'
}

export type LatlngScalarWhereInput = {
  AND?: InputMaybe<Array<LatlngScalarWhereInput>>;
  NOT?: InputMaybe<Array<LatlngScalarWhereInput>>;
  OR?: InputMaybe<Array<LatlngScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
  routeId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type LatlngUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lat?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lng?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LatlngUpdateManyWithWhereWithoutRouteInput = {
  data: LatlngUpdateManyMutationInput;
  where: LatlngScalarWhereInput;
};

export type LatlngUpdateManyWithoutRouteInput = {
  connect?: InputMaybe<Array<LatlngWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LatlngCreateOrConnectWithoutRouteInput>>;
  create?: InputMaybe<Array<LatlngCreateWithoutRouteInput>>;
  createMany?: InputMaybe<LatlngCreateManyRouteInputEnvelope>;
  delete?: InputMaybe<Array<LatlngWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LatlngScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LatlngWhereUniqueInput>>;
  set?: InputMaybe<Array<LatlngWhereUniqueInput>>;
  update?: InputMaybe<Array<LatlngUpdateWithWhereUniqueWithoutRouteInput>>;
  updateMany?: InputMaybe<Array<LatlngUpdateManyWithWhereWithoutRouteInput>>;
  upsert?: InputMaybe<Array<LatlngUpsertWithWhereUniqueWithoutRouteInput>>;
};

export type LatlngUpdateWithWhereUniqueWithoutRouteInput = {
  data: LatlngUpdateWithoutRouteInput;
  where: LatlngWhereUniqueInput;
};

export type LatlngUpdateWithoutRouteInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lat?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lng?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LatlngUpsertWithWhereUniqueWithoutRouteInput = {
  create: LatlngCreateWithoutRouteInput;
  update: LatlngUpdateWithoutRouteInput;
  where: LatlngWhereUniqueInput;
};

export type LatlngWhereInput = {
  AND?: InputMaybe<Array<LatlngWhereInput>>;
  NOT?: InputMaybe<Array<LatlngWhereInput>>;
  OR?: InputMaybe<Array<LatlngWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
  route?: InputMaybe<RouteRelationFilter>;
  routeId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type LatlngWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Mountain = {
  __typename?: 'Mountain';
  Session?: Maybe<Session>;
  _count?: Maybe<MountainCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
  routes: Array<Route>;
  sessionId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};


export type MountainRoutesArgs = {
  cursor?: InputMaybe<RouteWhereUniqueInput>;
  distinct?: InputMaybe<Array<RouteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RouteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RouteWhereInput>;
};

export type MountainAvgAggregate = {
  __typename?: 'MountainAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  sessionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type MountainAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  sessionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MountainCount = {
  __typename?: 'MountainCount';
  routes: Scalars['Int'];
};

export type MountainCountAggregate = {
  __typename?: 'MountainCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  lat: Scalars['Int'];
  lng: Scalars['Int'];
  name: Scalars['Int'];
  sessionId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MountainCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  sessionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MountainCreateInput = {
  Session?: InputMaybe<SessionCreateNestedOneWithoutMountainInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
  routes?: InputMaybe<RouteCreateNestedManyWithoutMountainInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutMountainsInput;
};

export type MountainCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
  sessionId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type MountainCreateManySessionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type MountainCreateManySessionInputEnvelope = {
  data: Array<MountainCreateManySessionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MountainCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
  sessionId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MountainCreateManyUserInputEnvelope = {
  data: Array<MountainCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MountainCreateNestedManyWithoutSessionInput = {
  connect?: InputMaybe<Array<MountainWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MountainCreateOrConnectWithoutSessionInput>>;
  create?: InputMaybe<Array<MountainCreateWithoutSessionInput>>;
  createMany?: InputMaybe<MountainCreateManySessionInputEnvelope>;
};

export type MountainCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MountainWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MountainCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MountainCreateWithoutUserInput>>;
  createMany?: InputMaybe<MountainCreateManyUserInputEnvelope>;
};

export type MountainCreateNestedOneWithoutRoutesInput = {
  connect?: InputMaybe<MountainWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MountainCreateOrConnectWithoutRoutesInput>;
  create?: InputMaybe<MountainCreateWithoutRoutesInput>;
};

export type MountainCreateOrConnectWithoutRoutesInput = {
  create: MountainCreateWithoutRoutesInput;
  where: MountainWhereUniqueInput;
};

export type MountainCreateOrConnectWithoutSessionInput = {
  create: MountainCreateWithoutSessionInput;
  where: MountainWhereUniqueInput;
};

export type MountainCreateOrConnectWithoutUserInput = {
  create: MountainCreateWithoutUserInput;
  where: MountainWhereUniqueInput;
};

export type MountainCreateWithSessionInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
  userId: Scalars['Float'];
};

export type MountainCreateWithoutRoutesInput = {
  Session?: InputMaybe<SessionCreateNestedOneWithoutMountainInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutMountainsInput;
};

export type MountainCreateWithoutSessionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
  routes?: InputMaybe<RouteCreateNestedManyWithoutMountainInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutMountainsInput;
};

export type MountainCreateWithoutUserInput = {
  Session?: InputMaybe<SessionCreateNestedOneWithoutMountainInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
  routes?: InputMaybe<RouteCreateNestedManyWithoutMountainInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MountainDeleteWithSessionInput = {
  userId: Scalars['Float'];
};

export type MountainGroupBy = {
  __typename?: 'MountainGroupBy';
  _avg?: Maybe<MountainAvgAggregate>;
  _count?: Maybe<MountainCountAggregate>;
  _max?: Maybe<MountainMaxAggregate>;
  _min?: Maybe<MountainMinAggregate>;
  _sum?: Maybe<MountainSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
  sessionId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type MountainLatLngCompoundUniqueInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type MountainListRelationFilter = {
  every?: InputMaybe<MountainWhereInput>;
  none?: InputMaybe<MountainWhereInput>;
  some?: InputMaybe<MountainWhereInput>;
};

export type MountainMaxAggregate = {
  __typename?: 'MountainMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MountainMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  sessionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MountainMinAggregate = {
  __typename?: 'MountainMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MountainMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  sessionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MountainOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MountainOrderByWithAggregationInput = {
  _avg?: InputMaybe<MountainAvgOrderByAggregateInput>;
  _count?: InputMaybe<MountainCountOrderByAggregateInput>;
  _max?: InputMaybe<MountainMaxOrderByAggregateInput>;
  _min?: InputMaybe<MountainMinOrderByAggregateInput>;
  _sum?: InputMaybe<MountainSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  sessionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MountainOrderByWithRelationInput = {
  Session?: InputMaybe<SessionOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  routes?: InputMaybe<RouteOrderByRelationAggregateInput>;
  sessionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type MountainRelationFilter = {
  is?: InputMaybe<MountainWhereInput>;
  isNot?: InputMaybe<MountainWhereInput>;
};

export enum MountainScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Lat = 'lat',
  Lng = 'lng',
  Name = 'name',
  SessionId = 'sessionId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type MountainScalarWhereInput = {
  AND?: InputMaybe<Array<MountainScalarWhereInput>>;
  NOT?: InputMaybe<Array<MountainScalarWhereInput>>;
  OR?: InputMaybe<Array<MountainScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  sessionId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type MountainScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MountainScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MountainScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MountainScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  lat?: InputMaybe<FloatWithAggregatesFilter>;
  lng?: InputMaybe<FloatWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  sessionId?: InputMaybe<IntNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type MountainSumAggregate = {
  __typename?: 'MountainSumAggregate';
  id?: Maybe<Scalars['Int']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  sessionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MountainSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  sessionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MountainUpdateInput = {
  Session?: InputMaybe<SessionUpdateOneWithoutMountainInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lat?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lng?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  routes?: InputMaybe<RouteUpdateManyWithoutMountainInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMountainsInput>;
};

export type MountainUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lat?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lng?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MountainUpdateManyWithWhereWithoutSessionInput = {
  data: MountainUpdateManyMutationInput;
  where: MountainScalarWhereInput;
};

export type MountainUpdateManyWithWhereWithoutUserInput = {
  data: MountainUpdateManyMutationInput;
  where: MountainScalarWhereInput;
};

export type MountainUpdateManyWithoutSessionInput = {
  connect?: InputMaybe<Array<MountainWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MountainCreateOrConnectWithoutSessionInput>>;
  create?: InputMaybe<Array<MountainCreateWithoutSessionInput>>;
  createMany?: InputMaybe<MountainCreateManySessionInputEnvelope>;
  delete?: InputMaybe<Array<MountainWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MountainScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MountainWhereUniqueInput>>;
  set?: InputMaybe<Array<MountainWhereUniqueInput>>;
  update?: InputMaybe<Array<MountainUpdateWithWhereUniqueWithoutSessionInput>>;
  updateMany?: InputMaybe<Array<MountainUpdateManyWithWhereWithoutSessionInput>>;
  upsert?: InputMaybe<Array<MountainUpsertWithWhereUniqueWithoutSessionInput>>;
};

export type MountainUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<MountainWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MountainCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MountainCreateWithoutUserInput>>;
  createMany?: InputMaybe<MountainCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MountainWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MountainScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MountainWhereUniqueInput>>;
  set?: InputMaybe<Array<MountainWhereUniqueInput>>;
  update?: InputMaybe<Array<MountainUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<MountainUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<MountainUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MountainUpdateOneRequiredWithoutRoutesInput = {
  connect?: InputMaybe<MountainWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MountainCreateOrConnectWithoutRoutesInput>;
  create?: InputMaybe<MountainCreateWithoutRoutesInput>;
  update?: InputMaybe<MountainUpdateWithoutRoutesInput>;
  upsert?: InputMaybe<MountainUpsertWithoutRoutesInput>;
};

export type MountainUpdateWithSessionInput = {
  lat: FloatFieldUpdateOperationsInput;
  lng: FloatFieldUpdateOperationsInput;
  name: StringFieldUpdateOperationsInput;
  userId: IntFieldUpdateOperationsInput;
};

export type MountainUpdateWithWhereUniqueWithoutSessionInput = {
  data: MountainUpdateWithoutSessionInput;
  where: MountainWhereUniqueInput;
};

export type MountainUpdateWithWhereUniqueWithoutUserInput = {
  data: MountainUpdateWithoutUserInput;
  where: MountainWhereUniqueInput;
};

export type MountainUpdateWithoutRoutesInput = {
  Session?: InputMaybe<SessionUpdateOneWithoutMountainInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lat?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lng?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMountainsInput>;
};

export type MountainUpdateWithoutSessionInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lat?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lng?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  routes?: InputMaybe<RouteUpdateManyWithoutMountainInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMountainsInput>;
};

export type MountainUpdateWithoutUserInput = {
  Session?: InputMaybe<SessionUpdateOneWithoutMountainInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lat?: InputMaybe<FloatFieldUpdateOperationsInput>;
  lng?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  routes?: InputMaybe<RouteUpdateManyWithoutMountainInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MountainUpsertWithWhereUniqueWithoutSessionInput = {
  create: MountainCreateWithoutSessionInput;
  update: MountainUpdateWithoutSessionInput;
  where: MountainWhereUniqueInput;
};

export type MountainUpsertWithWhereUniqueWithoutUserInput = {
  create: MountainCreateWithoutUserInput;
  update: MountainUpdateWithoutUserInput;
  where: MountainWhereUniqueInput;
};

export type MountainUpsertWithoutRoutesInput = {
  create: MountainCreateWithoutRoutesInput;
  update: MountainUpdateWithoutRoutesInput;
};

export type MountainWhereInput = {
  AND?: InputMaybe<Array<MountainWhereInput>>;
  NOT?: InputMaybe<Array<MountainWhereInput>>;
  OR?: InputMaybe<Array<MountainWhereInput>>;
  Session?: InputMaybe<SessionRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  routes?: InputMaybe<RouteListRelationFilter>;
  sessionId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type MountainWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  lat_lng?: InputMaybe<MountainLatLngCompoundUniqueInput>;
};

export type MountainsPagination = {
  __typename?: 'MountainsPagination';
  data: Array<Mountain>;
  meta: Pagination;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyMountain: AffectedRowsOutput;
  createManyRoute: AffectedRowsOutput;
  createMountain: Mountain;
  createMountainWithSession: Mountain;
  createRoute: Route;
  createRouteWithSession: Route;
  deleteManyMountain: AffectedRowsOutput;
  deleteManyRoute: AffectedRowsOutput;
  deleteMountain?: Maybe<Mountain>;
  deleteMountainWithSession: Mountain;
  deleteRoute?: Maybe<Route>;
  deleteRouteWithSession: Route;
  updateManyMountain: AffectedRowsOutput;
  updateManyRoute: AffectedRowsOutput;
  updateMountain?: Maybe<Mountain>;
  updateMountainWithSession: Mountain;
  updateRoute?: Maybe<Route>;
  updateRouteWithSession: Route;
  upsertMountain: Mountain;
  upsertRoute: Route;
};


export type MutationCreateManyMountainArgs = {
  data: Array<MountainCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyRouteArgs = {
  data: Array<RouteCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateMountainArgs = {
  data: MountainCreateInput;
};


export type MutationCreateMountainWithSessionArgs = {
  data: MountainCreateWithSessionInput;
};


export type MutationCreateRouteArgs = {
  data: RouteCreateInput;
};


export type MutationCreateRouteWithSessionArgs = {
  data: RouteCreateWithSessionInput;
};


export type MutationDeleteManyMountainArgs = {
  where?: InputMaybe<MountainWhereInput>;
};


export type MutationDeleteManyRouteArgs = {
  where?: InputMaybe<RouteWhereInput>;
};


export type MutationDeleteMountainArgs = {
  where: MountainWhereUniqueInput;
};


export type MutationDeleteMountainWithSessionArgs = {
  data: MountainDeleteWithSessionInput;
  where: MountainWhereUniqueInput;
};


export type MutationDeleteRouteArgs = {
  where: RouteWhereUniqueInput;
};


export type MutationDeleteRouteWithSessionArgs = {
  data: RouteDeleteWithSessionInput;
  where: RouteWhereUniqueInput;
};


export type MutationUpdateManyMountainArgs = {
  data: MountainUpdateManyMutationInput;
  where?: InputMaybe<MountainWhereInput>;
};


export type MutationUpdateManyRouteArgs = {
  data: RouteUpdateManyMutationInput;
  where?: InputMaybe<RouteWhereInput>;
};


export type MutationUpdateMountainArgs = {
  data: MountainUpdateInput;
  where: MountainWhereUniqueInput;
};


export type MutationUpdateMountainWithSessionArgs = {
  data: MountainUpdateWithSessionInput;
  where: MountainWhereUniqueInput;
};


export type MutationUpdateRouteArgs = {
  data: RouteUpdateInput;
  where: RouteWhereUniqueInput;
};


export type MutationUpdateRouteWithSessionArgs = {
  data: RouteUpdateWithSessionInput;
  where: RouteWhereUniqueInput;
};


export type MutationUpsertMountainArgs = {
  create: MountainCreateInput;
  update: MountainUpdateInput;
  where: MountainWhereUniqueInput;
};


export type MutationUpsertRouteArgs = {
  create: RouteCreateInput;
  update: RouteUpdateInput;
  where: RouteWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  currentPage: Scalars['Int'];
  lastPage: Scalars['Int'];
  next?: Maybe<Scalars['Int']>;
  perPage: Scalars['Int'];
  prev?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  aggregateMountain: AggregateMountain;
  aggregateRoute: AggregateRoute;
  findFirstMountain?: Maybe<Mountain>;
  findFirstRoute?: Maybe<Route>;
  groupByMountain: Array<MountainGroupBy>;
  groupByRoute: Array<RouteGroupBy>;
  mountain?: Maybe<Mountain>;
  mountains: Array<Mountain>;
  mountainsPagination: MountainsPagination;
  route?: Maybe<Route>;
  routes: Array<Route>;
};


export type QueryAggregateMountainArgs = {
  cursor?: InputMaybe<MountainWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MountainOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MountainWhereInput>;
};


export type QueryAggregateRouteArgs = {
  cursor?: InputMaybe<RouteWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RouteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RouteWhereInput>;
};


export type QueryFindFirstMountainArgs = {
  cursor?: InputMaybe<MountainWhereUniqueInput>;
  distinct?: InputMaybe<Array<MountainScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MountainOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MountainWhereInput>;
};


export type QueryFindFirstRouteArgs = {
  cursor?: InputMaybe<RouteWhereUniqueInput>;
  distinct?: InputMaybe<Array<RouteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RouteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RouteWhereInput>;
};


export type QueryGroupByMountainArgs = {
  by: Array<MountainScalarFieldEnum>;
  having?: InputMaybe<MountainScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MountainOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MountainWhereInput>;
};


export type QueryGroupByRouteArgs = {
  by: Array<RouteScalarFieldEnum>;
  having?: InputMaybe<RouteScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<RouteOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RouteWhereInput>;
};


export type QueryMountainArgs = {
  where: MountainWhereUniqueInput;
};


export type QueryMountainsArgs = {
  cursor?: InputMaybe<MountainWhereUniqueInput>;
  distinct?: InputMaybe<Array<MountainScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MountainOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MountainWhereInput>;
};


export type QueryMountainsPaginationArgs = {
  cursor?: InputMaybe<MountainWhereUniqueInput>;
  distinct?: InputMaybe<Array<MountainScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MountainOrderByWithRelationInput>>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MountainWhereInput>;
};


export type QueryRouteArgs = {
  where: RouteWhereUniqueInput;
};


export type QueryRoutesArgs = {
  cursor?: InputMaybe<RouteWhereUniqueInput>;
  distinct?: InputMaybe<Array<RouteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RouteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RouteWhereInput>;
};

export type Route = {
  __typename?: 'Route';
  Session?: Maybe<Session>;
  _count?: Maybe<RouteCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  latlngs: Array<Latlng>;
  mountain: Mountain;
  mountainId: Scalars['Int'];
  name: Scalars['String'];
  sessionId?: Maybe<Scalars['Int']>;
  time: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};


export type RouteLatlngsArgs = {
  cursor?: InputMaybe<LatlngWhereUniqueInput>;
  distinct?: InputMaybe<Array<LatlngScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LatlngOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LatlngWhereInput>;
};

export type RouteAvgAggregate = {
  __typename?: 'RouteAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  mountainId?: Maybe<Scalars['Float']>;
  sessionId?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type RouteAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  mountainId?: InputMaybe<SortOrder>;
  sessionId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RouteCount = {
  __typename?: 'RouteCount';
  latlngs: Scalars['Int'];
};

export type RouteCountAggregate = {
  __typename?: 'RouteCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  mountainId: Scalars['Int'];
  name: Scalars['Int'];
  sessionId: Scalars['Int'];
  time: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type RouteCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mountainId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  sessionId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RouteCreateInput = {
  Session?: InputMaybe<SessionCreateNestedOneWithoutRouteInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  latlngs?: InputMaybe<LatlngCreateNestedManyWithoutRouteInput>;
  mountain: MountainCreateNestedOneWithoutRoutesInput;
  name: Scalars['String'];
  time: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutRoutesInput;
};

export type RouteCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  mountainId: Scalars['Int'];
  name: Scalars['String'];
  sessionId?: InputMaybe<Scalars['Int']>;
  time: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type RouteCreateManyMountainInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  sessionId?: InputMaybe<Scalars['Int']>;
  time: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type RouteCreateManyMountainInputEnvelope = {
  data: Array<RouteCreateManyMountainInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RouteCreateManySessionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  mountainId: Scalars['Int'];
  name: Scalars['String'];
  time: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type RouteCreateManySessionInputEnvelope = {
  data: Array<RouteCreateManySessionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RouteCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  mountainId: Scalars['Int'];
  name: Scalars['String'];
  sessionId?: InputMaybe<Scalars['Int']>;
  time: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RouteCreateManyUserInputEnvelope = {
  data: Array<RouteCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RouteCreateNestedManyWithoutMountainInput = {
  connect?: InputMaybe<Array<RouteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RouteCreateOrConnectWithoutMountainInput>>;
  create?: InputMaybe<Array<RouteCreateWithoutMountainInput>>;
  createMany?: InputMaybe<RouteCreateManyMountainInputEnvelope>;
};

export type RouteCreateNestedManyWithoutSessionInput = {
  connect?: InputMaybe<Array<RouteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RouteCreateOrConnectWithoutSessionInput>>;
  create?: InputMaybe<Array<RouteCreateWithoutSessionInput>>;
  createMany?: InputMaybe<RouteCreateManySessionInputEnvelope>;
};

export type RouteCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RouteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RouteCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RouteCreateWithoutUserInput>>;
  createMany?: InputMaybe<RouteCreateManyUserInputEnvelope>;
};

export type RouteCreateOrConnectWithoutMountainInput = {
  create: RouteCreateWithoutMountainInput;
  where: RouteWhereUniqueInput;
};

export type RouteCreateOrConnectWithoutSessionInput = {
  create: RouteCreateWithoutSessionInput;
  where: RouteWhereUniqueInput;
};

export type RouteCreateOrConnectWithoutUserInput = {
  create: RouteCreateWithoutUserInput;
  where: RouteWhereUniqueInput;
};

export type RouteCreateWithSessionInput = {
  latlngs: Array<LatlngInput>;
  mountainId: Scalars['Float'];
  name: Scalars['String'];
  time: Scalars['Float'];
  userId: Scalars['Float'];
};

export type RouteCreateWithoutMountainInput = {
  Session?: InputMaybe<SessionCreateNestedOneWithoutRouteInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  latlngs?: InputMaybe<LatlngCreateNestedManyWithoutRouteInput>;
  name: Scalars['String'];
  time: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutRoutesInput;
};

export type RouteCreateWithoutSessionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  latlngs?: InputMaybe<LatlngCreateNestedManyWithoutRouteInput>;
  mountain: MountainCreateNestedOneWithoutRoutesInput;
  name: Scalars['String'];
  time: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutRoutesInput;
};

export type RouteCreateWithoutUserInput = {
  Session?: InputMaybe<SessionCreateNestedOneWithoutRouteInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  latlngs?: InputMaybe<LatlngCreateNestedManyWithoutRouteInput>;
  mountain: MountainCreateNestedOneWithoutRoutesInput;
  name: Scalars['String'];
  time: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RouteDeleteWithSessionInput = {
  userId: Scalars['Float'];
};

export type RouteGroupBy = {
  __typename?: 'RouteGroupBy';
  _avg?: Maybe<RouteAvgAggregate>;
  _count?: Maybe<RouteCountAggregate>;
  _max?: Maybe<RouteMaxAggregate>;
  _min?: Maybe<RouteMinAggregate>;
  _sum?: Maybe<RouteSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  mountainId: Scalars['Int'];
  name: Scalars['String'];
  sessionId?: Maybe<Scalars['Int']>;
  time: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type RouteListRelationFilter = {
  every?: InputMaybe<RouteWhereInput>;
  none?: InputMaybe<RouteWhereInput>;
  some?: InputMaybe<RouteWhereInput>;
};

export type RouteMaxAggregate = {
  __typename?: 'RouteMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  mountainId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type RouteMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mountainId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  sessionId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RouteMinAggregate = {
  __typename?: 'RouteMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  mountainId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type RouteMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mountainId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  sessionId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RouteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RouteOrderByWithAggregationInput = {
  _avg?: InputMaybe<RouteAvgOrderByAggregateInput>;
  _count?: InputMaybe<RouteCountOrderByAggregateInput>;
  _max?: InputMaybe<RouteMaxOrderByAggregateInput>;
  _min?: InputMaybe<RouteMinOrderByAggregateInput>;
  _sum?: InputMaybe<RouteSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mountainId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  sessionId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RouteOrderByWithRelationInput = {
  Session?: InputMaybe<SessionOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latlngs?: InputMaybe<LatlngOrderByRelationAggregateInput>;
  mountain?: InputMaybe<MountainOrderByWithRelationInput>;
  mountainId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  sessionId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type RouteRelationFilter = {
  is?: InputMaybe<RouteWhereInput>;
  isNot?: InputMaybe<RouteWhereInput>;
};

export enum RouteScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  MountainId = 'mountainId',
  Name = 'name',
  SessionId = 'sessionId',
  Time = 'time',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type RouteScalarWhereInput = {
  AND?: InputMaybe<Array<RouteScalarWhereInput>>;
  NOT?: InputMaybe<Array<RouteScalarWhereInput>>;
  OR?: InputMaybe<Array<RouteScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  mountainId?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  sessionId?: InputMaybe<IntNullableFilter>;
  time?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type RouteScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RouteScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RouteScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RouteScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  mountainId?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  sessionId?: InputMaybe<IntNullableWithAggregatesFilter>;
  time?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type RouteSumAggregate = {
  __typename?: 'RouteSumAggregate';
  id?: Maybe<Scalars['Int']>;
  mountainId?: Maybe<Scalars['Int']>;
  sessionId?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type RouteSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  mountainId?: InputMaybe<SortOrder>;
  sessionId?: InputMaybe<SortOrder>;
  time?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RouteUpdateInput = {
  Session?: InputMaybe<SessionUpdateOneWithoutRouteInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  latlngs?: InputMaybe<LatlngUpdateManyWithoutRouteInput>;
  mountain?: InputMaybe<MountainUpdateOneRequiredWithoutRoutesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  time?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRoutesInput>;
};

export type RouteUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  time?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RouteUpdateManyWithWhereWithoutMountainInput = {
  data: RouteUpdateManyMutationInput;
  where: RouteScalarWhereInput;
};

export type RouteUpdateManyWithWhereWithoutSessionInput = {
  data: RouteUpdateManyMutationInput;
  where: RouteScalarWhereInput;
};

export type RouteUpdateManyWithWhereWithoutUserInput = {
  data: RouteUpdateManyMutationInput;
  where: RouteScalarWhereInput;
};

export type RouteUpdateManyWithoutMountainInput = {
  connect?: InputMaybe<Array<RouteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RouteCreateOrConnectWithoutMountainInput>>;
  create?: InputMaybe<Array<RouteCreateWithoutMountainInput>>;
  createMany?: InputMaybe<RouteCreateManyMountainInputEnvelope>;
  delete?: InputMaybe<Array<RouteWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RouteScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RouteWhereUniqueInput>>;
  set?: InputMaybe<Array<RouteWhereUniqueInput>>;
  update?: InputMaybe<Array<RouteUpdateWithWhereUniqueWithoutMountainInput>>;
  updateMany?: InputMaybe<Array<RouteUpdateManyWithWhereWithoutMountainInput>>;
  upsert?: InputMaybe<Array<RouteUpsertWithWhereUniqueWithoutMountainInput>>;
};

export type RouteUpdateManyWithoutSessionInput = {
  connect?: InputMaybe<Array<RouteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RouteCreateOrConnectWithoutSessionInput>>;
  create?: InputMaybe<Array<RouteCreateWithoutSessionInput>>;
  createMany?: InputMaybe<RouteCreateManySessionInputEnvelope>;
  delete?: InputMaybe<Array<RouteWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RouteScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RouteWhereUniqueInput>>;
  set?: InputMaybe<Array<RouteWhereUniqueInput>>;
  update?: InputMaybe<Array<RouteUpdateWithWhereUniqueWithoutSessionInput>>;
  updateMany?: InputMaybe<Array<RouteUpdateManyWithWhereWithoutSessionInput>>;
  upsert?: InputMaybe<Array<RouteUpsertWithWhereUniqueWithoutSessionInput>>;
};

export type RouteUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<RouteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RouteCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RouteCreateWithoutUserInput>>;
  createMany?: InputMaybe<RouteCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<RouteWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RouteScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RouteWhereUniqueInput>>;
  set?: InputMaybe<Array<RouteWhereUniqueInput>>;
  update?: InputMaybe<Array<RouteUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<RouteUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<RouteUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RouteUpdateWithSessionInput = {
  latlngs: LatlngUpdateManyWithoutRouteInput;
  name: StringFieldUpdateOperationsInput;
  time: IntFieldUpdateOperationsInput;
  userId: Scalars['Float'];
};

export type RouteUpdateWithWhereUniqueWithoutMountainInput = {
  data: RouteUpdateWithoutMountainInput;
  where: RouteWhereUniqueInput;
};

export type RouteUpdateWithWhereUniqueWithoutSessionInput = {
  data: RouteUpdateWithoutSessionInput;
  where: RouteWhereUniqueInput;
};

export type RouteUpdateWithWhereUniqueWithoutUserInput = {
  data: RouteUpdateWithoutUserInput;
  where: RouteWhereUniqueInput;
};

export type RouteUpdateWithoutMountainInput = {
  Session?: InputMaybe<SessionUpdateOneWithoutRouteInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  latlngs?: InputMaybe<LatlngUpdateManyWithoutRouteInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  time?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRoutesInput>;
};

export type RouteUpdateWithoutSessionInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  latlngs?: InputMaybe<LatlngUpdateManyWithoutRouteInput>;
  mountain?: InputMaybe<MountainUpdateOneRequiredWithoutRoutesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  time?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRoutesInput>;
};

export type RouteUpdateWithoutUserInput = {
  Session?: InputMaybe<SessionUpdateOneWithoutRouteInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  latlngs?: InputMaybe<LatlngUpdateManyWithoutRouteInput>;
  mountain?: InputMaybe<MountainUpdateOneRequiredWithoutRoutesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  time?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RouteUpsertWithWhereUniqueWithoutMountainInput = {
  create: RouteCreateWithoutMountainInput;
  update: RouteUpdateWithoutMountainInput;
  where: RouteWhereUniqueInput;
};

export type RouteUpsertWithWhereUniqueWithoutSessionInput = {
  create: RouteCreateWithoutSessionInput;
  update: RouteUpdateWithoutSessionInput;
  where: RouteWhereUniqueInput;
};

export type RouteUpsertWithWhereUniqueWithoutUserInput = {
  create: RouteCreateWithoutUserInput;
  update: RouteUpdateWithoutUserInput;
  where: RouteWhereUniqueInput;
};

export type RouteWhereInput = {
  AND?: InputMaybe<Array<RouteWhereInput>>;
  NOT?: InputMaybe<Array<RouteWhereInput>>;
  OR?: InputMaybe<Array<RouteWhereInput>>;
  Session?: InputMaybe<SessionRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  latlngs?: InputMaybe<LatlngListRelationFilter>;
  mountain?: InputMaybe<MountainRelationFilter>;
  mountainId?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  sessionId?: InputMaybe<IntNullableFilter>;
  time?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type RouteWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Session = {
  __typename?: 'Session';
  _count?: Maybe<SessionCount>;
  expires: Scalars['DateTime'];
  id: Scalars['Int'];
  sessionToken: Scalars['String'];
  userId: Scalars['Int'];
};

export type SessionCount = {
  __typename?: 'SessionCount';
  Mountain: Scalars['Int'];
  Route: Scalars['Int'];
};

export type SessionCreateManyUserInput = {
  expires: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Int']>;
  sessionToken: Scalars['String'];
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateNestedOneWithoutMountainInput = {
  connect?: InputMaybe<SessionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SessionCreateOrConnectWithoutMountainInput>;
  create?: InputMaybe<SessionCreateWithoutMountainInput>;
};

export type SessionCreateNestedOneWithoutRouteInput = {
  connect?: InputMaybe<SessionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SessionCreateOrConnectWithoutRouteInput>;
  create?: InputMaybe<SessionCreateWithoutRouteInput>;
};

export type SessionCreateOrConnectWithoutMountainInput = {
  create: SessionCreateWithoutMountainInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateOrConnectWithoutRouteInput = {
  create: SessionCreateWithoutRouteInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutMountainInput = {
  Route?: InputMaybe<RouteCreateNestedManyWithoutSessionInput>;
  expires: Scalars['DateTime'];
  sessionToken: Scalars['String'];
  user: UserCreateNestedOneWithoutSessionsInput;
};

export type SessionCreateWithoutRouteInput = {
  Mountain?: InputMaybe<MountainCreateNestedManyWithoutSessionInput>;
  expires: Scalars['DateTime'];
  sessionToken: Scalars['String'];
  user: UserCreateNestedOneWithoutSessionsInput;
};

export type SessionCreateWithoutUserInput = {
  Mountain?: InputMaybe<MountainCreateNestedManyWithoutSessionInput>;
  Route?: InputMaybe<RouteCreateNestedManyWithoutSessionInput>;
  expires: Scalars['DateTime'];
  sessionToken: Scalars['String'];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  Mountain?: InputMaybe<MountainOrderByRelationAggregateInput>;
  Route?: InputMaybe<RouteOrderByRelationAggregateInput>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionRelationFilter = {
  is?: InputMaybe<SessionWhereInput>;
  isNot?: InputMaybe<SessionWhereInput>;
};

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type SessionUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateOneWithoutMountainInput = {
  connect?: InputMaybe<SessionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SessionCreateOrConnectWithoutMountainInput>;
  create?: InputMaybe<SessionCreateWithoutMountainInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<SessionUpdateWithoutMountainInput>;
  upsert?: InputMaybe<SessionUpsertWithoutMountainInput>;
};

export type SessionUpdateOneWithoutRouteInput = {
  connect?: InputMaybe<SessionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SessionCreateOrConnectWithoutRouteInput>;
  create?: InputMaybe<SessionCreateWithoutRouteInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<SessionUpdateWithoutRouteInput>;
  upsert?: InputMaybe<SessionUpsertWithoutRouteInput>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutMountainInput = {
  Route?: InputMaybe<RouteUpdateManyWithoutSessionInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionsInput>;
};

export type SessionUpdateWithoutRouteInput = {
  Mountain?: InputMaybe<MountainUpdateManyWithoutSessionInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionsInput>;
};

export type SessionUpdateWithoutUserInput = {
  Mountain?: InputMaybe<MountainUpdateManyWithoutSessionInput>;
  Route?: InputMaybe<RouteUpdateManyWithoutSessionInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpsertWithoutMountainInput = {
  create: SessionCreateWithoutMountainInput;
  update: SessionUpdateWithoutMountainInput;
};

export type SessionUpsertWithoutRouteInput = {
  create: SessionCreateWithoutRouteInput;
  update: SessionUpdateWithoutRouteInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  Mountain?: InputMaybe<MountainListRelationFilter>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  Route?: InputMaybe<RouteListRelationFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type SessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  sessionToken?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  accounts: Scalars['Int'];
  mountains: Scalars['Int'];
  routes: Scalars['Int'];
  sessions: Scalars['Int'];
};

export type UserCreateNestedOneWithoutMountainsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMountainsInput>;
  create?: InputMaybe<UserCreateWithoutMountainsInput>;
};

export type UserCreateNestedOneWithoutRoutesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRoutesInput>;
  create?: InputMaybe<UserCreateWithoutRoutesInput>;
};

export type UserCreateNestedOneWithoutSessionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
};

export type UserCreateOrConnectWithoutMountainsInput = {
  create: UserCreateWithoutMountainsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRoutesInput = {
  create: UserCreateWithoutRoutesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutMountainsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  routes?: InputMaybe<RouteCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutRoutesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  mountains?: InputMaybe<MountainCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  mountains?: InputMaybe<MountainCreateNestedManyWithoutUserInput>;
  name?: InputMaybe<Scalars['String']>;
  routes?: InputMaybe<RouteCreateNestedManyWithoutUserInput>;
};

export type UserOrderByWithRelationInput = {
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  mountains?: InputMaybe<MountainOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  routes?: InputMaybe<RouteOrderByRelationAggregateInput>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateOneRequiredWithoutMountainsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMountainsInput>;
  create?: InputMaybe<UserCreateWithoutMountainsInput>;
  update?: InputMaybe<UserUpdateWithoutMountainsInput>;
  upsert?: InputMaybe<UserUpsertWithoutMountainsInput>;
};

export type UserUpdateOneRequiredWithoutRoutesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRoutesInput>;
  create?: InputMaybe<UserCreateWithoutRoutesInput>;
  update?: InputMaybe<UserUpdateWithoutRoutesInput>;
  upsert?: InputMaybe<UserUpsertWithoutRoutesInput>;
};

export type UserUpdateOneRequiredWithoutSessionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
  update?: InputMaybe<UserUpdateWithoutSessionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSessionsInput>;
};

export type UserUpdateWithoutMountainsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  routes?: InputMaybe<RouteUpdateManyWithoutUserInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutRoutesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mountains?: InputMaybe<MountainUpdateManyWithoutUserInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mountains?: InputMaybe<MountainUpdateManyWithoutUserInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  routes?: InputMaybe<RouteUpdateManyWithoutUserInput>;
};

export type UserUpsertWithoutMountainsInput = {
  create: UserCreateWithoutMountainsInput;
  update: UserUpdateWithoutMountainsInput;
};

export type UserUpsertWithoutRoutesInput = {
  create: UserCreateWithoutRoutesInput;
  update: UserUpdateWithoutRoutesInput;
};

export type UserUpsertWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  update: UserUpdateWithoutSessionsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  email?: InputMaybe<StringNullableFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  mountains?: InputMaybe<MountainListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  routes?: InputMaybe<RouteListRelationFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ListMountainsQueryFragment = { __typename?: 'MountainsPagination', data: Array<{ __typename?: 'Mountain', id: number, name: string, lat: number, lng: number }>, meta: { __typename?: 'Pagination', total: number, lastPage: number, currentPage: number, perPage: number, prev?: number | null, next?: number | null } };

export type ListMountainsQueryVariables = Exact<{
  where?: InputMaybe<MountainWhereInput>;
  orderBy?: InputMaybe<Array<MountainOrderByWithRelationInput> | MountainOrderByWithRelationInput>;
  perPage?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type ListMountainsQuery = { __typename?: 'Query', mountainsPagination: { __typename?: 'MountainsPagination', data: Array<{ __typename?: 'Mountain', id: number, name: string, lat: number, lng: number }>, meta: { __typename?: 'Pagination', total: number, lastPage: number, currentPage: number, perPage: number, prev?: number | null, next?: number | null } } };

export type EditedMountainQueryFragment = { __typename?: 'Mountain', id: number, name: string, lat: number, lng: number };

export type EditedMountainQueryVariables = Exact<{
  where: MountainWhereUniqueInput;
}>;


export type EditedMountainQuery = { __typename?: 'Query', mountain?: { __typename?: 'Mountain', id: number, name: string, lat: number, lng: number } | null };

export type UpdateMountainWithSessionMutationVariables = Exact<{
  where: MountainWhereUniqueInput;
  data: MountainUpdateWithSessionInput;
}>;


export type UpdateMountainWithSessionMutation = { __typename?: 'Mutation', updateMountainWithSession: { __typename?: 'Mountain', id: number, name: string, lat: number, lng: number } };

export type ShowMountainFragment = { __typename?: 'Mountain', id: number, userId: number, lat: number, lng: number, name: string, _count?: { __typename?: 'MountainCount', routes: number } | null, routes: Array<{ __typename?: 'Route', id: number, mountainId: number, name: string, time: number, latlngs: Array<{ __typename?: 'Latlng', id: number, lat: number, lng: number }> }> };

export type ShowMountainQueryVariables = Exact<{
  where: MountainWhereUniqueInput;
}>;


export type ShowMountainQuery = { __typename?: 'Query', mountain?: { __typename?: 'Mountain', id: number, userId: number, lat: number, lng: number, name: string, _count?: { __typename?: 'MountainCount', routes: number } | null, routes: Array<{ __typename?: 'Route', id: number, mountainId: number, name: string, time: number, latlngs: Array<{ __typename?: 'Latlng', id: number, lat: number, lng: number }> }> } | null };

export type NewRouteQueryFragment = { __typename?: 'Mountain', id: number, name: string, lat: number, lng: number };

export type NewRouteQueryVariables = Exact<{
  where: MountainWhereUniqueInput;
}>;


export type NewRouteQuery = { __typename?: 'Query', mountain?: { __typename?: 'Mountain', id: number, name: string, lat: number, lng: number } | null };

export type CreatedRouteFragment = { __typename?: 'Route', id: number, name: string };

export type CreateRouteWithSessionMutationVariables = Exact<{
  data: RouteCreateWithSessionInput;
}>;


export type CreateRouteWithSessionMutation = { __typename?: 'Mutation', createRouteWithSession: { __typename?: 'Route', id: number, name: string } };

export type UpdateRouteFragment = { __typename?: 'Route', id: number, name: string };

export type UpdateRouteWithSessionMutationVariables = Exact<{
  data: RouteUpdateWithSessionInput;
  where: RouteWhereUniqueInput;
}>;


export type UpdateRouteWithSessionMutation = { __typename?: 'Mutation', updateRouteWithSession: { __typename?: 'Route', id: number, name: string } };

export type EditedRouteQueryFragment = { __typename?: 'Route', id: number, name: string, time: number, userId: number, mountain: { __typename?: 'Mountain', name: string, lat: number, lng: number, id: number }, latlngs: Array<{ __typename?: 'Latlng', lat: number, lng: number }> };

export type EditedRouteQueryVariables = Exact<{
  where: RouteWhereUniqueInput;
}>;


export type EditedRouteQuery = { __typename?: 'Query', route?: { __typename?: 'Route', id: number, name: string, time: number, userId: number, mountain: { __typename?: 'Mountain', name: string, lat: number, lng: number, id: number }, latlngs: Array<{ __typename?: 'Latlng', lat: number, lng: number }> } | null };

export type ShowRouteQueryFragment = { __typename?: 'Route', userId: number, id: number, name: string, mountain: { __typename?: 'Mountain', lat: number, lng: number, id: number, name: string }, latlngs: Array<{ __typename?: 'Latlng', id: number, lat: number, lng: number }> };

export type ShowRouteQueryVariables = Exact<{
  where: RouteWhereUniqueInput;
}>;


export type ShowRouteQuery = { __typename?: 'Query', route?: { __typename?: 'Route', userId: number, id: number, name: string, mountain: { __typename?: 'Mountain', lat: number, lng: number, id: number, name: string }, latlngs: Array<{ __typename?: 'Latlng', id: number, lat: number, lng: number }> } | null };

export type DeleteRouteWithSessionMutationVariables = Exact<{
  where: RouteWhereUniqueInput;
  data: RouteDeleteWithSessionInput;
}>;


export type DeleteRouteWithSessionMutation = { __typename?: 'Mutation', deleteRouteWithSession: { __typename?: 'Route', id: number } };

export type CreatedMountainWithSessionFragment = { __typename?: 'Mountain', id: number, name: string, lat: number, lng: number };

export type CreateMountainWithSessionMutationVariables = Exact<{
  data: MountainCreateWithSessionInput;
}>;


export type CreateMountainWithSessionMutation = { __typename?: 'Mutation', createMountainWithSession: { __typename?: 'Mountain', id: number, name: string, lat: number, lng: number } };

export type MountainDetailFragment = { __typename?: 'Mountain', name: string };

export type MountainDeleteFragment = { __typename?: 'Mountain', id: number };

export type DeleteMountainWithSessionMutationVariables = Exact<{
  where: MountainWhereUniqueInput;
  data: MountainDeleteWithSessionInput;
}>;


export type DeleteMountainWithSessionMutation = { __typename?: 'Mutation', deleteMountainWithSession: { __typename?: 'Mountain', id: number } };

export type MountainListItemFragment = { __typename?: 'Mountain', id: number, name: string, lat: number, lng: number };

export type MountainMarkerFragment = { __typename?: 'Mountain', id: number, lat: number, lng: number };

export type RouteDetailFragment = { __typename?: 'Route', id: number, name: string, mountain: { __typename?: 'Mountain', id: number, name: string } };

export type RouteLatlngsTableFragment = { __typename?: 'Route', latlngs: Array<{ __typename?: 'Latlng', id: number, lat: number, lng: number }> };

export type RouteListItemFragment = { __typename?: 'Route', id: number, mountainId: number, name: string, time: number };

export type RoutePolylineFragment = { __typename?: 'Route', id: number, latlngs: Array<{ __typename?: 'Latlng', id: number, lat: number, lng: number }> };

export const MountainListItemFragmentDoc = gql`
    fragment MountainListItem on Mountain {
  id
  name
  lat
  lng
}
    `;
export const MountainMarkerFragmentDoc = gql`
    fragment MountainMarker on Mountain {
  id
  lat
  lng
}
    `;
export const ListMountainsQueryFragmentDoc = gql`
    fragment ListMountainsQuery on MountainsPagination {
  data {
    ...MountainListItem
    ...MountainMarker
  }
  meta {
    total
    lastPage
    currentPage
    perPage
    prev
    next
  }
}
    ${MountainListItemFragmentDoc}
${MountainMarkerFragmentDoc}`;
export const EditedMountainQueryFragmentDoc = gql`
    fragment EditedMountainQuery on Mountain {
  id
  name
  lat
  lng
}
    `;
export const MountainDetailFragmentDoc = gql`
    fragment MountainDetail on Mountain {
  name
}
    `;
export const RouteListItemFragmentDoc = gql`
    fragment RouteListItem on Route {
  id
  mountainId
  name
  time
}
    `;
export const RoutePolylineFragmentDoc = gql`
    fragment RoutePolyline on Route {
  id
  latlngs {
    id
    lat
    lng
  }
}
    `;
export const ShowMountainFragmentDoc = gql`
    fragment ShowMountain on Mountain {
  ...MountainDetail
  id
  userId
  lat
  lng
  _count {
    routes
  }
  routes {
    ...RouteListItem
    ...RoutePolyline
  }
}
    ${MountainDetailFragmentDoc}
${RouteListItemFragmentDoc}
${RoutePolylineFragmentDoc}`;
export const NewRouteQueryFragmentDoc = gql`
    fragment NewRouteQuery on Mountain {
  id
  name
  lat
  lng
}
    `;
export const CreatedRouteFragmentDoc = gql`
    fragment CreatedRoute on Route {
  id
  name
}
    `;
export const UpdateRouteFragmentDoc = gql`
    fragment UpdateRoute on Route {
  id
  name
}
    `;
export const EditedRouteQueryFragmentDoc = gql`
    fragment EditedRouteQuery on Route {
  id
  name
  time
  userId
  mountain {
    ...MountainMarker
    name
    lat
    lng
  }
  latlngs {
    lat
    lng
  }
}
    ${MountainMarkerFragmentDoc}`;
export const RouteDetailFragmentDoc = gql`
    fragment RouteDetail on Route {
  id
  name
  mountain {
    id
    name
  }
}
    `;
export const RouteLatlngsTableFragmentDoc = gql`
    fragment RouteLatlngsTable on Route {
  latlngs {
    id
    lat
    lng
  }
}
    `;
export const ShowRouteQueryFragmentDoc = gql`
    fragment ShowRouteQuery on Route {
  ...RouteDetail
  ...RouteLatlngsTable
  userId
  mountain {
    ...MountainMarker
    lat
    lng
  }
}
    ${RouteDetailFragmentDoc}
${RouteLatlngsTableFragmentDoc}
${MountainMarkerFragmentDoc}`;
export const CreatedMountainWithSessionFragmentDoc = gql`
    fragment CreatedMountainWithSession on Mountain {
  id
  name
  lat
  lng
}
    `;
export const MountainDeleteFragmentDoc = gql`
    fragment MountainDelete on Mountain {
  id
}
    `;
export const ListMountainsDocument = gql`
    query ListMountains($where: MountainWhereInput, $orderBy: [MountainOrderByWithRelationInput!], $perPage: Int, $page: Int) {
  mountainsPagination(
    where: $where
    orderBy: $orderBy
    perPage: $perPage
    page: $page
  ) {
    ...ListMountainsQuery
  }
}
    ${ListMountainsQueryFragmentDoc}`;

/**
 * __useListMountainsQuery__
 *
 * To run a query within a React component, call `useListMountainsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListMountainsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListMountainsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      perPage: // value for 'perPage'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useListMountainsQuery(baseOptions?: Apollo.QueryHookOptions<ListMountainsQuery, ListMountainsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListMountainsQuery, ListMountainsQueryVariables>(ListMountainsDocument, options);
      }
export function useListMountainsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListMountainsQuery, ListMountainsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListMountainsQuery, ListMountainsQueryVariables>(ListMountainsDocument, options);
        }
export type ListMountainsQueryHookResult = ReturnType<typeof useListMountainsQuery>;
export type ListMountainsLazyQueryHookResult = ReturnType<typeof useListMountainsLazyQuery>;
export type ListMountainsQueryResult = Apollo.QueryResult<ListMountainsQuery, ListMountainsQueryVariables>;
export const EditedMountainDocument = gql`
    query EditedMountain($where: MountainWhereUniqueInput!) {
  mountain(where: $where) {
    ...EditedMountainQuery
  }
}
    ${EditedMountainQueryFragmentDoc}`;

/**
 * __useEditedMountainQuery__
 *
 * To run a query within a React component, call `useEditedMountainQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditedMountainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditedMountainQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useEditedMountainQuery(baseOptions: Apollo.QueryHookOptions<EditedMountainQuery, EditedMountainQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EditedMountainQuery, EditedMountainQueryVariables>(EditedMountainDocument, options);
      }
export function useEditedMountainLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EditedMountainQuery, EditedMountainQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EditedMountainQuery, EditedMountainQueryVariables>(EditedMountainDocument, options);
        }
export type EditedMountainQueryHookResult = ReturnType<typeof useEditedMountainQuery>;
export type EditedMountainLazyQueryHookResult = ReturnType<typeof useEditedMountainLazyQuery>;
export type EditedMountainQueryResult = Apollo.QueryResult<EditedMountainQuery, EditedMountainQueryVariables>;
export const UpdateMountainWithSessionDocument = gql`
    mutation UpdateMountainWithSession($where: MountainWhereUniqueInput!, $data: MountainUpdateWithSessionInput!) {
  updateMountainWithSession(where: $where, data: $data) {
    ...EditedMountainQuery
  }
}
    ${EditedMountainQueryFragmentDoc}`;
export type UpdateMountainWithSessionMutationFn = Apollo.MutationFunction<UpdateMountainWithSessionMutation, UpdateMountainWithSessionMutationVariables>;

/**
 * __useUpdateMountainWithSessionMutation__
 *
 * To run a mutation, you first call `useUpdateMountainWithSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMountainWithSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMountainWithSessionMutation, { data, loading, error }] = useUpdateMountainWithSessionMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateMountainWithSessionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMountainWithSessionMutation, UpdateMountainWithSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMountainWithSessionMutation, UpdateMountainWithSessionMutationVariables>(UpdateMountainWithSessionDocument, options);
      }
export type UpdateMountainWithSessionMutationHookResult = ReturnType<typeof useUpdateMountainWithSessionMutation>;
export type UpdateMountainWithSessionMutationResult = Apollo.MutationResult<UpdateMountainWithSessionMutation>;
export type UpdateMountainWithSessionMutationOptions = Apollo.BaseMutationOptions<UpdateMountainWithSessionMutation, UpdateMountainWithSessionMutationVariables>;
export const ShowMountainDocument = gql`
    query ShowMountain($where: MountainWhereUniqueInput!) {
  mountain(where: $where) {
    ...ShowMountain
  }
}
    ${ShowMountainFragmentDoc}`;

/**
 * __useShowMountainQuery__
 *
 * To run a query within a React component, call `useShowMountainQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowMountainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowMountainQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useShowMountainQuery(baseOptions: Apollo.QueryHookOptions<ShowMountainQuery, ShowMountainQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShowMountainQuery, ShowMountainQueryVariables>(ShowMountainDocument, options);
      }
export function useShowMountainLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowMountainQuery, ShowMountainQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShowMountainQuery, ShowMountainQueryVariables>(ShowMountainDocument, options);
        }
export type ShowMountainQueryHookResult = ReturnType<typeof useShowMountainQuery>;
export type ShowMountainLazyQueryHookResult = ReturnType<typeof useShowMountainLazyQuery>;
export type ShowMountainQueryResult = Apollo.QueryResult<ShowMountainQuery, ShowMountainQueryVariables>;
export const NewRouteDocument = gql`
    query NewRoute($where: MountainWhereUniqueInput!) {
  mountain(where: $where) {
    ...NewRouteQuery
  }
}
    ${NewRouteQueryFragmentDoc}`;

/**
 * __useNewRouteQuery__
 *
 * To run a query within a React component, call `useNewRouteQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewRouteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewRouteQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useNewRouteQuery(baseOptions: Apollo.QueryHookOptions<NewRouteQuery, NewRouteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewRouteQuery, NewRouteQueryVariables>(NewRouteDocument, options);
      }
export function useNewRouteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewRouteQuery, NewRouteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewRouteQuery, NewRouteQueryVariables>(NewRouteDocument, options);
        }
export type NewRouteQueryHookResult = ReturnType<typeof useNewRouteQuery>;
export type NewRouteLazyQueryHookResult = ReturnType<typeof useNewRouteLazyQuery>;
export type NewRouteQueryResult = Apollo.QueryResult<NewRouteQuery, NewRouteQueryVariables>;
export const CreateRouteWithSessionDocument = gql`
    mutation CreateRouteWithSession($data: RouteCreateWithSessionInput!) {
  createRouteWithSession(data: $data) {
    ...CreatedRoute
  }
}
    ${CreatedRouteFragmentDoc}`;
export type CreateRouteWithSessionMutationFn = Apollo.MutationFunction<CreateRouteWithSessionMutation, CreateRouteWithSessionMutationVariables>;

/**
 * __useCreateRouteWithSessionMutation__
 *
 * To run a mutation, you first call `useCreateRouteWithSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRouteWithSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRouteWithSessionMutation, { data, loading, error }] = useCreateRouteWithSessionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateRouteWithSessionMutation(baseOptions?: Apollo.MutationHookOptions<CreateRouteWithSessionMutation, CreateRouteWithSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRouteWithSessionMutation, CreateRouteWithSessionMutationVariables>(CreateRouteWithSessionDocument, options);
      }
export type CreateRouteWithSessionMutationHookResult = ReturnType<typeof useCreateRouteWithSessionMutation>;
export type CreateRouteWithSessionMutationResult = Apollo.MutationResult<CreateRouteWithSessionMutation>;
export type CreateRouteWithSessionMutationOptions = Apollo.BaseMutationOptions<CreateRouteWithSessionMutation, CreateRouteWithSessionMutationVariables>;
export const UpdateRouteWithSessionDocument = gql`
    mutation UpdateRouteWithSession($data: RouteUpdateWithSessionInput!, $where: RouteWhereUniqueInput!) {
  updateRouteWithSession(data: $data, where: $where) {
    ...UpdateRoute
  }
}
    ${UpdateRouteFragmentDoc}`;
export type UpdateRouteWithSessionMutationFn = Apollo.MutationFunction<UpdateRouteWithSessionMutation, UpdateRouteWithSessionMutationVariables>;

/**
 * __useUpdateRouteWithSessionMutation__
 *
 * To run a mutation, you first call `useUpdateRouteWithSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRouteWithSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRouteWithSessionMutation, { data, loading, error }] = useUpdateRouteWithSessionMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateRouteWithSessionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRouteWithSessionMutation, UpdateRouteWithSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRouteWithSessionMutation, UpdateRouteWithSessionMutationVariables>(UpdateRouteWithSessionDocument, options);
      }
export type UpdateRouteWithSessionMutationHookResult = ReturnType<typeof useUpdateRouteWithSessionMutation>;
export type UpdateRouteWithSessionMutationResult = Apollo.MutationResult<UpdateRouteWithSessionMutation>;
export type UpdateRouteWithSessionMutationOptions = Apollo.BaseMutationOptions<UpdateRouteWithSessionMutation, UpdateRouteWithSessionMutationVariables>;
export const EditedRouteDocument = gql`
    query EditedRoute($where: RouteWhereUniqueInput!) {
  route(where: $where) {
    ...EditedRouteQuery
  }
}
    ${EditedRouteQueryFragmentDoc}`;

/**
 * __useEditedRouteQuery__
 *
 * To run a query within a React component, call `useEditedRouteQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditedRouteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditedRouteQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useEditedRouteQuery(baseOptions: Apollo.QueryHookOptions<EditedRouteQuery, EditedRouteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EditedRouteQuery, EditedRouteQueryVariables>(EditedRouteDocument, options);
      }
export function useEditedRouteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EditedRouteQuery, EditedRouteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EditedRouteQuery, EditedRouteQueryVariables>(EditedRouteDocument, options);
        }
export type EditedRouteQueryHookResult = ReturnType<typeof useEditedRouteQuery>;
export type EditedRouteLazyQueryHookResult = ReturnType<typeof useEditedRouteLazyQuery>;
export type EditedRouteQueryResult = Apollo.QueryResult<EditedRouteQuery, EditedRouteQueryVariables>;
export const ShowRouteDocument = gql`
    query ShowRoute($where: RouteWhereUniqueInput!) {
  route(where: $where) {
    ...ShowRouteQuery
  }
}
    ${ShowRouteQueryFragmentDoc}`;

/**
 * __useShowRouteQuery__
 *
 * To run a query within a React component, call `useShowRouteQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowRouteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowRouteQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useShowRouteQuery(baseOptions: Apollo.QueryHookOptions<ShowRouteQuery, ShowRouteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShowRouteQuery, ShowRouteQueryVariables>(ShowRouteDocument, options);
      }
export function useShowRouteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowRouteQuery, ShowRouteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShowRouteQuery, ShowRouteQueryVariables>(ShowRouteDocument, options);
        }
export type ShowRouteQueryHookResult = ReturnType<typeof useShowRouteQuery>;
export type ShowRouteLazyQueryHookResult = ReturnType<typeof useShowRouteLazyQuery>;
export type ShowRouteQueryResult = Apollo.QueryResult<ShowRouteQuery, ShowRouteQueryVariables>;
export const DeleteRouteWithSessionDocument = gql`
    mutation DeleteRouteWithSession($where: RouteWhereUniqueInput!, $data: RouteDeleteWithSessionInput!) {
  deleteRouteWithSession(where: $where, data: $data) {
    id
  }
}
    `;
export type DeleteRouteWithSessionMutationFn = Apollo.MutationFunction<DeleteRouteWithSessionMutation, DeleteRouteWithSessionMutationVariables>;

/**
 * __useDeleteRouteWithSessionMutation__
 *
 * To run a mutation, you first call `useDeleteRouteWithSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRouteWithSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRouteWithSessionMutation, { data, loading, error }] = useDeleteRouteWithSessionMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteRouteWithSessionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRouteWithSessionMutation, DeleteRouteWithSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRouteWithSessionMutation, DeleteRouteWithSessionMutationVariables>(DeleteRouteWithSessionDocument, options);
      }
export type DeleteRouteWithSessionMutationHookResult = ReturnType<typeof useDeleteRouteWithSessionMutation>;
export type DeleteRouteWithSessionMutationResult = Apollo.MutationResult<DeleteRouteWithSessionMutation>;
export type DeleteRouteWithSessionMutationOptions = Apollo.BaseMutationOptions<DeleteRouteWithSessionMutation, DeleteRouteWithSessionMutationVariables>;
export const CreateMountainWithSessionDocument = gql`
    mutation CreateMountainWithSession($data: MountainCreateWithSessionInput!) {
  createMountainWithSession(data: $data) {
    ...CreatedMountainWithSession
  }
}
    ${CreatedMountainWithSessionFragmentDoc}`;
export type CreateMountainWithSessionMutationFn = Apollo.MutationFunction<CreateMountainWithSessionMutation, CreateMountainWithSessionMutationVariables>;

/**
 * __useCreateMountainWithSessionMutation__
 *
 * To run a mutation, you first call `useCreateMountainWithSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMountainWithSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMountainWithSessionMutation, { data, loading, error }] = useCreateMountainWithSessionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateMountainWithSessionMutation(baseOptions?: Apollo.MutationHookOptions<CreateMountainWithSessionMutation, CreateMountainWithSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMountainWithSessionMutation, CreateMountainWithSessionMutationVariables>(CreateMountainWithSessionDocument, options);
      }
export type CreateMountainWithSessionMutationHookResult = ReturnType<typeof useCreateMountainWithSessionMutation>;
export type CreateMountainWithSessionMutationResult = Apollo.MutationResult<CreateMountainWithSessionMutation>;
export type CreateMountainWithSessionMutationOptions = Apollo.BaseMutationOptions<CreateMountainWithSessionMutation, CreateMountainWithSessionMutationVariables>;
export const DeleteMountainWithSessionDocument = gql`
    mutation DeleteMountainWithSession($where: MountainWhereUniqueInput!, $data: MountainDeleteWithSessionInput!) {
  deleteMountainWithSession(where: $where, data: $data) {
    ...MountainDelete
  }
}
    ${MountainDeleteFragmentDoc}`;
export type DeleteMountainWithSessionMutationFn = Apollo.MutationFunction<DeleteMountainWithSessionMutation, DeleteMountainWithSessionMutationVariables>;

/**
 * __useDeleteMountainWithSessionMutation__
 *
 * To run a mutation, you first call `useDeleteMountainWithSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMountainWithSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMountainWithSessionMutation, { data, loading, error }] = useDeleteMountainWithSessionMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteMountainWithSessionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMountainWithSessionMutation, DeleteMountainWithSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMountainWithSessionMutation, DeleteMountainWithSessionMutationVariables>(DeleteMountainWithSessionDocument, options);
      }
export type DeleteMountainWithSessionMutationHookResult = ReturnType<typeof useDeleteMountainWithSessionMutation>;
export type DeleteMountainWithSessionMutationResult = Apollo.MutationResult<DeleteMountainWithSessionMutation>;
export type DeleteMountainWithSessionMutationOptions = Apollo.BaseMutationOptions<DeleteMountainWithSessionMutation, DeleteMountainWithSessionMutationVariables>;

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockListMountainsQuery((req, res, ctx) => {
 *   const { where, orderBy, perPage, page } = req.variables;
 *   return res(
 *     ctx.data({ mountainsPagination })
 *   )
 * })
 */
export const mockListMountainsQuery = (resolver: ResponseResolver<GraphQLRequest<ListMountainsQueryVariables>, GraphQLContext<ListMountainsQuery>, any>) =>
  graphql.query<ListMountainsQuery, ListMountainsQueryVariables>(
    'ListMountains',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockEditedMountainQuery((req, res, ctx) => {
 *   const { where } = req.variables;
 *   return res(
 *     ctx.data({ mountain })
 *   )
 * })
 */
export const mockEditedMountainQuery = (resolver: ResponseResolver<GraphQLRequest<EditedMountainQueryVariables>, GraphQLContext<EditedMountainQuery>, any>) =>
  graphql.query<EditedMountainQuery, EditedMountainQueryVariables>(
    'EditedMountain',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateMountainWithSessionMutation((req, res, ctx) => {
 *   const { where, data } = req.variables;
 *   return res(
 *     ctx.data({ updateMountainWithSession })
 *   )
 * })
 */
export const mockUpdateMountainWithSessionMutation = (resolver: ResponseResolver<GraphQLRequest<UpdateMountainWithSessionMutationVariables>, GraphQLContext<UpdateMountainWithSessionMutation>, any>) =>
  graphql.mutation<UpdateMountainWithSessionMutation, UpdateMountainWithSessionMutationVariables>(
    'UpdateMountainWithSession',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockShowMountainQuery((req, res, ctx) => {
 *   const { where } = req.variables;
 *   return res(
 *     ctx.data({ mountain })
 *   )
 * })
 */
export const mockShowMountainQuery = (resolver: ResponseResolver<GraphQLRequest<ShowMountainQueryVariables>, GraphQLContext<ShowMountainQuery>, any>) =>
  graphql.query<ShowMountainQuery, ShowMountainQueryVariables>(
    'ShowMountain',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockNewRouteQuery((req, res, ctx) => {
 *   const { where } = req.variables;
 *   return res(
 *     ctx.data({ mountain })
 *   )
 * })
 */
export const mockNewRouteQuery = (resolver: ResponseResolver<GraphQLRequest<NewRouteQueryVariables>, GraphQLContext<NewRouteQuery>, any>) =>
  graphql.query<NewRouteQuery, NewRouteQueryVariables>(
    'NewRoute',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateRouteWithSessionMutation((req, res, ctx) => {
 *   const { data } = req.variables;
 *   return res(
 *     ctx.data({ createRouteWithSession })
 *   )
 * })
 */
export const mockCreateRouteWithSessionMutation = (resolver: ResponseResolver<GraphQLRequest<CreateRouteWithSessionMutationVariables>, GraphQLContext<CreateRouteWithSessionMutation>, any>) =>
  graphql.mutation<CreateRouteWithSessionMutation, CreateRouteWithSessionMutationVariables>(
    'CreateRouteWithSession',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateRouteWithSessionMutation((req, res, ctx) => {
 *   const { data, where } = req.variables;
 *   return res(
 *     ctx.data({ updateRouteWithSession })
 *   )
 * })
 */
export const mockUpdateRouteWithSessionMutation = (resolver: ResponseResolver<GraphQLRequest<UpdateRouteWithSessionMutationVariables>, GraphQLContext<UpdateRouteWithSessionMutation>, any>) =>
  graphql.mutation<UpdateRouteWithSessionMutation, UpdateRouteWithSessionMutationVariables>(
    'UpdateRouteWithSession',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockEditedRouteQuery((req, res, ctx) => {
 *   const { where } = req.variables;
 *   return res(
 *     ctx.data({ route })
 *   )
 * })
 */
export const mockEditedRouteQuery = (resolver: ResponseResolver<GraphQLRequest<EditedRouteQueryVariables>, GraphQLContext<EditedRouteQuery>, any>) =>
  graphql.query<EditedRouteQuery, EditedRouteQueryVariables>(
    'EditedRoute',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockShowRouteQuery((req, res, ctx) => {
 *   const { where } = req.variables;
 *   return res(
 *     ctx.data({ route })
 *   )
 * })
 */
export const mockShowRouteQuery = (resolver: ResponseResolver<GraphQLRequest<ShowRouteQueryVariables>, GraphQLContext<ShowRouteQuery>, any>) =>
  graphql.query<ShowRouteQuery, ShowRouteQueryVariables>(
    'ShowRoute',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteRouteWithSessionMutation((req, res, ctx) => {
 *   const { where, data } = req.variables;
 *   return res(
 *     ctx.data({ deleteRouteWithSession })
 *   )
 * })
 */
export const mockDeleteRouteWithSessionMutation = (resolver: ResponseResolver<GraphQLRequest<DeleteRouteWithSessionMutationVariables>, GraphQLContext<DeleteRouteWithSessionMutation>, any>) =>
  graphql.mutation<DeleteRouteWithSessionMutation, DeleteRouteWithSessionMutationVariables>(
    'DeleteRouteWithSession',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateMountainWithSessionMutation((req, res, ctx) => {
 *   const { data } = req.variables;
 *   return res(
 *     ctx.data({ createMountainWithSession })
 *   )
 * })
 */
export const mockCreateMountainWithSessionMutation = (resolver: ResponseResolver<GraphQLRequest<CreateMountainWithSessionMutationVariables>, GraphQLContext<CreateMountainWithSessionMutation>, any>) =>
  graphql.mutation<CreateMountainWithSessionMutation, CreateMountainWithSessionMutationVariables>(
    'CreateMountainWithSession',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteMountainWithSessionMutation((req, res, ctx) => {
 *   const { where, data } = req.variables;
 *   return res(
 *     ctx.data({ deleteMountainWithSession })
 *   )
 * })
 */
export const mockDeleteMountainWithSessionMutation = (resolver: ResponseResolver<GraphQLRequest<DeleteMountainWithSessionMutationVariables>, GraphQLContext<DeleteMountainWithSessionMutation>, any>) =>
  graphql.mutation<DeleteMountainWithSessionMutation, DeleteMountainWithSessionMutationVariables>(
    'DeleteMountainWithSession',
    resolver
  )

const factories: Record<string, Function> = {}
export interface AffectedRowsOutputOptions {
  __typename?: 'AffectedRowsOutput'
  count?: AffectedRowsOutput['count']
}

export function newAffectedRowsOutput(
  options: AffectedRowsOutputOptions = {},
  cache: Record<string, any> = {},
): AffectedRowsOutput {
  const o = (
    options.__typename ? options : (cache['AffectedRowsOutput'] = {})
  ) as AffectedRowsOutput
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'AffectedRowsOutput'
  o.count = options.count ?? 0
  return o
}

factories['AffectedRowsOutput'] = newAffectedRowsOutput

function maybeNewAffectedRowsOutput(
  value: AffectedRowsOutputOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): AffectedRowsOutput {
  if (value === undefined) {
    return isSet ? undefined : cache['AffectedRowsOutput'] || newAffectedRowsOutput({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newAffectedRowsOutput(value, cache)
  }
}

function maybeNewOrNullAffectedRowsOutput(
  value: AffectedRowsOutputOptions | undefined | null,
  cache: Record<string, any>,
): AffectedRowsOutput | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newAffectedRowsOutput(value, cache)
  }
}
export interface AggregateMountainOptions {
  __typename?: 'AggregateMountain'
  _avg?: MountainAvgAggregateOptions | null
  _count?: MountainCountAggregateOptions | null
  _max?: MountainMaxAggregateOptions | null
  _min?: MountainMinAggregateOptions | null
  _sum?: MountainSumAggregateOptions | null
}

export function newAggregateMountain(
  options: AggregateMountainOptions = {},
  cache: Record<string, any> = {},
): AggregateMountain {
  const o = (options.__typename ? options : (cache['AggregateMountain'] = {})) as AggregateMountain
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'AggregateMountain'
  o._avg = maybeNewOrNullMountainAvgAggregate(options._avg, cache)
  o._count = maybeNewOrNullMountainCountAggregate(options._count, cache)
  o._max = maybeNewOrNullMountainMaxAggregate(options._max, cache)
  o._min = maybeNewOrNullMountainMinAggregate(options._min, cache)
  o._sum = maybeNewOrNullMountainSumAggregate(options._sum, cache)
  return o
}

factories['AggregateMountain'] = newAggregateMountain

function maybeNewAggregateMountain(
  value: AggregateMountainOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): AggregateMountain {
  if (value === undefined) {
    return isSet ? undefined : cache['AggregateMountain'] || newAggregateMountain({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newAggregateMountain(value, cache)
  }
}

function maybeNewOrNullAggregateMountain(
  value: AggregateMountainOptions | undefined | null,
  cache: Record<string, any>,
): AggregateMountain | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newAggregateMountain(value, cache)
  }
}
export interface AggregateRouteOptions {
  __typename?: 'AggregateRoute'
  _avg?: RouteAvgAggregateOptions | null
  _count?: RouteCountAggregateOptions | null
  _max?: RouteMaxAggregateOptions | null
  _min?: RouteMinAggregateOptions | null
  _sum?: RouteSumAggregateOptions | null
}

export function newAggregateRoute(
  options: AggregateRouteOptions = {},
  cache: Record<string, any> = {},
): AggregateRoute {
  const o = (options.__typename ? options : (cache['AggregateRoute'] = {})) as AggregateRoute
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'AggregateRoute'
  o._avg = maybeNewOrNullRouteAvgAggregate(options._avg, cache)
  o._count = maybeNewOrNullRouteCountAggregate(options._count, cache)
  o._max = maybeNewOrNullRouteMaxAggregate(options._max, cache)
  o._min = maybeNewOrNullRouteMinAggregate(options._min, cache)
  o._sum = maybeNewOrNullRouteSumAggregate(options._sum, cache)
  return o
}

factories['AggregateRoute'] = newAggregateRoute

function maybeNewAggregateRoute(
  value: AggregateRouteOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): AggregateRoute {
  if (value === undefined) {
    return isSet ? undefined : cache['AggregateRoute'] || newAggregateRoute({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newAggregateRoute(value, cache)
  }
}

function maybeNewOrNullAggregateRoute(
  value: AggregateRouteOptions | undefined | null,
  cache: Record<string, any>,
): AggregateRoute | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newAggregateRoute(value, cache)
  }
}
export interface LatlngOptions {
  __typename?: 'Latlng'
  createdAt?: Latlng['createdAt']
  id?: Latlng['id']
  lat?: Latlng['lat']
  lng?: Latlng['lng']
  routeId?: Latlng['routeId']
  updatedAt?: Latlng['updatedAt']
}

export function newLatlng(options: LatlngOptions = {}, cache: Record<string, any> = {}): Latlng {
  const o = (options.__typename ? options : (cache['Latlng'] = {})) as Latlng
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'Latlng'
  o.createdAt = options.createdAt ?? ('' as any)
  o.id = options.id ?? 0
  o.lat = options.lat ?? ('' as any)
  o.lng = options.lng ?? ('' as any)
  o.routeId = options.routeId ?? 0
  o.updatedAt = options.updatedAt ?? ('' as any)
  return o
}

factories['Latlng'] = newLatlng

function maybeNewLatlng(
  value: LatlngOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): Latlng {
  if (value === undefined) {
    return isSet ? undefined : cache['Latlng'] || newLatlng({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newLatlng(value, cache)
  }
}

function maybeNewOrNullLatlng(
  value: LatlngOptions | undefined | null,
  cache: Record<string, any>,
): Latlng | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newLatlng(value, cache)
  }
}
export interface MountainOptions {
  __typename?: 'Mountain'
  Session?: SessionOptions | null
  _count?: MountainCountOptions | null
  createdAt?: Mountain['createdAt']
  id?: Mountain['id']
  lat?: Mountain['lat']
  lng?: Mountain['lng']
  name?: Mountain['name']
  routes?: Array<RouteOptions>
  sessionId?: Mountain['sessionId']
  updatedAt?: Mountain['updatedAt']
  user?: UserOptions
  userId?: Mountain['userId']
}

export function newMountain(
  options: MountainOptions = {},
  cache: Record<string, any> = {},
): Mountain {
  const o = (options.__typename ? options : (cache['Mountain'] = {})) as Mountain
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'Mountain'
  o.Session = maybeNewOrNullSession(options.Session, cache)
  o._count = maybeNewOrNullMountainCount(options._count, cache)
  o.createdAt = options.createdAt ?? ('' as any)
  o.id = options.id ?? 0
  o.lat = options.lat ?? ('' as any)
  o.lng = options.lng ?? ('' as any)
  o.name = options.name ?? 'name'
  o.routes = (options.routes ?? []).map((i) =>
    maybeNewRoute(i, cache, options.hasOwnProperty('routes')),
  )
  o.sessionId = options.sessionId ?? null
  o.updatedAt = options.updatedAt ?? ('' as any)
  o.user = maybeNewUser(options.user, cache, options.hasOwnProperty('user'))
  o.userId = options.userId ?? 0
  return o
}

factories['Mountain'] = newMountain

function maybeNewMountain(
  value: MountainOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): Mountain {
  if (value === undefined) {
    return isSet ? undefined : cache['Mountain'] || newMountain({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountain(value, cache)
  }
}

function maybeNewOrNullMountain(
  value: MountainOptions | undefined | null,
  cache: Record<string, any>,
): Mountain | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountain(value, cache)
  }
}
export interface MountainAvgAggregateOptions {
  __typename?: 'MountainAvgAggregate'
  id?: MountainAvgAggregate['id']
  lat?: MountainAvgAggregate['lat']
  lng?: MountainAvgAggregate['lng']
  sessionId?: MountainAvgAggregate['sessionId']
  userId?: MountainAvgAggregate['userId']
}

export function newMountainAvgAggregate(
  options: MountainAvgAggregateOptions = {},
  cache: Record<string, any> = {},
): MountainAvgAggregate {
  const o = (
    options.__typename ? options : (cache['MountainAvgAggregate'] = {})
  ) as MountainAvgAggregate
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'MountainAvgAggregate'
  o.id = options.id ?? null
  o.lat = options.lat ?? null
  o.lng = options.lng ?? null
  o.sessionId = options.sessionId ?? null
  o.userId = options.userId ?? null
  return o
}

factories['MountainAvgAggregate'] = newMountainAvgAggregate

function maybeNewMountainAvgAggregate(
  value: MountainAvgAggregateOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): MountainAvgAggregate {
  if (value === undefined) {
    return isSet ? undefined : cache['MountainAvgAggregate'] || newMountainAvgAggregate({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountainAvgAggregate(value, cache)
  }
}

function maybeNewOrNullMountainAvgAggregate(
  value: MountainAvgAggregateOptions | undefined | null,
  cache: Record<string, any>,
): MountainAvgAggregate | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountainAvgAggregate(value, cache)
  }
}
export interface MountainCountOptions {
  __typename?: 'MountainCount'
  routes?: MountainCount['routes']
}

export function newMountainCount(
  options: MountainCountOptions = {},
  cache: Record<string, any> = {},
): MountainCount {
  const o = (options.__typename ? options : (cache['MountainCount'] = {})) as MountainCount
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'MountainCount'
  o.routes = options.routes ?? 0
  return o
}

factories['MountainCount'] = newMountainCount

function maybeNewMountainCount(
  value: MountainCountOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): MountainCount {
  if (value === undefined) {
    return isSet ? undefined : cache['MountainCount'] || newMountainCount({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountainCount(value, cache)
  }
}

function maybeNewOrNullMountainCount(
  value: MountainCountOptions | undefined | null,
  cache: Record<string, any>,
): MountainCount | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountainCount(value, cache)
  }
}
export interface MountainCountAggregateOptions {
  __typename?: 'MountainCountAggregate'
  _all?: MountainCountAggregate['_all']
  createdAt?: MountainCountAggregate['createdAt']
  id?: MountainCountAggregate['id']
  lat?: MountainCountAggregate['lat']
  lng?: MountainCountAggregate['lng']
  name?: MountainCountAggregate['name']
  sessionId?: MountainCountAggregate['sessionId']
  updatedAt?: MountainCountAggregate['updatedAt']
  userId?: MountainCountAggregate['userId']
}

export function newMountainCountAggregate(
  options: MountainCountAggregateOptions = {},
  cache: Record<string, any> = {},
): MountainCountAggregate {
  const o = (
    options.__typename ? options : (cache['MountainCountAggregate'] = {})
  ) as MountainCountAggregate
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'MountainCountAggregate'
  o._all = options._all ?? 0
  o.createdAt = options.createdAt ?? 0
  o.id = options.id ?? 0
  o.lat = options.lat ?? 0
  o.lng = options.lng ?? 0
  o.name = options.name ?? 0
  o.sessionId = options.sessionId ?? 0
  o.updatedAt = options.updatedAt ?? 0
  o.userId = options.userId ?? 0
  return o
}

factories['MountainCountAggregate'] = newMountainCountAggregate

function maybeNewMountainCountAggregate(
  value: MountainCountAggregateOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): MountainCountAggregate {
  if (value === undefined) {
    return isSet
      ? undefined
      : cache['MountainCountAggregate'] || newMountainCountAggregate({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountainCountAggregate(value, cache)
  }
}

function maybeNewOrNullMountainCountAggregate(
  value: MountainCountAggregateOptions | undefined | null,
  cache: Record<string, any>,
): MountainCountAggregate | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountainCountAggregate(value, cache)
  }
}
export interface MountainGroupByOptions {
  __typename?: 'MountainGroupBy'
  _avg?: MountainAvgAggregateOptions | null
  _count?: MountainCountAggregateOptions | null
  _max?: MountainMaxAggregateOptions | null
  _min?: MountainMinAggregateOptions | null
  _sum?: MountainSumAggregateOptions | null
  createdAt?: MountainGroupBy['createdAt']
  id?: MountainGroupBy['id']
  lat?: MountainGroupBy['lat']
  lng?: MountainGroupBy['lng']
  name?: MountainGroupBy['name']
  sessionId?: MountainGroupBy['sessionId']
  updatedAt?: MountainGroupBy['updatedAt']
  userId?: MountainGroupBy['userId']
}

export function newMountainGroupBy(
  options: MountainGroupByOptions = {},
  cache: Record<string, any> = {},
): MountainGroupBy {
  const o = (options.__typename ? options : (cache['MountainGroupBy'] = {})) as MountainGroupBy
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'MountainGroupBy'
  o._avg = maybeNewOrNullMountainAvgAggregate(options._avg, cache)
  o._count = maybeNewOrNullMountainCountAggregate(options._count, cache)
  o._max = maybeNewOrNullMountainMaxAggregate(options._max, cache)
  o._min = maybeNewOrNullMountainMinAggregate(options._min, cache)
  o._sum = maybeNewOrNullMountainSumAggregate(options._sum, cache)
  o.createdAt = options.createdAt ?? ('' as any)
  o.id = options.id ?? 0
  o.lat = options.lat ?? ('' as any)
  o.lng = options.lng ?? ('' as any)
  o.name = options.name ?? 'name'
  o.sessionId = options.sessionId ?? null
  o.updatedAt = options.updatedAt ?? ('' as any)
  o.userId = options.userId ?? 0
  return o
}

factories['MountainGroupBy'] = newMountainGroupBy

function maybeNewMountainGroupBy(
  value: MountainGroupByOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): MountainGroupBy {
  if (value === undefined) {
    return isSet ? undefined : cache['MountainGroupBy'] || newMountainGroupBy({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountainGroupBy(value, cache)
  }
}

function maybeNewOrNullMountainGroupBy(
  value: MountainGroupByOptions | undefined | null,
  cache: Record<string, any>,
): MountainGroupBy | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountainGroupBy(value, cache)
  }
}
export interface MountainMaxAggregateOptions {
  __typename?: 'MountainMaxAggregate'
  createdAt?: MountainMaxAggregate['createdAt']
  id?: MountainMaxAggregate['id']
  lat?: MountainMaxAggregate['lat']
  lng?: MountainMaxAggregate['lng']
  name?: MountainMaxAggregate['name']
  sessionId?: MountainMaxAggregate['sessionId']
  updatedAt?: MountainMaxAggregate['updatedAt']
  userId?: MountainMaxAggregate['userId']
}

export function newMountainMaxAggregate(
  options: MountainMaxAggregateOptions = {},
  cache: Record<string, any> = {},
): MountainMaxAggregate {
  const o = (
    options.__typename ? options : (cache['MountainMaxAggregate'] = {})
  ) as MountainMaxAggregate
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'MountainMaxAggregate'
  o.createdAt = options.createdAt ?? null
  o.id = options.id ?? null
  o.lat = options.lat ?? null
  o.lng = options.lng ?? null
  o.name = options.name ?? null
  o.sessionId = options.sessionId ?? null
  o.updatedAt = options.updatedAt ?? null
  o.userId = options.userId ?? null
  return o
}

factories['MountainMaxAggregate'] = newMountainMaxAggregate

function maybeNewMountainMaxAggregate(
  value: MountainMaxAggregateOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): MountainMaxAggregate {
  if (value === undefined) {
    return isSet ? undefined : cache['MountainMaxAggregate'] || newMountainMaxAggregate({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountainMaxAggregate(value, cache)
  }
}

function maybeNewOrNullMountainMaxAggregate(
  value: MountainMaxAggregateOptions | undefined | null,
  cache: Record<string, any>,
): MountainMaxAggregate | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountainMaxAggregate(value, cache)
  }
}
export interface MountainMinAggregateOptions {
  __typename?: 'MountainMinAggregate'
  createdAt?: MountainMinAggregate['createdAt']
  id?: MountainMinAggregate['id']
  lat?: MountainMinAggregate['lat']
  lng?: MountainMinAggregate['lng']
  name?: MountainMinAggregate['name']
  sessionId?: MountainMinAggregate['sessionId']
  updatedAt?: MountainMinAggregate['updatedAt']
  userId?: MountainMinAggregate['userId']
}

export function newMountainMinAggregate(
  options: MountainMinAggregateOptions = {},
  cache: Record<string, any> = {},
): MountainMinAggregate {
  const o = (
    options.__typename ? options : (cache['MountainMinAggregate'] = {})
  ) as MountainMinAggregate
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'MountainMinAggregate'
  o.createdAt = options.createdAt ?? null
  o.id = options.id ?? null
  o.lat = options.lat ?? null
  o.lng = options.lng ?? null
  o.name = options.name ?? null
  o.sessionId = options.sessionId ?? null
  o.updatedAt = options.updatedAt ?? null
  o.userId = options.userId ?? null
  return o
}

factories['MountainMinAggregate'] = newMountainMinAggregate

function maybeNewMountainMinAggregate(
  value: MountainMinAggregateOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): MountainMinAggregate {
  if (value === undefined) {
    return isSet ? undefined : cache['MountainMinAggregate'] || newMountainMinAggregate({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountainMinAggregate(value, cache)
  }
}

function maybeNewOrNullMountainMinAggregate(
  value: MountainMinAggregateOptions | undefined | null,
  cache: Record<string, any>,
): MountainMinAggregate | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountainMinAggregate(value, cache)
  }
}
export interface MountainSumAggregateOptions {
  __typename?: 'MountainSumAggregate'
  id?: MountainSumAggregate['id']
  lat?: MountainSumAggregate['lat']
  lng?: MountainSumAggregate['lng']
  sessionId?: MountainSumAggregate['sessionId']
  userId?: MountainSumAggregate['userId']
}

export function newMountainSumAggregate(
  options: MountainSumAggregateOptions = {},
  cache: Record<string, any> = {},
): MountainSumAggregate {
  const o = (
    options.__typename ? options : (cache['MountainSumAggregate'] = {})
  ) as MountainSumAggregate
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'MountainSumAggregate'
  o.id = options.id ?? null
  o.lat = options.lat ?? null
  o.lng = options.lng ?? null
  o.sessionId = options.sessionId ?? null
  o.userId = options.userId ?? null
  return o
}

factories['MountainSumAggregate'] = newMountainSumAggregate

function maybeNewMountainSumAggregate(
  value: MountainSumAggregateOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): MountainSumAggregate {
  if (value === undefined) {
    return isSet ? undefined : cache['MountainSumAggregate'] || newMountainSumAggregate({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountainSumAggregate(value, cache)
  }
}

function maybeNewOrNullMountainSumAggregate(
  value: MountainSumAggregateOptions | undefined | null,
  cache: Record<string, any>,
): MountainSumAggregate | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountainSumAggregate(value, cache)
  }
}
export interface MountainsPaginationOptions {
  __typename?: 'MountainsPagination'
  data?: Array<MountainOptions>
  meta?: PaginationOptions
}

export function newMountainsPagination(
  options: MountainsPaginationOptions = {},
  cache: Record<string, any> = {},
): MountainsPagination {
  const o = (
    options.__typename ? options : (cache['MountainsPagination'] = {})
  ) as MountainsPagination
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'MountainsPagination'
  o.data = (options.data ?? []).map((i) =>
    maybeNewMountain(i, cache, options.hasOwnProperty('data')),
  )
  o.meta = maybeNewPagination(options.meta, cache, options.hasOwnProperty('meta'))
  return o
}

factories['MountainsPagination'] = newMountainsPagination

function maybeNewMountainsPagination(
  value: MountainsPaginationOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): MountainsPagination {
  if (value === undefined) {
    return isSet ? undefined : cache['MountainsPagination'] || newMountainsPagination({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountainsPagination(value, cache)
  }
}

function maybeNewOrNullMountainsPagination(
  value: MountainsPaginationOptions | undefined | null,
  cache: Record<string, any>,
): MountainsPagination | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newMountainsPagination(value, cache)
  }
}
export interface PaginationOptions {
  __typename?: 'Pagination'
  currentPage?: Pagination['currentPage']
  lastPage?: Pagination['lastPage']
  next?: Pagination['next']
  perPage?: Pagination['perPage']
  prev?: Pagination['prev']
  total?: Pagination['total']
}

export function newPagination(
  options: PaginationOptions = {},
  cache: Record<string, any> = {},
): Pagination {
  const o = (options.__typename ? options : (cache['Pagination'] = {})) as Pagination
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'Pagination'
  o.currentPage = options.currentPage ?? 0
  o.lastPage = options.lastPage ?? 0
  o.next = options.next ?? null
  o.perPage = options.perPage ?? 0
  o.prev = options.prev ?? null
  o.total = options.total ?? 0
  return o
}

factories['Pagination'] = newPagination

function maybeNewPagination(
  value: PaginationOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): Pagination {
  if (value === undefined) {
    return isSet ? undefined : cache['Pagination'] || newPagination({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newPagination(value, cache)
  }
}

function maybeNewOrNullPagination(
  value: PaginationOptions | undefined | null,
  cache: Record<string, any>,
): Pagination | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newPagination(value, cache)
  }
}
export interface RouteOptions {
  __typename?: 'Route'
  Session?: SessionOptions | null
  _count?: RouteCountOptions | null
  createdAt?: Route['createdAt']
  id?: Route['id']
  latlngs?: Array<LatlngOptions>
  mountain?: MountainOptions
  mountainId?: Route['mountainId']
  name?: Route['name']
  sessionId?: Route['sessionId']
  time?: Route['time']
  updatedAt?: Route['updatedAt']
  user?: UserOptions
  userId?: Route['userId']
}

export function newRoute(options: RouteOptions = {}, cache: Record<string, any> = {}): Route {
  const o = (options.__typename ? options : (cache['Route'] = {})) as Route
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'Route'
  o.Session = maybeNewOrNullSession(options.Session, cache)
  o._count = maybeNewOrNullRouteCount(options._count, cache)
  o.createdAt = options.createdAt ?? ('' as any)
  o.id = options.id ?? 0
  o.latlngs = (options.latlngs ?? []).map((i) =>
    maybeNewLatlng(i, cache, options.hasOwnProperty('latlngs')),
  )
  o.mountain = maybeNewMountain(options.mountain, cache, options.hasOwnProperty('mountain'))
  o.mountainId = options.mountainId ?? 0
  o.name = options.name ?? 'name'
  o.sessionId = options.sessionId ?? null
  o.time = options.time ?? 0
  o.updatedAt = options.updatedAt ?? ('' as any)
  o.user = maybeNewUser(options.user, cache, options.hasOwnProperty('user'))
  o.userId = options.userId ?? 0
  return o
}

factories['Route'] = newRoute

function maybeNewRoute(
  value: RouteOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): Route {
  if (value === undefined) {
    return isSet ? undefined : cache['Route'] || newRoute({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newRoute(value, cache)
  }
}

function maybeNewOrNullRoute(
  value: RouteOptions | undefined | null,
  cache: Record<string, any>,
): Route | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newRoute(value, cache)
  }
}
export interface RouteAvgAggregateOptions {
  __typename?: 'RouteAvgAggregate'
  id?: RouteAvgAggregate['id']
  mountainId?: RouteAvgAggregate['mountainId']
  sessionId?: RouteAvgAggregate['sessionId']
  time?: RouteAvgAggregate['time']
  userId?: RouteAvgAggregate['userId']
}

export function newRouteAvgAggregate(
  options: RouteAvgAggregateOptions = {},
  cache: Record<string, any> = {},
): RouteAvgAggregate {
  const o = (options.__typename ? options : (cache['RouteAvgAggregate'] = {})) as RouteAvgAggregate
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'RouteAvgAggregate'
  o.id = options.id ?? null
  o.mountainId = options.mountainId ?? null
  o.sessionId = options.sessionId ?? null
  o.time = options.time ?? null
  o.userId = options.userId ?? null
  return o
}

factories['RouteAvgAggregate'] = newRouteAvgAggregate

function maybeNewRouteAvgAggregate(
  value: RouteAvgAggregateOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): RouteAvgAggregate {
  if (value === undefined) {
    return isSet ? undefined : cache['RouteAvgAggregate'] || newRouteAvgAggregate({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newRouteAvgAggregate(value, cache)
  }
}

function maybeNewOrNullRouteAvgAggregate(
  value: RouteAvgAggregateOptions | undefined | null,
  cache: Record<string, any>,
): RouteAvgAggregate | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newRouteAvgAggregate(value, cache)
  }
}
export interface RouteCountOptions {
  __typename?: 'RouteCount'
  latlngs?: RouteCount['latlngs']
}

export function newRouteCount(
  options: RouteCountOptions = {},
  cache: Record<string, any> = {},
): RouteCount {
  const o = (options.__typename ? options : (cache['RouteCount'] = {})) as RouteCount
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'RouteCount'
  o.latlngs = options.latlngs ?? 0
  return o
}

factories['RouteCount'] = newRouteCount

function maybeNewRouteCount(
  value: RouteCountOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): RouteCount {
  if (value === undefined) {
    return isSet ? undefined : cache['RouteCount'] || newRouteCount({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newRouteCount(value, cache)
  }
}

function maybeNewOrNullRouteCount(
  value: RouteCountOptions | undefined | null,
  cache: Record<string, any>,
): RouteCount | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newRouteCount(value, cache)
  }
}
export interface RouteCountAggregateOptions {
  __typename?: 'RouteCountAggregate'
  _all?: RouteCountAggregate['_all']
  createdAt?: RouteCountAggregate['createdAt']
  id?: RouteCountAggregate['id']
  mountainId?: RouteCountAggregate['mountainId']
  name?: RouteCountAggregate['name']
  sessionId?: RouteCountAggregate['sessionId']
  time?: RouteCountAggregate['time']
  updatedAt?: RouteCountAggregate['updatedAt']
  userId?: RouteCountAggregate['userId']
}

export function newRouteCountAggregate(
  options: RouteCountAggregateOptions = {},
  cache: Record<string, any> = {},
): RouteCountAggregate {
  const o = (
    options.__typename ? options : (cache['RouteCountAggregate'] = {})
  ) as RouteCountAggregate
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'RouteCountAggregate'
  o._all = options._all ?? 0
  o.createdAt = options.createdAt ?? 0
  o.id = options.id ?? 0
  o.mountainId = options.mountainId ?? 0
  o.name = options.name ?? 0
  o.sessionId = options.sessionId ?? 0
  o.time = options.time ?? 0
  o.updatedAt = options.updatedAt ?? 0
  o.userId = options.userId ?? 0
  return o
}

factories['RouteCountAggregate'] = newRouteCountAggregate

function maybeNewRouteCountAggregate(
  value: RouteCountAggregateOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): RouteCountAggregate {
  if (value === undefined) {
    return isSet ? undefined : cache['RouteCountAggregate'] || newRouteCountAggregate({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newRouteCountAggregate(value, cache)
  }
}

function maybeNewOrNullRouteCountAggregate(
  value: RouteCountAggregateOptions | undefined | null,
  cache: Record<string, any>,
): RouteCountAggregate | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newRouteCountAggregate(value, cache)
  }
}
export interface RouteGroupByOptions {
  __typename?: 'RouteGroupBy'
  _avg?: RouteAvgAggregateOptions | null
  _count?: RouteCountAggregateOptions | null
  _max?: RouteMaxAggregateOptions | null
  _min?: RouteMinAggregateOptions | null
  _sum?: RouteSumAggregateOptions | null
  createdAt?: RouteGroupBy['createdAt']
  id?: RouteGroupBy['id']
  mountainId?: RouteGroupBy['mountainId']
  name?: RouteGroupBy['name']
  sessionId?: RouteGroupBy['sessionId']
  time?: RouteGroupBy['time']
  updatedAt?: RouteGroupBy['updatedAt']
  userId?: RouteGroupBy['userId']
}

export function newRouteGroupBy(
  options: RouteGroupByOptions = {},
  cache: Record<string, any> = {},
): RouteGroupBy {
  const o = (options.__typename ? options : (cache['RouteGroupBy'] = {})) as RouteGroupBy
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'RouteGroupBy'
  o._avg = maybeNewOrNullRouteAvgAggregate(options._avg, cache)
  o._count = maybeNewOrNullRouteCountAggregate(options._count, cache)
  o._max = maybeNewOrNullRouteMaxAggregate(options._max, cache)
  o._min = maybeNewOrNullRouteMinAggregate(options._min, cache)
  o._sum = maybeNewOrNullRouteSumAggregate(options._sum, cache)
  o.createdAt = options.createdAt ?? ('' as any)
  o.id = options.id ?? 0
  o.mountainId = options.mountainId ?? 0
  o.name = options.name ?? 'name'
  o.sessionId = options.sessionId ?? null
  o.time = options.time ?? 0
  o.updatedAt = options.updatedAt ?? ('' as any)
  o.userId = options.userId ?? 0
  return o
}

factories['RouteGroupBy'] = newRouteGroupBy

function maybeNewRouteGroupBy(
  value: RouteGroupByOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): RouteGroupBy {
  if (value === undefined) {
    return isSet ? undefined : cache['RouteGroupBy'] || newRouteGroupBy({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newRouteGroupBy(value, cache)
  }
}

function maybeNewOrNullRouteGroupBy(
  value: RouteGroupByOptions | undefined | null,
  cache: Record<string, any>,
): RouteGroupBy | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newRouteGroupBy(value, cache)
  }
}
export interface RouteMaxAggregateOptions {
  __typename?: 'RouteMaxAggregate'
  createdAt?: RouteMaxAggregate['createdAt']
  id?: RouteMaxAggregate['id']
  mountainId?: RouteMaxAggregate['mountainId']
  name?: RouteMaxAggregate['name']
  sessionId?: RouteMaxAggregate['sessionId']
  time?: RouteMaxAggregate['time']
  updatedAt?: RouteMaxAggregate['updatedAt']
  userId?: RouteMaxAggregate['userId']
}

export function newRouteMaxAggregate(
  options: RouteMaxAggregateOptions = {},
  cache: Record<string, any> = {},
): RouteMaxAggregate {
  const o = (options.__typename ? options : (cache['RouteMaxAggregate'] = {})) as RouteMaxAggregate
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'RouteMaxAggregate'
  o.createdAt = options.createdAt ?? null
  o.id = options.id ?? null
  o.mountainId = options.mountainId ?? null
  o.name = options.name ?? null
  o.sessionId = options.sessionId ?? null
  o.time = options.time ?? null
  o.updatedAt = options.updatedAt ?? null
  o.userId = options.userId ?? null
  return o
}

factories['RouteMaxAggregate'] = newRouteMaxAggregate

function maybeNewRouteMaxAggregate(
  value: RouteMaxAggregateOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): RouteMaxAggregate {
  if (value === undefined) {
    return isSet ? undefined : cache['RouteMaxAggregate'] || newRouteMaxAggregate({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newRouteMaxAggregate(value, cache)
  }
}

function maybeNewOrNullRouteMaxAggregate(
  value: RouteMaxAggregateOptions | undefined | null,
  cache: Record<string, any>,
): RouteMaxAggregate | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newRouteMaxAggregate(value, cache)
  }
}
export interface RouteMinAggregateOptions {
  __typename?: 'RouteMinAggregate'
  createdAt?: RouteMinAggregate['createdAt']
  id?: RouteMinAggregate['id']
  mountainId?: RouteMinAggregate['mountainId']
  name?: RouteMinAggregate['name']
  sessionId?: RouteMinAggregate['sessionId']
  time?: RouteMinAggregate['time']
  updatedAt?: RouteMinAggregate['updatedAt']
  userId?: RouteMinAggregate['userId']
}

export function newRouteMinAggregate(
  options: RouteMinAggregateOptions = {},
  cache: Record<string, any> = {},
): RouteMinAggregate {
  const o = (options.__typename ? options : (cache['RouteMinAggregate'] = {})) as RouteMinAggregate
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'RouteMinAggregate'
  o.createdAt = options.createdAt ?? null
  o.id = options.id ?? null
  o.mountainId = options.mountainId ?? null
  o.name = options.name ?? null
  o.sessionId = options.sessionId ?? null
  o.time = options.time ?? null
  o.updatedAt = options.updatedAt ?? null
  o.userId = options.userId ?? null
  return o
}

factories['RouteMinAggregate'] = newRouteMinAggregate

function maybeNewRouteMinAggregate(
  value: RouteMinAggregateOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): RouteMinAggregate {
  if (value === undefined) {
    return isSet ? undefined : cache['RouteMinAggregate'] || newRouteMinAggregate({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newRouteMinAggregate(value, cache)
  }
}

function maybeNewOrNullRouteMinAggregate(
  value: RouteMinAggregateOptions | undefined | null,
  cache: Record<string, any>,
): RouteMinAggregate | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newRouteMinAggregate(value, cache)
  }
}
export interface RouteSumAggregateOptions {
  __typename?: 'RouteSumAggregate'
  id?: RouteSumAggregate['id']
  mountainId?: RouteSumAggregate['mountainId']
  sessionId?: RouteSumAggregate['sessionId']
  time?: RouteSumAggregate['time']
  userId?: RouteSumAggregate['userId']
}

export function newRouteSumAggregate(
  options: RouteSumAggregateOptions = {},
  cache: Record<string, any> = {},
): RouteSumAggregate {
  const o = (options.__typename ? options : (cache['RouteSumAggregate'] = {})) as RouteSumAggregate
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'RouteSumAggregate'
  o.id = options.id ?? null
  o.mountainId = options.mountainId ?? null
  o.sessionId = options.sessionId ?? null
  o.time = options.time ?? null
  o.userId = options.userId ?? null
  return o
}

factories['RouteSumAggregate'] = newRouteSumAggregate

function maybeNewRouteSumAggregate(
  value: RouteSumAggregateOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): RouteSumAggregate {
  if (value === undefined) {
    return isSet ? undefined : cache['RouteSumAggregate'] || newRouteSumAggregate({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newRouteSumAggregate(value, cache)
  }
}

function maybeNewOrNullRouteSumAggregate(
  value: RouteSumAggregateOptions | undefined | null,
  cache: Record<string, any>,
): RouteSumAggregate | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newRouteSumAggregate(value, cache)
  }
}
export interface SessionOptions {
  __typename?: 'Session'
  _count?: SessionCountOptions | null
  expires?: Session['expires']
  id?: Session['id']
  sessionToken?: Session['sessionToken']
  userId?: Session['userId']
}

export function newSession(options: SessionOptions = {}, cache: Record<string, any> = {}): Session {
  const o = (options.__typename ? options : (cache['Session'] = {})) as Session
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'Session'
  o._count = maybeNewOrNullSessionCount(options._count, cache)
  o.expires = options.expires ?? ('' as any)
  o.id = options.id ?? 0
  o.sessionToken = options.sessionToken ?? 'sessionToken'
  o.userId = options.userId ?? 0
  return o
}

factories['Session'] = newSession

function maybeNewSession(
  value: SessionOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): Session {
  if (value === undefined) {
    return isSet ? undefined : cache['Session'] || newSession({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newSession(value, cache)
  }
}

function maybeNewOrNullSession(
  value: SessionOptions | undefined | null,
  cache: Record<string, any>,
): Session | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newSession(value, cache)
  }
}
export interface SessionCountOptions {
  __typename?: 'SessionCount'
  Mountain?: SessionCount['Mountain']
  Route?: SessionCount['Route']
}

export function newSessionCount(
  options: SessionCountOptions = {},
  cache: Record<string, any> = {},
): SessionCount {
  const o = (options.__typename ? options : (cache['SessionCount'] = {})) as SessionCount
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'SessionCount'
  o.Mountain = options.Mountain ?? 0
  o.Route = options.Route ?? 0
  return o
}

factories['SessionCount'] = newSessionCount

function maybeNewSessionCount(
  value: SessionCountOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): SessionCount {
  if (value === undefined) {
    return isSet ? undefined : cache['SessionCount'] || newSessionCount({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newSessionCount(value, cache)
  }
}

function maybeNewOrNullSessionCount(
  value: SessionCountOptions | undefined | null,
  cache: Record<string, any>,
): SessionCount | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newSessionCount(value, cache)
  }
}
export interface UserOptions {
  __typename?: 'User'
  _count?: UserCountOptions | null
  email?: User['email']
  emailVerified?: User['emailVerified']
  id?: User['id']
  image?: User['image']
  name?: User['name']
}

export function newUser(options: UserOptions = {}, cache: Record<string, any> = {}): User {
  const o = (options.__typename ? options : (cache['User'] = {})) as User
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'User'
  o._count = maybeNewOrNullUserCount(options._count, cache)
  o.email = options.email ?? null
  o.emailVerified = options.emailVerified ?? null
  o.id = options.id ?? 0
  o.image = options.image ?? null
  o.name = options.name ?? null
  return o
}

factories['User'] = newUser

function maybeNewUser(
  value: UserOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): User {
  if (value === undefined) {
    return isSet ? undefined : cache['User'] || newUser({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newUser(value, cache)
  }
}

function maybeNewOrNullUser(
  value: UserOptions | undefined | null,
  cache: Record<string, any>,
): User | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newUser(value, cache)
  }
}
export interface UserCountOptions {
  __typename?: 'UserCount'
  accounts?: UserCount['accounts']
  mountains?: UserCount['mountains']
  routes?: UserCount['routes']
  sessions?: UserCount['sessions']
}

export function newUserCount(
  options: UserCountOptions = {},
  cache: Record<string, any> = {},
): UserCount {
  const o = (options.__typename ? options : (cache['UserCount'] = {})) as UserCount
  ;(cache.all ??= new Set()).add(o)
  o.__typename = 'UserCount'
  o.accounts = options.accounts ?? 0
  o.mountains = options.mountains ?? 0
  o.routes = options.routes ?? 0
  o.sessions = options.sessions ?? 0
  return o
}

factories['UserCount'] = newUserCount

function maybeNewUserCount(
  value: UserCountOptions | undefined,
  cache: Record<string, any>,
  isSet: boolean = false,
): UserCount {
  if (value === undefined) {
    return isSet ? undefined : cache['UserCount'] || newUserCount({}, cache)
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newUserCount(value, cache)
  }
}

function maybeNewOrNullUserCount(
  value: UserCountOptions | undefined | null,
  cache: Record<string, any>,
): UserCount | null {
  if (!value) {
    return null
  } else if (value.__typename) {
    return cache.all?.has(value) ? value : factories[value.__typename](value, cache)
  } else {
    return newUserCount(value, cache)
  }
}
const taggedIds: Record<string, string> = {}
let nextFactoryIds: Record<string, number> = {}

export function resetFactoryIds() {
  nextFactoryIds = {}
}

function nextFactoryId(objectName: string): string {
  const nextId = nextFactoryIds[objectName] || 1
  nextFactoryIds[objectName] = nextId + 1
  const tag = taggedIds[objectName] ?? objectName.replace(/[a-z]/g, '').toLowerCase()
  return tag + ':' + nextId
}

interface ListMountainsDataOptions {
  mountainsPagination?: MountainsPaginationOptions
}

export function newListMountainsData(data: ListMountainsDataOptions) {
  return {
    __typename: 'Query' as const,
    mountainsPagination: maybeNewMountainsPagination(data['mountainsPagination'] || undefined, {}),
  }
}

export function newListMountainsResponse(
  variables: ListMountainsQueryVariables,
  data: ListMountainsDataOptions | Error,
): MockedResponse<ListMountainsQueryVariables, ListMountainsQuery> {
  return {
    request: { query: ListMountainsDocument, variables },
    // TODO Remove the any by having interfaces have a __typename that pacifies mutation type unions
    result: { data: data instanceof Error ? undefined : (newListMountainsData(data) as any) },
    error: data instanceof Error ? data : undefined,
  }
}
interface EditedMountainDataOptions {
  mountain?: MountainOptions | null
}

export function newEditedMountainData(data: EditedMountainDataOptions) {
  return {
    __typename: 'Query' as const,
    mountain: maybeNewOrNullMountain(data['mountain'] || undefined, {}),
  }
}

export function newEditedMountainResponse(
  variables: EditedMountainQueryVariables,
  data: EditedMountainDataOptions | Error,
): MockedResponse<EditedMountainQueryVariables, EditedMountainQuery> {
  return {
    request: { query: EditedMountainDocument, variables },
    // TODO Remove the any by having interfaces have a __typename that pacifies mutation type unions
    result: { data: data instanceof Error ? undefined : (newEditedMountainData(data) as any) },
    error: data instanceof Error ? data : undefined,
  }
}
interface UpdateMountainWithSessionDataOptions {
  updateMountainWithSession?: MountainOptions
}

export function newUpdateMountainWithSessionData(data: UpdateMountainWithSessionDataOptions) {
  return {
    __typename: 'Mutation' as const,
    updateMountainWithSession: maybeNewMountain(data['updateMountainWithSession'] || undefined, {}),
  }
}

export function newUpdateMountainWithSessionResponse(
  variables: UpdateMountainWithSessionMutationVariables,
  data: UpdateMountainWithSessionDataOptions | Error,
): MockedResponse<UpdateMountainWithSessionMutationVariables, UpdateMountainWithSessionMutation> {
  return {
    request: { query: UpdateMountainWithSessionDocument, variables },
    // TODO Remove the any by having interfaces have a __typename that pacifies mutation type unions
    result: {
      data: data instanceof Error ? undefined : (newUpdateMountainWithSessionData(data) as any),
    },
    error: data instanceof Error ? data : undefined,
  }
}
interface ShowMountainDataOptions {
  mountain?: MountainOptions | null
}

export function newShowMountainData(data: ShowMountainDataOptions) {
  return {
    __typename: 'Query' as const,
    mountain: maybeNewOrNullMountain(data['mountain'] || undefined, {}),
  }
}

export function newShowMountainResponse(
  variables: ShowMountainQueryVariables,
  data: ShowMountainDataOptions | Error,
): MockedResponse<ShowMountainQueryVariables, ShowMountainQuery> {
  return {
    request: { query: ShowMountainDocument, variables },
    // TODO Remove the any by having interfaces have a __typename that pacifies mutation type unions
    result: { data: data instanceof Error ? undefined : (newShowMountainData(data) as any) },
    error: data instanceof Error ? data : undefined,
  }
}
interface NewRouteDataOptions {
  mountain?: MountainOptions | null
}

export function newNewRouteData(data: NewRouteDataOptions) {
  return {
    __typename: 'Query' as const,
    mountain: maybeNewOrNullMountain(data['mountain'] || undefined, {}),
  }
}

export function newNewRouteResponse(
  variables: NewRouteQueryVariables,
  data: NewRouteDataOptions | Error,
): MockedResponse<NewRouteQueryVariables, NewRouteQuery> {
  return {
    request: { query: NewRouteDocument, variables },
    // TODO Remove the any by having interfaces have a __typename that pacifies mutation type unions
    result: { data: data instanceof Error ? undefined : (newNewRouteData(data) as any) },
    error: data instanceof Error ? data : undefined,
  }
}
interface CreateRouteWithSessionDataOptions {
  createRouteWithSession?: RouteOptions
}

export function newCreateRouteWithSessionData(data: CreateRouteWithSessionDataOptions) {
  return {
    __typename: 'Mutation' as const,
    createRouteWithSession: maybeNewRoute(data['createRouteWithSession'] || undefined, {}),
  }
}

export function newCreateRouteWithSessionResponse(
  variables: CreateRouteWithSessionMutationVariables,
  data: CreateRouteWithSessionDataOptions | Error,
): MockedResponse<CreateRouteWithSessionMutationVariables, CreateRouteWithSessionMutation> {
  return {
    request: { query: CreateRouteWithSessionDocument, variables },
    // TODO Remove the any by having interfaces have a __typename that pacifies mutation type unions
    result: {
      data: data instanceof Error ? undefined : (newCreateRouteWithSessionData(data) as any),
    },
    error: data instanceof Error ? data : undefined,
  }
}
interface UpdateRouteWithSessionDataOptions {
  updateRouteWithSession?: RouteOptions
}

export function newUpdateRouteWithSessionData(data: UpdateRouteWithSessionDataOptions) {
  return {
    __typename: 'Mutation' as const,
    updateRouteWithSession: maybeNewRoute(data['updateRouteWithSession'] || undefined, {}),
  }
}

export function newUpdateRouteWithSessionResponse(
  variables: UpdateRouteWithSessionMutationVariables,
  data: UpdateRouteWithSessionDataOptions | Error,
): MockedResponse<UpdateRouteWithSessionMutationVariables, UpdateRouteWithSessionMutation> {
  return {
    request: { query: UpdateRouteWithSessionDocument, variables },
    // TODO Remove the any by having interfaces have a __typename that pacifies mutation type unions
    result: {
      data: data instanceof Error ? undefined : (newUpdateRouteWithSessionData(data) as any),
    },
    error: data instanceof Error ? data : undefined,
  }
}
interface EditedRouteDataOptions {
  route?: RouteOptions | null
}

export function newEditedRouteData(data: EditedRouteDataOptions) {
  return {
    __typename: 'Query' as const,
    route: maybeNewOrNullRoute(data['route'] || undefined, {}),
  }
}

export function newEditedRouteResponse(
  variables: EditedRouteQueryVariables,
  data: EditedRouteDataOptions | Error,
): MockedResponse<EditedRouteQueryVariables, EditedRouteQuery> {
  return {
    request: { query: EditedRouteDocument, variables },
    // TODO Remove the any by having interfaces have a __typename that pacifies mutation type unions
    result: { data: data instanceof Error ? undefined : (newEditedRouteData(data) as any) },
    error: data instanceof Error ? data : undefined,
  }
}
interface ShowRouteDataOptions {
  route?: RouteOptions | null
}

export function newShowRouteData(data: ShowRouteDataOptions) {
  return {
    __typename: 'Query' as const,
    route: maybeNewOrNullRoute(data['route'] || undefined, {}),
  }
}

export function newShowRouteResponse(
  variables: ShowRouteQueryVariables,
  data: ShowRouteDataOptions | Error,
): MockedResponse<ShowRouteQueryVariables, ShowRouteQuery> {
  return {
    request: { query: ShowRouteDocument, variables },
    // TODO Remove the any by having interfaces have a __typename that pacifies mutation type unions
    result: { data: data instanceof Error ? undefined : (newShowRouteData(data) as any) },
    error: data instanceof Error ? data : undefined,
  }
}
interface DeleteRouteWithSessionDataOptions {
  deleteRouteWithSession?: RouteOptions
}

export function newDeleteRouteWithSessionData(data: DeleteRouteWithSessionDataOptions) {
  return {
    __typename: 'Mutation' as const,
    deleteRouteWithSession: maybeNewRoute(data['deleteRouteWithSession'] || undefined, {}),
  }
}

export function newDeleteRouteWithSessionResponse(
  variables: DeleteRouteWithSessionMutationVariables,
  data: DeleteRouteWithSessionDataOptions | Error,
): MockedResponse<DeleteRouteWithSessionMutationVariables, DeleteRouteWithSessionMutation> {
  return {
    request: { query: DeleteRouteWithSessionDocument, variables },
    // TODO Remove the any by having interfaces have a __typename that pacifies mutation type unions
    result: {
      data: data instanceof Error ? undefined : (newDeleteRouteWithSessionData(data) as any),
    },
    error: data instanceof Error ? data : undefined,
  }
}
interface CreateMountainWithSessionDataOptions {
  createMountainWithSession?: MountainOptions
}

export function newCreateMountainWithSessionData(data: CreateMountainWithSessionDataOptions) {
  return {
    __typename: 'Mutation' as const,
    createMountainWithSession: maybeNewMountain(data['createMountainWithSession'] || undefined, {}),
  }
}

export function newCreateMountainWithSessionResponse(
  variables: CreateMountainWithSessionMutationVariables,
  data: CreateMountainWithSessionDataOptions | Error,
): MockedResponse<CreateMountainWithSessionMutationVariables, CreateMountainWithSessionMutation> {
  return {
    request: { query: CreateMountainWithSessionDocument, variables },
    // TODO Remove the any by having interfaces have a __typename that pacifies mutation type unions
    result: {
      data: data instanceof Error ? undefined : (newCreateMountainWithSessionData(data) as any),
    },
    error: data instanceof Error ? data : undefined,
  }
}
interface DeleteMountainWithSessionDataOptions {
  deleteMountainWithSession?: MountainOptions
}

export function newDeleteMountainWithSessionData(data: DeleteMountainWithSessionDataOptions) {
  return {
    __typename: 'Mutation' as const,
    deleteMountainWithSession: maybeNewMountain(data['deleteMountainWithSession'] || undefined, {}),
  }
}

export function newDeleteMountainWithSessionResponse(
  variables: DeleteMountainWithSessionMutationVariables,
  data: DeleteMountainWithSessionDataOptions | Error,
): MockedResponse<DeleteMountainWithSessionMutationVariables, DeleteMountainWithSessionMutation> {
  return {
    request: { query: DeleteMountainWithSessionDocument, variables },
    // TODO Remove the any by having interfaces have a __typename that pacifies mutation type unions
    result: {
      data: data instanceof Error ? undefined : (newDeleteMountainWithSessionData(data) as any),
    },
    error: data instanceof Error ? data : undefined,
  }
}

  export type MockedResponse<V, Q> = {
    request: {
      query: any;
      variables?: V;
    };
    result: {
      data?: Q;
    };
    error?: Error;
    // Note this only works if using Homebound's better-apollo-mocked-provider
    requestedCount?: number;
  };
