/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/operationsMappers";
import * as Parameters from "../models/parameters";
import { AzureChangeAnalysisManagementClientContext } from "../azureChangeAnalysisManagementClientContext";

/** Class representing a Operations. */
export class Operations {
  private readonly client: AzureChangeAnalysisManagementClientContext;

  /**
   * Create a Operations.
   * @param {AzureChangeAnalysisManagementClientContext} client Reference to the service client.
   */
  constructor(client: AzureChangeAnalysisManagementClientContext) {
    this.client = client;
  }

  /**
   * @summary Lists all the supported operations by the Microsoft.ChangeAnalysis resource provider
   * along with their descriptions.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationsListResponse>
   */
  list(options?: Models.OperationsListOptionalParams): Promise<Models.OperationsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ResourceProviderOperationList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.OperationsListOptionalParams, callback: msRest.ServiceCallback<Models.ResourceProviderOperationList>): void;
  list(options?: Models.OperationsListOptionalParams | msRest.ServiceCallback<Models.ResourceProviderOperationList>, callback?: msRest.ServiceCallback<Models.ResourceProviderOperationList>): Promise<Models.OperationsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.OperationsListResponse>;
  }

  /**
   * @summary Lists all the supported operations by the Microsoft.ChangeAnalysis resource provider
   * along with their descriptions.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.OperationsListNextOptionalParams): Promise<Models.OperationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResourceProviderOperationList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.OperationsListNextOptionalParams, callback: msRest.ServiceCallback<Models.ResourceProviderOperationList>): void;
  listNext(nextPageLink: string, options?: Models.OperationsListNextOptionalParams | msRest.ServiceCallback<Models.ResourceProviderOperationList>, callback?: msRest.ServiceCallback<Models.ResourceProviderOperationList>): Promise<Models.OperationsListNextResponse> {
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
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.ChangeAnalysis/operations",
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceProviderOperationList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceProviderOperationList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
