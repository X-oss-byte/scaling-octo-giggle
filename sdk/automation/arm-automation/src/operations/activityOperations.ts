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
import * as Mappers from "../models/activityOperationsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a ActivityOperations. */
export class ActivityOperations {
  private readonly client: AutomationClientContext;

  /**
   * Create a ActivityOperations.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Retrieve the activity in the module identified by module name and activity name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param moduleName The name of module.
   * @param activityName The name of activity.
   * @param [options] The optional parameters
   * @returns Promise<Models.ActivityGetResponse>
   */
  get(resourceGroupName: string, automationAccountName: string, moduleName: string, activityName: string, options?: msRest.RequestOptionsBase): Promise<Models.ActivityGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param moduleName The name of module.
   * @param activityName The name of activity.
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, moduleName: string, activityName: string, callback: msRest.ServiceCallback<Models.Activity>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param moduleName The name of module.
   * @param activityName The name of activity.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, moduleName: string, activityName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Activity>): void;
  get(resourceGroupName: string, automationAccountName: string, moduleName: string, activityName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Activity>, callback?: msRest.ServiceCallback<Models.Activity>): Promise<Models.ActivityGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        moduleName,
        activityName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ActivityGetResponse>;
  }

  /**
   * Retrieve a list of activities in the module identified by module name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param moduleName The name of module.
   * @param [options] The optional parameters
   * @returns Promise<Models.ActivityListByModuleResponse>
   */
  listByModule(resourceGroupName: string, automationAccountName: string, moduleName: string, options?: msRest.RequestOptionsBase): Promise<Models.ActivityListByModuleResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param moduleName The name of module.
   * @param callback The callback
   */
  listByModule(resourceGroupName: string, automationAccountName: string, moduleName: string, callback: msRest.ServiceCallback<Models.ActivityListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param moduleName The name of module.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByModule(resourceGroupName: string, automationAccountName: string, moduleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ActivityListResult>): void;
  listByModule(resourceGroupName: string, automationAccountName: string, moduleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ActivityListResult>, callback?: msRest.ServiceCallback<Models.ActivityListResult>): Promise<Models.ActivityListByModuleResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        moduleName,
        options
      },
      listByModuleOperationSpec,
      callback) as Promise<Models.ActivityListByModuleResponse>;
  }

  /**
   * Retrieve a list of activities in the module identified by module name.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ActivityListByModuleNextResponse>
   */
  listByModuleNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ActivityListByModuleNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByModuleNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ActivityListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByModuleNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ActivityListResult>): void;
  listByModuleNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ActivityListResult>, callback?: msRest.ServiceCallback<Models.ActivityListResult>): Promise<Models.ActivityListByModuleNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByModuleNextOperationSpec,
      callback) as Promise<Models.ActivityListByModuleNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}/activities/{activityName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.moduleName,
    Parameters.activityName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Activity
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByModuleOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}/activities",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.moduleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ActivityListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByModuleNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ActivityListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
