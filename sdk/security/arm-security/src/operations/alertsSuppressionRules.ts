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
import * as Mappers from "../models/alertsSuppressionRulesMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a AlertsSuppressionRules. */
export class AlertsSuppressionRules {
  private readonly client: SecurityCenterContext;

  /**
   * Create a AlertsSuppressionRules.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * List of all the dismiss rules for the given subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsSuppressionRulesListResponse>
   */
  list(options?: Models.AlertsSuppressionRulesListOptionalParams): Promise<Models.AlertsSuppressionRulesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.AlertsSuppressionRulesList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.AlertsSuppressionRulesListOptionalParams, callback: msRest.ServiceCallback<Models.AlertsSuppressionRulesList>): void;
  list(options?: Models.AlertsSuppressionRulesListOptionalParams | msRest.ServiceCallback<Models.AlertsSuppressionRulesList>, callback?: msRest.ServiceCallback<Models.AlertsSuppressionRulesList>): Promise<Models.AlertsSuppressionRulesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AlertsSuppressionRulesListResponse>;
  }

  /**
   * Get dismiss rule, with name: {alertsSuppressionRuleName}, for the given subscription
   * @param alertsSuppressionRuleName The unique name of the suppression alert rule
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsSuppressionRulesGetResponse>
   */
  get(alertsSuppressionRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsSuppressionRulesGetResponse>;
  /**
   * @param alertsSuppressionRuleName The unique name of the suppression alert rule
   * @param callback The callback
   */
  get(alertsSuppressionRuleName: string, callback: msRest.ServiceCallback<Models.AlertsSuppressionRule>): void;
  /**
   * @param alertsSuppressionRuleName The unique name of the suppression alert rule
   * @param options The optional parameters
   * @param callback The callback
   */
  get(alertsSuppressionRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertsSuppressionRule>): void;
  get(alertsSuppressionRuleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertsSuppressionRule>, callback?: msRest.ServiceCallback<Models.AlertsSuppressionRule>): Promise<Models.AlertsSuppressionRulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        alertsSuppressionRuleName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AlertsSuppressionRulesGetResponse>;
  }

  /**
   * Update existing rule or create new rule if it doesn't exist
   * @param alertsSuppressionRuleName The unique name of the suppression alert rule
   * @param alertsSuppressionRule Suppression rule object
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsSuppressionRulesUpdateResponse>
   */
  update(alertsSuppressionRuleName: string, alertsSuppressionRule: Models.AlertsSuppressionRule, options?: msRest.RequestOptionsBase): Promise<Models.AlertsSuppressionRulesUpdateResponse>;
  /**
   * @param alertsSuppressionRuleName The unique name of the suppression alert rule
   * @param alertsSuppressionRule Suppression rule object
   * @param callback The callback
   */
  update(alertsSuppressionRuleName: string, alertsSuppressionRule: Models.AlertsSuppressionRule, callback: msRest.ServiceCallback<Models.AlertsSuppressionRule>): void;
  /**
   * @param alertsSuppressionRuleName The unique name of the suppression alert rule
   * @param alertsSuppressionRule Suppression rule object
   * @param options The optional parameters
   * @param callback The callback
   */
  update(alertsSuppressionRuleName: string, alertsSuppressionRule: Models.AlertsSuppressionRule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertsSuppressionRule>): void;
  update(alertsSuppressionRuleName: string, alertsSuppressionRule: Models.AlertsSuppressionRule, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertsSuppressionRule>, callback?: msRest.ServiceCallback<Models.AlertsSuppressionRule>): Promise<Models.AlertsSuppressionRulesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        alertsSuppressionRuleName,
        alertsSuppressionRule,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.AlertsSuppressionRulesUpdateResponse>;
  }

  /**
   * Delete dismiss alert rule for this subscription.
   * @param alertsSuppressionRuleName The unique name of the suppression alert rule
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(alertsSuppressionRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param alertsSuppressionRuleName The unique name of the suppression alert rule
   * @param callback The callback
   */
  deleteMethod(alertsSuppressionRuleName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param alertsSuppressionRuleName The unique name of the suppression alert rule
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(alertsSuppressionRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(alertsSuppressionRuleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        alertsSuppressionRuleName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * List of all the dismiss rules for the given subscription
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsSuppressionRulesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsSuppressionRulesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AlertsSuppressionRulesList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertsSuppressionRulesList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertsSuppressionRulesList>, callback?: msRest.ServiceCallback<Models.AlertsSuppressionRulesList>): Promise<Models.AlertsSuppressionRulesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AlertsSuppressionRulesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/alertsSuppressionRules",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion6,
    Parameters.alertType
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertsSuppressionRulesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/alertsSuppressionRules/{alertsSuppressionRuleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.alertsSuppressionRuleName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertsSuppressionRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/alertsSuppressionRules/{alertsSuppressionRuleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.alertsSuppressionRuleName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "alertsSuppressionRule",
    mapper: {
      ...Mappers.AlertsSuppressionRule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AlertsSuppressionRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/alertsSuppressionRules/{alertsSuppressionRuleName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.alertsSuppressionRuleName
  ],
  queryParameters: [
    Parameters.apiVersion6
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.AlertsSuppressionRulesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
