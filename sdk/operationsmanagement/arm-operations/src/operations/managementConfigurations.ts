/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ManagementConfigurations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OperationsManagementClient } from "../operationsManagementClient";
import {
  ManagementConfigurationsListBySubscriptionOptionalParams,
  ManagementConfigurationsListBySubscriptionResponse,
  ManagementConfiguration,
  ManagementConfigurationsCreateOrUpdateOptionalParams,
  ManagementConfigurationsCreateOrUpdateResponse,
  ManagementConfigurationsDeleteOptionalParams,
  ManagementConfigurationsGetOptionalParams,
  ManagementConfigurationsGetResponse
} from "../models";

/** Class containing ManagementConfigurations operations. */
export class ManagementConfigurationsImpl implements ManagementConfigurations {
  private readonly client: OperationsManagementClient;

  /**
   * Initialize a new instance of the class ManagementConfigurations class.
   * @param client Reference to the service client
   */
  constructor(client: OperationsManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves the ManagementConfigurations list.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ManagementConfigurationsListBySubscriptionOptionalParams
  ): Promise<ManagementConfigurationsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Creates or updates the ManagementConfiguration.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param managementConfigurationName User Management Configuration Name.
   * @param parameters The parameters required to create OMS Solution.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    managementConfigurationName: string,
    parameters: ManagementConfiguration,
    options?: ManagementConfigurationsCreateOrUpdateOptionalParams
  ): Promise<ManagementConfigurationsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managementConfigurationName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes the ManagementConfiguration in the subscription.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param managementConfigurationName User Management Configuration Name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    managementConfigurationName: string,
    options?: ManagementConfigurationsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managementConfigurationName, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieves the user ManagementConfiguration.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param managementConfigurationName User Management Configuration Name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managementConfigurationName: string,
    options?: ManagementConfigurationsGetOptionalParams
  ): Promise<ManagementConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managementConfigurationName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.OperationsManagement/ManagementConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagementConfigurationPropertiesList
    },
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/ManagementConfigurations/{managementConfigurationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagementConfiguration
    },
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managementConfigurationName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/ManagementConfigurations/{managementConfigurationName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managementConfigurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationsManagement/ManagementConfigurations/{managementConfigurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagementConfiguration
    },
    default: {
      bodyMapper: Mappers.CodeMessageError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managementConfigurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
