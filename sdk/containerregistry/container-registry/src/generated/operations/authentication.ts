/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Authentication } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GeneratedClientContext } from "../generatedClientContext";
import {
  PostContentSchemaGrantType,
  AuthenticationExchangeAadAccessTokenForAcrRefreshTokenOptionalParams,
  AuthenticationExchangeAadAccessTokenForAcrRefreshTokenResponse,
  TokenGrantType,
  AuthenticationExchangeAcrRefreshTokenForAcrAccessTokenOptionalParams,
  AuthenticationExchangeAcrRefreshTokenForAcrAccessTokenResponse
} from "../models";

/** Class containing Authentication operations. */
export class AuthenticationImpl implements Authentication {
  private readonly client: GeneratedClientContext;

  /**
   * Initialize a new instance of the class Authentication class.
   * @param client Reference to the service client
   */
  constructor(client: GeneratedClientContext) {
    this.client = client;
  }

  /**
   * Exchange AAD tokens for an ACR refresh Token
   * @param grantType Can take a value of access_token_refresh_token, or access_token, or refresh_token
   * @param service Indicates the name of your Azure container registry.
   * @param options The options parameters.
   */
  exchangeAadAccessTokenForAcrRefreshToken(
    grantType: PostContentSchemaGrantType,
    service: string,
    options?: AuthenticationExchangeAadAccessTokenForAcrRefreshTokenOptionalParams
  ): Promise<AuthenticationExchangeAadAccessTokenForAcrRefreshTokenResponse> {
    return this.client.sendOperationRequest(
      { grantType, service, options },
      exchangeAadAccessTokenForAcrRefreshTokenOperationSpec
    );
  }

  /**
   * Exchange ACR Refresh token for an ACR Access Token
   * @param service Indicates the name of your Azure container registry.
   * @param scope Which is expected to be a valid scope, and can be specified more than once for multiple
   *              scope requests. You obtained this from the Www-Authenticate response header from the challenge.
   * @param refreshToken Must be a valid ACR refresh token
   * @param grantType Grant type is expected to be refresh_token
   * @param options The options parameters.
   */
  exchangeAcrRefreshTokenForAcrAccessToken(
    service: string,
    scope: string,
    refreshToken: string,
    grantType: TokenGrantType,
    options?: AuthenticationExchangeAcrRefreshTokenForAcrAccessTokenOptionalParams
  ): Promise<AuthenticationExchangeAcrRefreshTokenForAcrAccessTokenResponse> {
    return this.client.sendOperationRequest(
      { service, scope, refreshToken, grantType, options },
      exchangeAcrRefreshTokenForAcrAccessTokenOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const exchangeAadAccessTokenForAcrRefreshTokenOperationSpec: coreClient.OperationSpec = {
  path: "/oauth2/exchange",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AcrRefreshToken
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  formDataParameters: [
    Parameters.grantType,
    Parameters.service,
    Parameters.tenant,
    Parameters.refreshToken,
    Parameters.accessToken
  ],
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.url],
  headerParameters: [Parameters.contentType3, Parameters.accept4],
  serializer
};
const exchangeAcrRefreshTokenForAcrAccessTokenOperationSpec: coreClient.OperationSpec = {
  path: "/oauth2/token",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AcrAccessToken
    },
    default: {
      bodyMapper: Mappers.AcrErrors
    }
  },
  formDataParameters: [
    Parameters.service,
    Parameters.scope,
    Parameters.refreshToken1,
    Parameters.grantType1
  ],
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.url],
  headerParameters: [Parameters.contentType3, Parameters.accept4],
  serializer
};
