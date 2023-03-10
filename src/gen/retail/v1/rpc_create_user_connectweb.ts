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
// @generated from file retail/v1/rpc_create_user.proto (package retail.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateUserRequest, CreateUserResponse } from "./rpc_create_user_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service retail.v1.GreetService
 */
export const GreetService = {
  typeName: "retail.v1.GreetService",
  methods: {
    /**
     * @generated from rpc retail.v1.GreetService.CreateUser
     */
    createUser: {
      name: "CreateUser",
      I: CreateUserRequest,
      O: CreateUserResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

