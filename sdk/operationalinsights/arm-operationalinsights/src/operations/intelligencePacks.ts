/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { IntelligencePacks } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OperationalInsightsManagementClient } from "../operationalInsightsManagementClient";
import {
  IntelligencePacksDisableOptionalParams,
  IntelligencePacksEnableOptionalParams,
  IntelligencePacksListOptionalParams,
  IntelligencePacksListResponse
} from "../models";

/** Class containing IntelligencePacks operations. */
export class IntelligencePacksImpl implements IntelligencePacks {
  private readonly client: OperationalInsightsManagementClient;

  /**
   * Initialize a new instance of the class IntelligencePacks class.
   * @param client Reference to the service client
   */
  constructor(client: OperationalInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Disables an intelligence pack for a given workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param intelligencePackName The name of the intelligence pack to be disabled.
   * @param options The options parameters.
   */
  disable(
    resourceGroupName: string,
    workspaceName: string,
    intelligencePackName: string,
    options?: IntelligencePacksDisableOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, intelligencePackName, options },
      disableOperationSpec
    );
  }

  /**
   * Enables an intelligence pack for a given workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param intelligencePackName The name of the intelligence pack to be enabled.
   * @param options The options parameters.
   */
  enable(
    resourceGroupName: string,
    workspaceName: string,
    intelligencePackName: string,
    options?: IntelligencePacksEnableOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, intelligencePackName, options },
      enableOperationSpec
    );
  }

  /**
   * Lists all the intelligence packs possible and whether they are enabled or disabled for a given
   * workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: IntelligencePacksListOptionalParams
  ): Promise<IntelligencePacksListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const disableOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/intelligencePacks/{intelligencePackName}/Disable",
  httpMethod: "POST",
  responses: { 200: {} },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.intelligencePackName
  ],
  serializer
};
const enableOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/intelligencePacks/{intelligencePackName}/Enable",
  httpMethod: "POST",
  responses: { 200: {} },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.intelligencePackName
  ],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/intelligencePacks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "IntelligencePack" }
          }
        }
      }
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
