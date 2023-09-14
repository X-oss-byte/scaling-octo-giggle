/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServerAdvisors } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  ServerAdvisorsListByServerOptionalParams,
  ServerAdvisorsListByServerResponse,
  ServerAdvisorsGetOptionalParams,
  ServerAdvisorsGetResponse,
  Advisor,
  ServerAdvisorsUpdateOptionalParams,
  ServerAdvisorsUpdateResponse
} from "../models";

/** Class containing ServerAdvisors operations. */
export class ServerAdvisorsImpl implements ServerAdvisors {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ServerAdvisors class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of server advisors.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerAdvisorsListByServerOptionalParams
  ): Promise<ServerAdvisorsListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listByServerOperationSpec
    );
  }

  /**
   * Gets a server advisor.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param advisorName The name of the Server Advisor.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    advisorName: string,
    options?: ServerAdvisorsGetOptionalParams
  ): Promise<ServerAdvisorsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, advisorName, options },
      getOperationSpec
    );
  }

  /**
   * Updates a server advisor.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param advisorName The name of the Server Advisor.
   * @param parameters The requested advisor resource state.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serverName: string,
    advisorName: string,
    parameters: Advisor,
    options?: ServerAdvisorsUpdateOptionalParams
  ): Promise<ServerAdvisorsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, advisorName, parameters, options },
      updateOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/advisors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Advisor" } }
        }
      }
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/advisors/{advisorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Advisor
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.advisorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/advisors/{advisorName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Advisor
    },
    default: {}
  },
  requestBody: Parameters.parameters16,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.advisorName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
