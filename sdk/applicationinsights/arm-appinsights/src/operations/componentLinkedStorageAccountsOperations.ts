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
import * as Mappers from "../models/componentLinkedStorageAccountsOperationsMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClientContext } from "../applicationInsightsManagementClientContext";

/** Class representing a ComponentLinkedStorageAccountsOperations. */
export class ComponentLinkedStorageAccountsOperations {
  private readonly client: ApplicationInsightsManagementClientContext;

  /**
   * Create a ComponentLinkedStorageAccountsOperations.
   * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns the current linked storage settings for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComponentLinkedStorageAccountsGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ComponentLinkedStorageAccountsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.ComponentLinkedStorageAccounts>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ComponentLinkedStorageAccounts>): void;
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ComponentLinkedStorageAccounts>, callback?: msRest.ServiceCallback<Models.ComponentLinkedStorageAccounts>): Promise<Models.ComponentLinkedStorageAccountsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ComponentLinkedStorageAccountsGetResponse>;
  }

  /**
   * Replace current linked storage account for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param linkedStorageAccountsProperties Properties that need to be specified to update linked
   * storage accounts for an Application Insights component.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComponentLinkedStorageAccountsCreateAndUpdateResponse>
   */
  createAndUpdate(resourceGroupName: string, resourceName: string, linkedStorageAccountsProperties: Models.ComponentLinkedStorageAccounts, options?: msRest.RequestOptionsBase): Promise<Models.ComponentLinkedStorageAccountsCreateAndUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param linkedStorageAccountsProperties Properties that need to be specified to update linked
   * storage accounts for an Application Insights component.
   * @param callback The callback
   */
  createAndUpdate(resourceGroupName: string, resourceName: string, linkedStorageAccountsProperties: Models.ComponentLinkedStorageAccounts, callback: msRest.ServiceCallback<Models.ComponentLinkedStorageAccounts>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param linkedStorageAccountsProperties Properties that need to be specified to update linked
   * storage accounts for an Application Insights component.
   * @param options The optional parameters
   * @param callback The callback
   */
  createAndUpdate(resourceGroupName: string, resourceName: string, linkedStorageAccountsProperties: Models.ComponentLinkedStorageAccounts, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ComponentLinkedStorageAccounts>): void;
  createAndUpdate(resourceGroupName: string, resourceName: string, linkedStorageAccountsProperties: Models.ComponentLinkedStorageAccounts, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ComponentLinkedStorageAccounts>, callback?: msRest.ServiceCallback<Models.ComponentLinkedStorageAccounts>): Promise<Models.ComponentLinkedStorageAccountsCreateAndUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        linkedStorageAccountsProperties,
        options
      },
      createAndUpdateOperationSpec,
      callback) as Promise<Models.ComponentLinkedStorageAccountsCreateAndUpdateResponse>;
  }

  /**
   * Update linked storage accounts for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param linkedStorageAccountsProperties Properties that need to be specified to update a linked
   * storage accounts for an Application Insights component.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComponentLinkedStorageAccountsUpdateResponse>
   */
  update(resourceGroupName: string, resourceName: string, linkedStorageAccountsProperties: Models.ComponentLinkedStorageAccountsPatch, options?: msRest.RequestOptionsBase): Promise<Models.ComponentLinkedStorageAccountsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param linkedStorageAccountsProperties Properties that need to be specified to update a linked
   * storage accounts for an Application Insights component.
   * @param callback The callback
   */
  update(resourceGroupName: string, resourceName: string, linkedStorageAccountsProperties: Models.ComponentLinkedStorageAccountsPatch, callback: msRest.ServiceCallback<Models.ComponentLinkedStorageAccounts>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param linkedStorageAccountsProperties Properties that need to be specified to update a linked
   * storage accounts for an Application Insights component.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, resourceName: string, linkedStorageAccountsProperties: Models.ComponentLinkedStorageAccountsPatch, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ComponentLinkedStorageAccounts>): void;
  update(resourceGroupName: string, resourceName: string, linkedStorageAccountsProperties: Models.ComponentLinkedStorageAccountsPatch, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ComponentLinkedStorageAccounts>, callback?: msRest.ServiceCallback<Models.ComponentLinkedStorageAccounts>): Promise<Models.ComponentLinkedStorageAccountsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        linkedStorageAccountsProperties,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ComponentLinkedStorageAccountsUpdateResponse>;
  }

  /**
   * Delete linked storage accounts for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/linkedStorageAccounts/{storageType}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.storageType
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ComponentLinkedStorageAccounts
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createAndUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/linkedStorageAccounts/{storageType}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.storageType
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "linkedStorageAccountsProperties",
    mapper: {
      ...Mappers.ComponentLinkedStorageAccounts,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ComponentLinkedStorageAccounts
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/linkedStorageAccounts/{storageType}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.storageType
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "linkedStorageAccountsProperties",
    mapper: {
      ...Mappers.ComponentLinkedStorageAccountsPatch,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ComponentLinkedStorageAccounts
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/linkedStorageAccounts/{storageType}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.storageType
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
