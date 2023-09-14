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
import * as Mappers from "../models/rulesEnginesMappers";
import * as Parameters from "../models/parameters";
import { FrontDoorManagementClientContext } from "../frontDoorManagementClientContext";

/** Class representing a RulesEngines. */
export class RulesEngines {
  private readonly client: FrontDoorManagementClientContext;

  /**
   * Create a RulesEngines.
   * @param {FrontDoorManagementClientContext} client Reference to the service client.
   */
  constructor(client: FrontDoorManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the Rules Engine Configurations within a Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param [options] The optional parameters
   * @returns Promise<Models.RulesEnginesListByFrontDoorResponse>
   */
  listByFrontDoor(resourceGroupName: string, frontDoorName: string, options?: msRest.RequestOptionsBase): Promise<Models.RulesEnginesListByFrontDoorResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param callback The callback
   */
  listByFrontDoor(resourceGroupName: string, frontDoorName: string, callback: msRest.ServiceCallback<Models.RulesEngineListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByFrontDoor(resourceGroupName: string, frontDoorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RulesEngineListResult>): void;
  listByFrontDoor(resourceGroupName: string, frontDoorName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RulesEngineListResult>, callback?: msRest.ServiceCallback<Models.RulesEngineListResult>): Promise<Models.RulesEnginesListByFrontDoorResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        frontDoorName,
        options
      },
      listByFrontDoorOperationSpec,
      callback) as Promise<Models.RulesEnginesListByFrontDoorResponse>;
  }

  /**
   * Gets a Rules Engine Configuration with the specified name within the specified Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param rulesEngineName Name of the Rules Engine which is unique within the Front Door.
   * @param [options] The optional parameters
   * @returns Promise<Models.RulesEnginesGetResponse>
   */
  get(resourceGroupName: string, frontDoorName: string, rulesEngineName: string, options?: msRest.RequestOptionsBase): Promise<Models.RulesEnginesGetResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param rulesEngineName Name of the Rules Engine which is unique within the Front Door.
   * @param callback The callback
   */
  get(resourceGroupName: string, frontDoorName: string, rulesEngineName: string, callback: msRest.ServiceCallback<Models.RulesEngine>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param rulesEngineName Name of the Rules Engine which is unique within the Front Door.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, frontDoorName: string, rulesEngineName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RulesEngine>): void;
  get(resourceGroupName: string, frontDoorName: string, rulesEngineName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RulesEngine>, callback?: msRest.ServiceCallback<Models.RulesEngine>): Promise<Models.RulesEnginesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        frontDoorName,
        rulesEngineName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RulesEnginesGetResponse>;
  }

  /**
   * Creates a new Rules Engine Configuration with the specified name within the specified Front
   * Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param rulesEngineName Name of the Rules Engine which is unique within the Front Door.
   * @param rulesEngineParameters Rules Engine Configuration properties needed to create a new Rules
   * Engine Configuration.
   * @param [options] The optional parameters
   * @returns Promise<Models.RulesEnginesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, frontDoorName: string, rulesEngineName: string, rulesEngineParameters: Models.RulesEngine, options?: msRest.RequestOptionsBase): Promise<Models.RulesEnginesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,frontDoorName,rulesEngineName,rulesEngineParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RulesEnginesCreateOrUpdateResponse>;
  }

  /**
   * Deletes an existing Rules Engine Configuration with the specified parameters.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param rulesEngineName Name of the Rules Engine which is unique within the Front Door.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, frontDoorName: string, rulesEngineName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,frontDoorName,rulesEngineName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a new Rules Engine Configuration with the specified name within the specified Front
   * Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param rulesEngineName Name of the Rules Engine which is unique within the Front Door.
   * @param rulesEngineParameters Rules Engine Configuration properties needed to create a new Rules
   * Engine Configuration.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, frontDoorName: string, rulesEngineName: string, rulesEngineParameters: Models.RulesEngine, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        frontDoorName,
        rulesEngineName,
        rulesEngineParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes an existing Rules Engine Configuration with the specified parameters.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param rulesEngineName Name of the Rules Engine which is unique within the Front Door.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, frontDoorName: string, rulesEngineName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        frontDoorName,
        rulesEngineName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists all of the Rules Engine Configurations within a Front Door.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RulesEnginesListByFrontDoorNextResponse>
   */
  listByFrontDoorNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RulesEnginesListByFrontDoorNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByFrontDoorNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RulesEngineListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByFrontDoorNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RulesEngineListResult>): void;
  listByFrontDoorNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RulesEngineListResult>, callback?: msRest.ServiceCallback<Models.RulesEngineListResult>): Promise<Models.RulesEnginesListByFrontDoorNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByFrontDoorNextOperationSpec,
      callback) as Promise<Models.RulesEnginesListByFrontDoorNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByFrontDoorOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/rulesEngines",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RulesEngineListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/rulesEngines/{rulesEngineName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName,
    Parameters.rulesEngineName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RulesEngine
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/rulesEngines/{rulesEngineName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName,
    Parameters.rulesEngineName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "rulesEngineParameters",
    mapper: {
      ...Mappers.RulesEngine,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RulesEngine
    },
    201: {
      bodyMapper: Mappers.RulesEngine
    },
    202: {
      bodyMapper: Mappers.RulesEngine
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/rulesEngines/{rulesEngineName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName,
    Parameters.rulesEngineName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByFrontDoorNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.RulesEngineListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
