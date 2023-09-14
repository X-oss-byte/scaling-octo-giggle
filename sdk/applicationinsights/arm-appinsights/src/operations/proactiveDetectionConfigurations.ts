/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/proactiveDetectionConfigurationsMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClientContext } from "../applicationInsightsManagementClientContext";

/** Class representing a ProactiveDetectionConfigurations. */
export class ProactiveDetectionConfigurations {
  private readonly client: ApplicationInsightsManagementClientContext;

  /**
   * Create a ProactiveDetectionConfigurations.
   * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of ProactiveDetection configurations of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProactiveDetectionConfigurationsListResponse>
   */
  list(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProactiveDetectionConfigurationsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  list(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentProactiveDetectionConfiguration[]>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentProactiveDetectionConfiguration[]>): void;
  list(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentProactiveDetectionConfiguration[]>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentProactiveDetectionConfiguration[]>): Promise<Models.ProactiveDetectionConfigurationsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ProactiveDetectionConfigurationsListResponse>;
  }

  /**
   * Get the ProactiveDetection configuration for this configuration id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param configurationId The ProactiveDetection configuration ID. This is unique within a
   * Application Insights component.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProactiveDetectionConfigurationsGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, configurationId: string, options?: msRest.RequestOptionsBase): Promise<Models.ProactiveDetectionConfigurationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param configurationId The ProactiveDetection configuration ID. This is unique within a
   * Application Insights component.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, configurationId: string, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentProactiveDetectionConfiguration>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param configurationId The ProactiveDetection configuration ID. This is unique within a
   * Application Insights component.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, configurationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentProactiveDetectionConfiguration>): void;
  get(resourceGroupName: string, resourceName: string, configurationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentProactiveDetectionConfiguration>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentProactiveDetectionConfiguration>): Promise<Models.ProactiveDetectionConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        configurationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ProactiveDetectionConfigurationsGetResponse>;
  }

  /**
   * Update the ProactiveDetection configuration for this configuration id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param configurationId The ProactiveDetection configuration ID. This is unique within a
   * Application Insights component.
   * @param proactiveDetectionProperties Properties that need to be specified to update the
   * ProactiveDetection configuration.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProactiveDetectionConfigurationsUpdateResponse>
   */
  update(resourceGroupName: string, resourceName: string, configurationId: string, proactiveDetectionProperties: Models.ApplicationInsightsComponentProactiveDetectionConfiguration, options?: msRest.RequestOptionsBase): Promise<Models.ProactiveDetectionConfigurationsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param configurationId The ProactiveDetection configuration ID. This is unique within a
   * Application Insights component.
   * @param proactiveDetectionProperties Properties that need to be specified to update the
   * ProactiveDetection configuration.
   * @param callback The callback
   */
  update(resourceGroupName: string, resourceName: string, configurationId: string, proactiveDetectionProperties: Models.ApplicationInsightsComponentProactiveDetectionConfiguration, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentProactiveDetectionConfiguration>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param configurationId The ProactiveDetection configuration ID. This is unique within a
   * Application Insights component.
   * @param proactiveDetectionProperties Properties that need to be specified to update the
   * ProactiveDetection configuration.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, resourceName: string, configurationId: string, proactiveDetectionProperties: Models.ApplicationInsightsComponentProactiveDetectionConfiguration, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentProactiveDetectionConfiguration>): void;
  update(resourceGroupName: string, resourceName: string, configurationId: string, proactiveDetectionProperties: Models.ApplicationInsightsComponentProactiveDetectionConfiguration, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentProactiveDetectionConfiguration>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentProactiveDetectionConfiguration>): Promise<Models.ProactiveDetectionConfigurationsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        configurationId,
        proactiveDetectionProperties,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ProactiveDetectionConfigurationsUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ProactiveDetectionConfigs",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplicationInsightsComponentProactiveDetectionConfiguration"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ProactiveDetectionConfigs/{ConfigurationId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.configurationId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentProactiveDetectionConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ProactiveDetectionConfigs/{ConfigurationId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.configurationId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "proactiveDetectionProperties",
    mapper: {
      ...Mappers.ApplicationInsightsComponentProactiveDetectionConfiguration,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentProactiveDetectionConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
