/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/operationsMappers";
import * as Parameters from "../models/parameters";
import { AppConfigurationManagementClientContext } from "../appConfigurationManagementClientContext";

/** Class representing a Operations. */
export class Operations {
  private readonly client: AppConfigurationManagementClientContext;

  /**
   * Create a Operations.
   * @param {AppConfigurationManagementClientContext} client Reference to the service client.
   */
  constructor(client: AppConfigurationManagementClientContext) {
    this.client = client;
  }

  /**
   * Checks whether the configuration store name is available for use.
   * @param checkNameAvailabilityParameters The object containing information for the availability
   * request.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationsCheckNameAvailabilityResponse>
   */
  checkNameAvailability(checkNameAvailabilityParameters: Models.CheckNameAvailabilityParameters, options?: msRest.RequestOptionsBase): Promise<Models.OperationsCheckNameAvailabilityResponse>;
  /**
   * @param checkNameAvailabilityParameters The object containing information for the availability
   * request.
   * @param callback The callback
   */
  checkNameAvailability(checkNameAvailabilityParameters: Models.CheckNameAvailabilityParameters, callback: msRest.ServiceCallback<Models.NameAvailabilityStatus>): void;
  /**
   * @param checkNameAvailabilityParameters The object containing information for the availability
   * request.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(checkNameAvailabilityParameters: Models.CheckNameAvailabilityParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NameAvailabilityStatus>): void;
  checkNameAvailability(checkNameAvailabilityParameters: Models.CheckNameAvailabilityParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NameAvailabilityStatus>, callback?: msRest.ServiceCallback<Models.NameAvailabilityStatus>): Promise<Models.OperationsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        checkNameAvailabilityParameters,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback) as Promise<Models.OperationsCheckNameAvailabilityResponse>;
  }

  /**
   * Lists the operations available from this provider.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationsListResponse>
   */
  list(options?: Models.OperationsListOptionalParams): Promise<Models.OperationsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.OperationDefinitionListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.OperationsListOptionalParams, callback: msRest.ServiceCallback<Models.OperationDefinitionListResult>): void;
  list(options?: Models.OperationsListOptionalParams | msRest.ServiceCallback<Models.OperationDefinitionListResult>, callback?: msRest.ServiceCallback<Models.OperationDefinitionListResult>): Promise<Models.OperationsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.OperationsListResponse>;
  }

  /**
   * Lists the operations available from this provider.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.OperationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.OperationDefinitionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationDefinitionListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationDefinitionListResult>, callback?: msRest.ServiceCallback<Models.OperationDefinitionListResult>): Promise<Models.OperationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.OperationsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/checkNameAvailability",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "checkNameAvailabilityParameters",
    mapper: {
      ...Mappers.CheckNameAvailabilityParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.NameAvailabilityStatus
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.AppConfiguration/operations",
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
