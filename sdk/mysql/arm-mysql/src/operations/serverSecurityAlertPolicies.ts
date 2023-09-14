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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/serverSecurityAlertPoliciesMappers";
import * as Parameters from "../models/parameters";
import { MySQLManagementClientContext } from "../mySQLManagementClientContext";

/** Class representing a ServerSecurityAlertPolicies. */
export class ServerSecurityAlertPolicies {
  private readonly client: MySQLManagementClientContext;

  /**
   * Create a ServerSecurityAlertPolicies.
   * @param {MySQLManagementClientContext} client Reference to the service client.
   */
  constructor(client: MySQLManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a server's security alert policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerSecurityAlertPoliciesGetResponse>
   */
  get(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerSecurityAlertPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.ServerSecurityAlertPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerSecurityAlertPolicy>): void;
  get(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerSecurityAlertPolicy>, callback?: msRest.ServiceCallback<Models.ServerSecurityAlertPolicy>): Promise<Models.ServerSecurityAlertPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ServerSecurityAlertPoliciesGetResponse>;
  }

  /**
   * Creates or updates a threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The server security alert policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerSecurityAlertPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, parameters: Models.ServerSecurityAlertPolicy, options?: msRest.RequestOptionsBase): Promise<Models.ServerSecurityAlertPoliciesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serverName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ServerSecurityAlertPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Creates or updates a threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The server security alert policy.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serverName: string, parameters: Models.ServerSecurityAlertPolicy, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/securityAlertPolicies/{securityAlertPolicyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.securityAlertPolicyName,
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
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/securityAlertPolicies/{securityAlertPolicyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.securityAlertPolicyName,
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
      ...Mappers.ServerSecurityAlertPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
