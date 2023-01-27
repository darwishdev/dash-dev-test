// Copyright 2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-connect-web v0.4.0 with parameter "target=ts"
// @generated from file retail/v1/service_retail.proto (package retail.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateUserRequest, CreateUserResponse } from "./rpc_create_user_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { LoginUserRequest, LoginUserResponse } from "./rpc_login_user_pb.js";
import { ListUsersRequest, ListUsersResponse } from "./rpc_list_users_pb.js";

/**
 * @generated from service retail.v1.MlnRetail
 */
export const MlnRetail = {
  typeName: "retail.v1.MlnRetail",
  methods: {
    /**
     * @generated from rpc retail.v1.MlnRetail.CreateUser
     */
    createUser: {
      name: "CreateUser",
      I: CreateUserRequest,
      O: CreateUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc retail.v1.MlnRetail.LoginUser
     */
    loginUser: {
      name: "LoginUser",
      I: LoginUserRequest,
      O: LoginUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc retail.v1.MlnRetail.ListUsers
     */
    listUsers: {
      name: "ListUsers",
      I: ListUsersRequest,
      O: ListUsersResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
