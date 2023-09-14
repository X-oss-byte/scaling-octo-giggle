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
import * as Mappers from "../models/rulesMappers";
import * as Parameters from "../models/parameters";
import { ServiceBusManagementClientContext } from "../serviceBusManagementClientContext";

/** Class representing a Rules. */
export class Rules {
  private readonly client: ServiceBusManagementClientContext;

  /**
   * Create a Rules.
   * @param {ServiceBusManagementClientContext} client Reference to the service client.
   */
  constructor(client: ServiceBusManagementClientContext) {
    this.client = client;
  }

  /**
   * List all the rules within given topic-subscription
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param [options] The optional parameters
   * @returns Promise<Models.RulesListBySubscriptionsResponse>
   */
  listBySubscriptions(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, options?: Models.RulesListBySubscriptionsOptionalParams): Promise<Models.RulesListBySubscriptionsResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param callback The callback
   */
  listBySubscriptions(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, callback: msRest.ServiceCallback<Models.RuleListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptions(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, options: Models.RulesListBySubscriptionsOptionalParams, callback: msRest.ServiceCallback<Models.RuleListResult>): void;
  listBySubscriptions(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, options?: Models.RulesListBySubscriptionsOptionalParams | msRest.ServiceCallback<Models.RuleListResult>, callback?: msRest.ServiceCallback<Models.RuleListResult>): Promise<Models.RulesListBySubscriptionsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        options
      },
      listBySubscriptionsOperationSpec,
      callback) as Promise<Models.RulesListBySubscriptionsResponse>;
  }

  /**
   * Creates a new rule and updates an existing rule
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param ruleName The rule name.
   * @param parameters Parameters supplied to create a rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.RulesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, ruleName: string, parameters: Models.Rule, options?: msRest.RequestOptionsBase): Promise<Models.RulesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param ruleName The rule name.
   * @param parameters Parameters supplied to create a rule.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, ruleName: string, parameters: Models.Rule, callback: msRest.ServiceCallback<Models.Rule>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param ruleName The rule name.
   * @param parameters Parameters supplied to create a rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, ruleName: string, parameters: Models.Rule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Rule>): void;
  createOrUpdate(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, ruleName: string, parameters: Models.Rule, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Rule>, callback?: msRest.ServiceCallback<Models.Rule>): Promise<Models.RulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        ruleName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.RulesCreateOrUpdateResponse>;
  }

  /**
   * Deletes an existing rule.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param ruleName The rule name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, ruleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param ruleName The rule name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, ruleName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param ruleName The rule name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, ruleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, ruleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        ruleName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieves the description for the specified rule.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param ruleName The rule name.
   * @param [options] The optional parameters
   * @returns Promise<Models.RulesGetResponse>
   */
  get(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, ruleName: string, options?: msRest.RequestOptionsBase): Promise<Models.RulesGetResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param ruleName The rule name.
   * @param callback The callback
   */
  get(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, ruleName: string, callback: msRest.ServiceCallback<Models.Rule>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param subscriptionName The subscription name.
   * @param ruleName The rule name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, ruleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Rule>): void;
  get(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, ruleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Rule>, callback?: msRest.ServiceCallback<Models.Rule>): Promise<Models.RulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        subscriptionName,
        ruleName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RulesGetResponse>;
  }

  /**
   * List all the rules within given topic-subscription
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RulesListBySubscriptionsNextResponse>
   */
  listBySubscriptionsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RulesListBySubscriptionsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RuleListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RuleListResult>): void;
  listBySubscriptionsNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RuleListResult>, callback?: msRest.ServiceCallback<Models.RuleListResult>): Promise<Models.RulesListBySubscriptionsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionsNextOperationSpec,
      callback) as Promise<Models.RulesListBySubscriptionsNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySubscriptionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.subscriptionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules/{ruleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.subscriptionName,
    Parameters.ruleName,
    Parameters.subscriptionId
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
      ...Mappers.Rule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Rule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules/{ruleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.subscriptionName,
    Parameters.ruleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
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

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules/{ruleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.subscriptionName,
    Parameters.ruleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Rule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listBySubscriptionsNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.RuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
