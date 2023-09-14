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
import * as Mappers from "../models/sqlPoolRecommendedSensitivityLabelsMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a SqlPoolRecommendedSensitivityLabels. */
export class SqlPoolRecommendedSensitivityLabels {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a SqlPoolRecommendedSensitivityLabels.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Update recommended sensitivity labels states of a given SQL Pool using an operations batch.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param parameters
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.RecommendedSensitivityLabelUpdateList, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.RecommendedSensitivityLabelUpdateList, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param parameters
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.RecommendedSensitivityLabelUpdateList, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  update(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.RecommendedSensitivityLabelUpdateList, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        parameters,
        options
      },
      updateOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/recommendedSensitivityLabels",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RecommendedSensitivityLabelUpdateList,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
