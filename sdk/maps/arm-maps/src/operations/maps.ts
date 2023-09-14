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
import * as Mappers from "../models/mapsMappers";
import * as Parameters from "../models/parameters";
import { AzureMapsManagementClientContext } from "../azureMapsManagementClientContext";

/** Class representing a Maps. */
export class Maps {
  private readonly client: AzureMapsManagementClientContext;

  /**
   * Create a Maps.
   * @param {AzureMapsManagementClientContext} client Reference to the service client.
   */
  constructor(client: AzureMapsManagementClientContext) {
    this.client = client;
  }

  /**
   * List operations available for the Maps Resource Provider
   * @param [options] The optional parameters
   * @returns Promise<Models.MapsListOperationsResponse>
   */
  listOperations(options?: msRest.RequestOptionsBase): Promise<Models.MapsListOperationsResponse>;
  /**
   * @param callback The callback
   */
  listOperations(callback: msRest.ServiceCallback<Models.MapsOperations>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listOperations(
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.MapsOperations>
  ): void;
  listOperations(
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MapsOperations>,
    callback?: msRest.ServiceCallback<Models.MapsOperations>
  ): Promise<Models.MapsListOperationsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationsOperationSpec,
      callback
    ) as Promise<Models.MapsListOperationsResponse>;
  }

  /**
   * List operations available for the Maps Resource Provider
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.MapsListOperationsNextResponse>
   */
  listOperationsNext(
    nextPageLink: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.MapsListOperationsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listOperationsNext(
    nextPageLink: string,
    callback: msRest.ServiceCallback<Models.MapsOperations>
  ): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listOperationsNext(
    nextPageLink: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.MapsOperations>
  ): void;
  listOperationsNext(
    nextPageLink: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MapsOperations>,
    callback?: msRest.ServiceCallback<Models.MapsOperations>
  ): Promise<Models.MapsListOperationsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listOperationsNextOperationSpec,
      callback
    ) as Promise<Models.MapsListOperationsNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Maps/operations",
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.MapsOperations
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationsNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [Parameters.nextPageLink],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.MapsOperations
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
