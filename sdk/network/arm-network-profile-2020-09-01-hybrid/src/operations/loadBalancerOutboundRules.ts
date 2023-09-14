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
import * as Mappers from "../models/loadBalancerOutboundRulesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a LoadBalancerOutboundRules. */
export class LoadBalancerOutboundRules {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a LoadBalancerOutboundRules.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the outbound rules in a load balancer.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoadBalancerOutboundRulesListResponse>
   */
  list(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase): Promise<Models.LoadBalancerOutboundRulesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param callback The callback
   */
  list(resourceGroupName: string, loadBalancerName: string, callback: msRest.ServiceCallback<Models.LoadBalancerOutboundRuleListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerOutboundRuleListResult>): void;
  list(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LoadBalancerOutboundRuleListResult>, callback?: msRest.ServiceCallback<Models.LoadBalancerOutboundRuleListResult>): Promise<Models.LoadBalancerOutboundRulesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadBalancerName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.LoadBalancerOutboundRulesListResponse>;
  }

  /**
   * Gets the specified load balancer outbound rule.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param outboundRuleName The name of the outbound rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoadBalancerOutboundRulesGetResponse>
   */
  get(resourceGroupName: string, loadBalancerName: string, outboundRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.LoadBalancerOutboundRulesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param outboundRuleName The name of the outbound rule.
   * @param callback The callback
   */
  get(resourceGroupName: string, loadBalancerName: string, outboundRuleName: string, callback: msRest.ServiceCallback<Models.OutboundRule>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param outboundRuleName The name of the outbound rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, loadBalancerName: string, outboundRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OutboundRule>): void;
  get(resourceGroupName: string, loadBalancerName: string, outboundRuleName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OutboundRule>, callback?: msRest.ServiceCallback<Models.OutboundRule>): Promise<Models.LoadBalancerOutboundRulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadBalancerName,
        outboundRuleName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.LoadBalancerOutboundRulesGetResponse>;
  }

  /**
   * Gets all the outbound rules in a load balancer.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoadBalancerOutboundRulesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.LoadBalancerOutboundRulesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LoadBalancerOutboundRuleListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerOutboundRuleListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LoadBalancerOutboundRuleListResult>, callback?: msRest.ServiceCallback<Models.LoadBalancerOutboundRuleListResult>): Promise<Models.LoadBalancerOutboundRulesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.LoadBalancerOutboundRulesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/outboundRules",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.loadBalancerName,
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
      bodyMapper: Mappers.LoadBalancerOutboundRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/outboundRules/{outboundRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.loadBalancerName,
    Parameters.outboundRuleName,
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
      bodyMapper: Mappers.OutboundRule
    },
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
      bodyMapper: Mappers.LoadBalancerOutboundRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
