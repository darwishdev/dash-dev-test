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
// @generated from file retail/v1/rpc_login_user.proto (package retail.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { User } from "./user_pb.js";

/**
 * Name:     util.RandomUser(),
 * 		Phone:    util.RandomPhone(),
 * 		Email:    util.RandomEmail(),
 * 		Password: hashedPassword,
 *
 * @generated from message retail.v1.LoginUserRequest
 */
export class LoginUserRequest extends Message<LoginUserRequest> {
  /**
   * @generated from field: string email = 1;
   */
  email = "";

  /**
   * @generated from field: string password = 2;
   */
  password = "";

  constructor(data?: PartialMessage<LoginUserRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "retail.v1.LoginUserRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginUserRequest {
    return new LoginUserRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginUserRequest {
    return new LoginUserRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginUserRequest {
    return new LoginUserRequest().fromJsonString(jsonString, options);
  }

  static equals(a: LoginUserRequest | PlainMessage<LoginUserRequest> | undefined, b: LoginUserRequest | PlainMessage<LoginUserRequest> | undefined): boolean {
    return proto3.util.equals(LoginUserRequest, a, b);
  }
}

/**
 * @generated from message retail.v1.LoginUserResponse
 */
export class LoginUserResponse extends Message<LoginUserResponse> {
  /**
   * @generated from field: retail.v1.User user = 1;
   */
  user?: User;

  /**
   * @generated from field: string session_id = 2;
   */
  sessionId = "";

  /**
   * @generated from field: string access_token = 3;
   */
  accessToken = "";

  /**
   * @generated from field: string refresh_token = 4;
   */
  refreshToken = "";

  /**
   * @generated from field: google.protobuf.Timestamp access_token_expires_at = 5;
   */
  accessTokenExpiresAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp refresh_token_expires_at = 6;
   */
  refreshTokenExpiresAt?: Timestamp;

  constructor(data?: PartialMessage<LoginUserResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "retail.v1.LoginUserResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "user", kind: "message", T: User },
    { no: 2, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "refresh_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "access_token_expires_at", kind: "message", T: Timestamp },
    { no: 6, name: "refresh_token_expires_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginUserResponse {
    return new LoginUserResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginUserResponse {
    return new LoginUserResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginUserResponse {
    return new LoginUserResponse().fromJsonString(jsonString, options);
  }

  static equals(a: LoginUserResponse | PlainMessage<LoginUserResponse> | undefined, b: LoginUserResponse | PlainMessage<LoginUserResponse> | undefined): boolean {
    return proto3.util.equals(LoginUserResponse, a, b);
  }
}

