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

// @generated by protoc-gen-es v0.5.0 with parameter "target=ts"
// @generated from file retail/v1/rpc_list_users.proto (package retail.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { User } from "./user_pb.js";

/**
 * Name:     util.RandomUser(),
 * 		Phone:    util.RandomPhone(),
 * 		Email:    util.RandomEmail(),
 * 		Password: hashedPassword,
 *
 * @generated from message retail.v1.ListUsersRequest
 */
export class ListUsersRequest extends Message<ListUsersRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string email = 2;
   */
  email = "";

  constructor(data?: PartialMessage<ListUsersRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "retail.v1.ListUsersRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListUsersRequest {
    return new ListUsersRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListUsersRequest {
    return new ListUsersRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListUsersRequest {
    return new ListUsersRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListUsersRequest | PlainMessage<ListUsersRequest> | undefined, b: ListUsersRequest | PlainMessage<ListUsersRequest> | undefined): boolean {
    return proto3.util.equals(ListUsersRequest, a, b);
  }
}

/**
 * @generated from message retail.v1.ListUsersResponse
 */
export class ListUsersResponse extends Message<ListUsersResponse> {
  /**
   * @generated from field: repeated retail.v1.User users = 1;
   */
  users: User[] = [];

  constructor(data?: PartialMessage<ListUsersResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "retail.v1.ListUsersResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "users", kind: "message", T: User, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListUsersResponse {
    return new ListUsersResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListUsersResponse {
    return new ListUsersResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListUsersResponse {
    return new ListUsersResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListUsersResponse | PlainMessage<ListUsersResponse> | undefined, b: ListUsersResponse | PlainMessage<ListUsersResponse> | undefined): boolean {
    return proto3.util.equals(ListUsersResponse, a, b);
  }
}

