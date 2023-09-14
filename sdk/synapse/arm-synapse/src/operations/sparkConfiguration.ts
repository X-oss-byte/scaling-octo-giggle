/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SparkConfiguration } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  SparkConfigurationGetOptionalParams,
  SparkConfigurationGetResponse
} from "../models";

/** Class containing SparkConfiguration operations. */
export class SparkConfigurationImpl implements SparkConfiguration {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class SparkConfiguration class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Get SparkConfiguration by name in a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sparkConfigurationName SparkConfiguration name
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sparkConfigurationName: string,
    workspaceName: string,
    options?: SparkConfigurationGetOptionalParams
  ): Promise<SparkConfigurationGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sparkConfigurationName, workspaceName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sparkconfigurations/{sparkConfigurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SparkConfigurationResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sparkConfigurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
