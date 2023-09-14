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
import * as Mappers from "../models/locationBasedCapabilitiesMappers";
import * as Parameters from "../models/parameters";
import { PostgreSQLFlexibleManagementClientContext } from "../postgreSQLFlexibleManagementClientContext";

/** Class representing a LocationBasedCapabilities. */
export class LocationBasedCapabilities {
  private readonly client: PostgreSQLFlexibleManagementClientContext;

  /**
   * Create a LocationBasedCapabilities.
   * @param {PostgreSQLFlexibleManagementClientContext} client Reference to the service client.
   */
  constructor(client: PostgreSQLFlexibleManagementClientContext) {
    this.client = client;
  }

  /**
   * Get capabilities at specified location in a given subscription.
   * @param locationName The name of the location.
   * @param [options] The optional parameters
   * @returns Promise<Models.LocationBasedCapabilitiesExecuteResponse>
   */
  execute(locationName: string, options?: msRest.RequestOptionsBase): Promise<Models.LocationBasedCapabilitiesExecuteResponse>;
  /**
   * @param locationName The name of the location.
   * @param callback The callback
   */
  execute(locationName: string, callback: msRest.ServiceCallback<Models.CapabilitiesListResult>): void;
  /**
   * @param locationName The name of the location.
   * @param options The optional parameters
   * @param callback The callback
   */
  execute(locationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CapabilitiesListResult>): void;
  execute(locationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CapabilitiesListResult>, callback?: msRest.ServiceCallback<Models.CapabilitiesListResult>): Promise<Models.LocationBasedCapabilitiesExecuteResponse> {
    return this.client.sendOperationRequest(
      {
        locationName,
        options
      },
      executeOperationSpec,
      callback) as Promise<Models.LocationBasedCapabilitiesExecuteResponse>;
  }

  /**
   * Get capabilities at specified location in a given subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LocationBasedCapabilitiesExecuteNextResponse>
   */
  executeNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.LocationBasedCapabilitiesExecuteNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  executeNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CapabilitiesListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  executeNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CapabilitiesListResult>): void;
  executeNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CapabilitiesListResult>, callback?: msRest.ServiceCallback<Models.CapabilitiesListResult>): Promise<Models.LocationBasedCapabilitiesExecuteNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      executeNextOperationSpec,
      callback) as Promise<Models.LocationBasedCapabilitiesExecuteNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const executeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DBForPostgreSql/locations/{locationName}/capabilities",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CapabilitiesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const executeNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CapabilitiesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
