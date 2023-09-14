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
import * as Mappers from "../models/projectsMappers";
import * as Parameters from "../models/parameters";
import { AzureMigrateContext } from "../azureMigrateContext";

/** Class representing a Projects. */
export class Projects {
  private readonly client: AzureMigrateContext;

  /**
   * Create a Projects.
   * @param {AzureMigrateContext} client Reference to the service client.
   */
  constructor(client: AzureMigrateContext) {
    this.client = client;
  }

  /**
   * Get all the projects in the subscription.
   * @summary Get all projects.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.ProjectsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.ProjectResultList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProjectResultList>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProjectResultList>, callback?: msRest.ServiceCallback<Models.ProjectResultList>): Promise<Models.ProjectsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.ProjectsListBySubscriptionResponse>;
  }

  /**
   * Get all the projects in the resource group.
   * @summary Get all projects.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProjectsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ProjectResultList>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProjectResultList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProjectResultList>, callback?: msRest.ServiceCallback<Models.ProjectResultList>): Promise<Models.ProjectsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ProjectsListByResourceGroupResponse>;
  }

  /**
   * Get the project with the specified name.
   * @summary Get the specified project.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsGetResponse>
   */
  get(resourceGroupName: string, projectName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProjectsGetResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param callback The callback
   */
  get(resourceGroupName: string, projectName: string, callback: msRest.ServiceCallback<Models.Project>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, projectName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Project>): void;
  get(resourceGroupName: string, projectName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Project>, callback?: msRest.ServiceCallback<Models.Project>): Promise<Models.ProjectsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ProjectsGetResponse>;
  }

  /**
   * Create a project with specified name. If a project already exists, update it.
   * @summary Create or update project.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsCreateResponse>
   */
  create(resourceGroupName: string, projectName: string, options?: Models.ProjectsCreateOptionalParams): Promise<Models.ProjectsCreateResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param callback The callback
   */
  create(resourceGroupName: string, projectName: string, callback: msRest.ServiceCallback<Models.Project>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, projectName: string, options: Models.ProjectsCreateOptionalParams, callback: msRest.ServiceCallback<Models.Project>): void;
  create(resourceGroupName: string, projectName: string, options?: Models.ProjectsCreateOptionalParams | msRest.ServiceCallback<Models.Project>, callback?: msRest.ServiceCallback<Models.Project>): Promise<Models.ProjectsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.ProjectsCreateResponse>;
  }

  /**
   * Update a project with specified name. Supports partial updates, for example only tags can be
   * provided.
   * @summary Update project.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsUpdateResponse>
   */
  update(resourceGroupName: string, projectName: string, options?: Models.ProjectsUpdateOptionalParams): Promise<Models.ProjectsUpdateResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param callback The callback
   */
  update(resourceGroupName: string, projectName: string, callback: msRest.ServiceCallback<Models.Project>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, projectName: string, options: Models.ProjectsUpdateOptionalParams, callback: msRest.ServiceCallback<Models.Project>): void;
  update(resourceGroupName: string, projectName: string, options?: Models.ProjectsUpdateOptionalParams | msRest.ServiceCallback<Models.Project>, callback?: msRest.ServiceCallback<Models.Project>): Promise<Models.ProjectsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ProjectsUpdateResponse>;
  }

  /**
   * Delete the project. Deleting non-existent project is a no-operation.
   * @summary Delete the project
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsDeleteResponse>
   */
  deleteMethod(resourceGroupName: string, projectName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProjectsDeleteResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, projectName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, projectName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, projectName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.ProjectsDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.ProjectsDeleteResponse>;
  }

  /**
   * Gets the Log Analytics Workspace ID and Primary Key for the specified project.
   * @summary Get shared keys for the project.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param [options] The optional parameters
   * @returns Promise<Models.ProjectsGetKeysResponse>
   */
  getKeys(resourceGroupName: string, projectName: string, options?: msRest.RequestOptionsBase): Promise<Models.ProjectsGetKeysResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param callback The callback
   */
  getKeys(resourceGroupName: string, projectName: string, callback: msRest.ServiceCallback<Models.ProjectKey>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The optional parameters
   * @param callback The callback
   */
  getKeys(resourceGroupName: string, projectName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProjectKey>): void;
  getKeys(resourceGroupName: string, projectName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProjectKey>, callback?: msRest.ServiceCallback<Models.ProjectKey>): Promise<Models.ProjectsGetKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        options
      },
      getKeysOperationSpec,
      callback) as Promise<Models.ProjectsGetKeysResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Migrate/projects",
  urlParameters: [
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
      bodyMapper: Mappers.ProjectResultList,
      headersMapper: Mappers.ProjectsListBySubscriptionHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/projects",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProjectResultList,
      headersMapper: Mappers.ProjectsListByResourceGroupHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Project,
      headersMapper: Mappers.ProjectsGetHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "project"
    ],
    mapper: Mappers.Project
  },
  responses: {
    200: {
      bodyMapper: Mappers.Project,
      headersMapper: Mappers.ProjectsCreateHeaders
    },
    201: {
      bodyMapper: Mappers.Project,
      headersMapper: Mappers.ProjectsCreateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "project"
    ],
    mapper: Mappers.Project
  },
  responses: {
    200: {
      bodyMapper: Mappers.Project,
      headersMapper: Mappers.ProjectsUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.ProjectsDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/keys",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProjectKey,
      headersMapper: Mappers.ProjectsGetKeysHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
