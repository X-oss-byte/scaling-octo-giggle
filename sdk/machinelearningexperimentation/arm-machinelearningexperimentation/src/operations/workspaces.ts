/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Workspaces } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MLTeamAccountManagementClient } from "../mLTeamAccountManagementClient";
import {
  Workspace,
  WorkspacesListByAccountsNextOptionalParams,
  WorkspacesListByAccountsOptionalParams,
  WorkspacesGetOptionalParams,
  WorkspacesGetResponse,
  WorkspacesCreateOrUpdateOptionalParams,
  WorkspacesCreateOrUpdateResponse,
  WorkspacesDeleteOptionalParams,
  WorkspaceUpdateParameters,
  WorkspacesUpdateOptionalParams,
  WorkspacesUpdateResponse,
  WorkspacesListByAccountsResponse,
  WorkspacesListByAccountsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Workspaces operations. */
export class WorkspacesImpl implements Workspaces {
  private readonly client: MLTeamAccountManagementClient;

  /**
   * Initialize a new instance of the class Workspaces class.
   * @param client Reference to the service client
   */
  constructor(client: MLTeamAccountManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the available machine learning workspaces under the specified team account.
   * @param accountName The name of the machine learning team account.
   * @param resourceGroupName The name of the resource group to which the machine learning team account
   *                          belongs.
   * @param options The options parameters.
   */
  public listByAccounts(
    accountName: string,
    resourceGroupName: string,
    options?: WorkspacesListByAccountsOptionalParams
  ): PagedAsyncIterableIterator<Workspace> {
    const iter = this.listByAccountsPagingAll(
      accountName,
      resourceGroupName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByAccountsPagingPage(
          accountName,
          resourceGroupName,
          options
        );
      }
    };
  }

  private async *listByAccountsPagingPage(
    accountName: string,
    resourceGroupName: string,
    options?: WorkspacesListByAccountsOptionalParams
  ): AsyncIterableIterator<Workspace[]> {
    let result = await this._listByAccounts(
      accountName,
      resourceGroupName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByAccountsNext(
        accountName,
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByAccountsPagingAll(
    accountName: string,
    resourceGroupName: string,
    options?: WorkspacesListByAccountsOptionalParams
  ): AsyncIterableIterator<Workspace> {
    for await (const page of this.listByAccountsPagingPage(
      accountName,
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the properties of the specified machine learning workspace.
   * @param resourceGroupName The name of the resource group to which the machine learning team account
   *                          belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    workspaceName: string,
    options?: WorkspacesGetOptionalParams
  ): Promise<WorkspacesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, workspaceName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a machine learning workspace with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the machine learning team account
   *                          belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param parameters The parameters for creating or updating a machine learning workspace.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    workspaceName: string,
    parameters: Workspace,
    options?: WorkspacesCreateOrUpdateOptionalParams
  ): Promise<WorkspacesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, workspaceName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a machine learning workspace.
   * @param resourceGroupName The name of the resource group to which the machine learning team account
   *                          belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    workspaceName: string,
    options?: WorkspacesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, workspaceName, options },
      deleteOperationSpec
    );
  }

  /**
   * Updates a machine learning workspace with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the machine learning team account
   *                          belongs.
   * @param accountName The name of the machine learning team account.
   * @param workspaceName The name of the machine learning team account workspace.
   * @param parameters The parameters for updating a machine learning workspace.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    workspaceName: string,
    parameters: WorkspaceUpdateParameters,
    options?: WorkspacesUpdateOptionalParams
  ): Promise<WorkspacesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, workspaceName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Lists all the available machine learning workspaces under the specified team account.
   * @param accountName The name of the machine learning team account.
   * @param resourceGroupName The name of the resource group to which the machine learning team account
   *                          belongs.
   * @param options The options parameters.
   */
  private _listByAccounts(
    accountName: string,
    resourceGroupName: string,
    options?: WorkspacesListByAccountsOptionalParams
  ): Promise<WorkspacesListByAccountsResponse> {
    return this.client.sendOperationRequest(
      { accountName, resourceGroupName, options },
      listByAccountsOperationSpec
    );
  }

  /**
   * ListByAccountsNext
   * @param accountName The name of the machine learning team account.
   * @param resourceGroupName The name of the resource group to which the machine learning team account
   *                          belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByAccounts method.
   * @param options The options parameters.
   */
  private _listByAccountsNext(
    accountName: string,
    resourceGroupName: string,
    nextLink: string,
    options?: WorkspacesListByAccountsNextOptionalParams
  ): Promise<WorkspacesListByAccountsNextResponse> {
    return this.client.sendOperationRequest(
      { accountName, resourceGroupName, nextLink, options },
      listByAccountsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}/workspaces/{workspaceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Workspace
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}/workspaces/{workspaceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Workspace
    },
    201: {
      bodyMapper: Mappers.Workspace
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}/workspaces/{workspaceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}/workspaces/{workspaceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Workspace
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByAccountsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningExperimentation/accounts/{accountName}/workspaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByAccountsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
