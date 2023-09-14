/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServerAutomaticTuningOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  ServerAutomaticTuningGetOptionalParams,
  ServerAutomaticTuningGetResponse,
  ServerAutomaticTuning,
  ServerAutomaticTuningUpdateOptionalParams,
  ServerAutomaticTuningUpdateResponse
} from "../models";

/** Class containing ServerAutomaticTuningOperations operations. */
export class ServerAutomaticTuningOperationsImpl
  implements ServerAutomaticTuningOperations {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ServerAutomaticTuningOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves server automatic tuning options.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    options?: ServerAutomaticTuningGetOptionalParams
  ): Promise<ServerAutomaticTuningGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      getOperationSpec
    );
  }

  /**
   * Update automatic tuning options on server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The requested automatic tuning resource state.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serverName: string,
    parameters: ServerAutomaticTuning,
    options?: ServerAutomaticTuningUpdateOptionalParams
  ): Promise<ServerAutomaticTuningUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, parameters, options },
      updateOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/automaticTuning/current",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerAutomaticTuning
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/automaticTuning/current",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ServerAutomaticTuning
    },
    default: {}
  },
  requestBody: Parameters.parameters58,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
