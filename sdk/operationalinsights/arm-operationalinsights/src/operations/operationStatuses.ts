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
import * as Mappers from "../models/operationStatusesMappers";
import * as Parameters from "../models/parameters";
import { OperationalInsightsManagementClientContext } from "../operationalInsightsManagementClientContext";

/** Class representing a OperationStatuses. */
export class OperationStatuses {
  private readonly client: OperationalInsightsManagementClientContext;

  /**
   * Create a OperationStatuses.
   * @param {OperationalInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: OperationalInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the status of a long running azure asynchronous operation.
   * @param location The region name of operation.
   * @param asyncOperationId The operation Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationStatusesGetResponse>
   */
  get(location: string, asyncOperationId: string, options?: msRest.RequestOptionsBase): Promise<Models.OperationStatusesGetResponse>;
  /**
   * @param location The region name of operation.
   * @param asyncOperationId The operation Id.
   * @param callback The callback
   */
  get(location: string, asyncOperationId: string, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param location The region name of operation.
   * @param asyncOperationId The operation Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(location: string, asyncOperationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  get(location: string, asyncOperationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.OperationStatusesGetResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        asyncOperationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.OperationStatusesGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.OperationalInsights/locations/{location}/operationStatuses/{asyncOperationId}",
  urlParameters: [
    Parameters.location,
    Parameters.asyncOperationId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
