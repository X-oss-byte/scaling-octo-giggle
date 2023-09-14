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
import * as Mappers from "../models/secretValueOperationsMappers";
import * as Parameters from "../models/parameters";
import { ServiceFabricMeshManagementClientContext } from "../serviceFabricMeshManagementClientContext";

/** Class representing a SecretValueOperations. */
export class SecretValueOperations {
  private readonly client: ServiceFabricMeshManagementClientContext;

  /**
   * Create a SecretValueOperations.
   * @param {ServiceFabricMeshManagementClientContext} client Reference to the service client.
   */
  constructor(client: ServiceFabricMeshManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates a new value of the specified secret resource. The name of the value is typically the
   * version identifier. Once created the value cannot be changed.
   * @summary Adds the specified value as a new version of the specified secret resource.
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param secretValueResourceName The name of the secret resource value which is typically the
   * version identifier for the value.
   * @param secretValueResourceDescription Description for creating a value of a secret resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecretValueCreateResponse>
   */
  create(resourceGroupName: string, secretResourceName: string, secretValueResourceName: string, secretValueResourceDescription: Models.SecretValueResourceDescription, options?: msRest.RequestOptionsBase): Promise<Models.SecretValueCreateResponse>;
  /**
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param secretValueResourceName The name of the secret resource value which is typically the
   * version identifier for the value.
   * @param secretValueResourceDescription Description for creating a value of a secret resource.
   * @param callback The callback
   */
  create(resourceGroupName: string, secretResourceName: string, secretValueResourceName: string, secretValueResourceDescription: Models.SecretValueResourceDescription, callback: msRest.ServiceCallback<Models.SecretValueResourceDescription>): void;
  /**
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param secretValueResourceName The name of the secret resource value which is typically the
   * version identifier for the value.
   * @param secretValueResourceDescription Description for creating a value of a secret resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, secretResourceName: string, secretValueResourceName: string, secretValueResourceDescription: Models.SecretValueResourceDescription, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecretValueResourceDescription>): void;
  create(resourceGroupName: string, secretResourceName: string, secretValueResourceName: string, secretValueResourceDescription: Models.SecretValueResourceDescription, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecretValueResourceDescription>, callback?: msRest.ServiceCallback<Models.SecretValueResourceDescription>): Promise<Models.SecretValueCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        secretResourceName,
        secretValueResourceName,
        secretValueResourceDescription,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.SecretValueCreateResponse>;
  }

  /**
   * Get the information about the specified named secret value resources. The information does not
   * include the actual value of the secret.
   * @summary Gets the specified secret value resource.
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param secretValueResourceName The name of the secret resource value which is typically the
   * version identifier for the value.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecretValueGetResponse>
   */
  get(resourceGroupName: string, secretResourceName: string, secretValueResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.SecretValueGetResponse>;
  /**
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param secretValueResourceName The name of the secret resource value which is typically the
   * version identifier for the value.
   * @param callback The callback
   */
  get(resourceGroupName: string, secretResourceName: string, secretValueResourceName: string, callback: msRest.ServiceCallback<Models.SecretValueResourceDescription>): void;
  /**
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param secretValueResourceName The name of the secret resource value which is typically the
   * version identifier for the value.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, secretResourceName: string, secretValueResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecretValueResourceDescription>): void;
  get(resourceGroupName: string, secretResourceName: string, secretValueResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecretValueResourceDescription>, callback?: msRest.ServiceCallback<Models.SecretValueResourceDescription>): Promise<Models.SecretValueGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        secretResourceName,
        secretValueResourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SecretValueGetResponse>;
  }

  /**
   * Deletes the secret value resource identified by the name. The name of the resource is typically
   * the version associated with that value. Deletion will fail if the specified value is in use.
   * @summary Deletes the specified  value of the named secret resource.
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param secretValueResourceName The name of the secret resource value which is typically the
   * version identifier for the value.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, secretResourceName: string, secretValueResourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param secretValueResourceName The name of the secret resource value which is typically the
   * version identifier for the value.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, secretResourceName: string, secretValueResourceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param secretValueResourceName The name of the secret resource value which is typically the
   * version identifier for the value.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, secretResourceName: string, secretValueResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, secretResourceName: string, secretValueResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        secretResourceName,
        secretValueResourceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets information about all secret value resources of the specified secret resource. The
   * information includes the names of the secret value resources, but not the actual values.
   * @summary List names of all values of the the specified secret resource.
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecretValueListResponse>
   */
  list(resourceGroupName: string, secretResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.SecretValueListResponse>;
  /**
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param callback The callback
   */
  list(resourceGroupName: string, secretResourceName: string, callback: msRest.ServiceCallback<Models.SecretValueResourceDescriptionList>): void;
  /**
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, secretResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecretValueResourceDescriptionList>): void;
  list(resourceGroupName: string, secretResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecretValueResourceDescriptionList>, callback?: msRest.ServiceCallback<Models.SecretValueResourceDescriptionList>): Promise<Models.SecretValueListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        secretResourceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SecretValueListResponse>;
  }

  /**
   * Lists the decrypted value of the specified named value of the secret resource. This is a
   * privileged operation.
   * @summary Lists the specified value of the secret resource.
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param secretValueResourceName The name of the secret resource value which is typically the
   * version identifier for the value.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecretValueListValueResponse>
   */
  listValue(resourceGroupName: string, secretResourceName: string, secretValueResourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.SecretValueListValueResponse>;
  /**
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param secretValueResourceName The name of the secret resource value which is typically the
   * version identifier for the value.
   * @param callback The callback
   */
  listValue(resourceGroupName: string, secretResourceName: string, secretValueResourceName: string, callback: msRest.ServiceCallback<Models.SecretValue>): void;
  /**
   * @param resourceGroupName Azure resource group name
   * @param secretResourceName The name of the secret resource.
   * @param secretValueResourceName The name of the secret resource value which is typically the
   * version identifier for the value.
   * @param options The optional parameters
   * @param callback The callback
   */
  listValue(resourceGroupName: string, secretResourceName: string, secretValueResourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecretValue>): void;
  listValue(resourceGroupName: string, secretResourceName: string, secretValueResourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecretValue>, callback?: msRest.ServiceCallback<Models.SecretValue>): Promise<Models.SecretValueListValueResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        secretResourceName,
        secretValueResourceName,
        options
      },
      listValueOperationSpec,
      callback) as Promise<Models.SecretValueListValueResponse>;
  }

  /**
   * Gets information about all secret value resources of the specified secret resource. The
   * information includes the names of the secret value resources, but not the actual values.
   * @summary List names of all values of the the specified secret resource.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecretValueListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SecretValueListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SecretValueResourceDescriptionList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecretValueResourceDescriptionList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecretValueResourceDescriptionList>, callback?: msRest.ServiceCallback<Models.SecretValueResourceDescriptionList>): Promise<Models.SecretValueListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SecretValueListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets/{secretResourceName}/values/{secretValueResourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.secretResourceName,
    Parameters.secretValueResourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "secretValueResourceDescription",
    mapper: {
      ...Mappers.SecretValueResourceDescription,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SecretValueResourceDescription
    },
    201: {
      bodyMapper: Mappers.SecretValueResourceDescription
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets/{secretResourceName}/values/{secretValueResourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.secretResourceName,
    Parameters.secretValueResourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecretValueResourceDescription
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets/{secretResourceName}/values/{secretValueResourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.secretResourceName,
    Parameters.secretValueResourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets/{secretResourceName}/values",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.secretResourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecretValueResourceDescriptionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listValueOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabricMesh/secrets/{secretResourceName}/values/{secretValueResourceName}/list_value",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.secretResourceName,
    Parameters.secretValueResourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecretValue
    },
    default: {
      bodyMapper: Mappers.ErrorModel
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
      bodyMapper: Mappers.SecretValueResourceDescriptionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
