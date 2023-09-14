/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { DatabaseAdvisors } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import {
  DatabaseAdvisorsListByDatabaseOptionalParams,
  DatabaseAdvisorsListByDatabaseResponse,
  DatabaseAdvisorsGetOptionalParams,
  DatabaseAdvisorsGetResponse,
  Advisor,
  DatabaseAdvisorsUpdateOptionalParams,
  DatabaseAdvisorsUpdateResponse
} from "../models";

/** Class representing a DatabaseAdvisors. */
export class DatabaseAdvisorsImpl implements DatabaseAdvisors {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class DatabaseAdvisors class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of database advisors.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabaseAdvisorsListByDatabaseOptionalParams
  ): Promise<DatabaseAdvisorsListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, options },
      listByDatabaseOperationSpec
    );
  }

  /**
   * Gets a database advisor.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param advisorName The name of the Database Advisor.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    advisorName: string,
    options?: DatabaseAdvisorsGetOptionalParams
  ): Promise<DatabaseAdvisorsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, advisorName, options },
      getOperationSpec
    );
  }

  /**
   * Updates a database advisor.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param advisorName The name of the Database Advisor.
   * @param parameters The requested advisor resource state.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    advisorName: string,
    parameters: Advisor,
    options?: DatabaseAdvisorsUpdateOptionalParams
  ): Promise<DatabaseAdvisorsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        advisorName,
        parameters,
        options
      },
      updateOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDatabaseOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/advisors",
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
    Parameters.serverName,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/advisors/{advisorName}",
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
    Parameters.databaseName,
    Parameters.advisorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/advisors/{advisorName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Advisor
    },
    default: {}
  },
  requestBody: Parameters.parameters18,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.advisorName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
