/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { Workspaces } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PowerBIEmbeddedManagementClient } from "../powerBIEmbeddedManagementClient";
import {
  Workspace,
  WorkspacesListOptionalParams,
  WorkspacesListResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Workspaces operations. */
export class WorkspacesImpl implements Workspaces {
  private readonly client: PowerBIEmbeddedManagementClient;

  /**
   * Initialize a new instance of the class Workspaces class.
   * @param client Reference to the service client
   */
  constructor(client: PowerBIEmbeddedManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves all existing Power BI workspaces in the specified workspace collection.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceCollectionName: string,
    options?: WorkspacesListOptionalParams
  ): PagedAsyncIterableIterator<Workspace> {
    const iter = this.listPagingAll(
      resourceGroupName,
      workspaceCollectionName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          workspaceCollectionName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceCollectionName: string,
    options?: WorkspacesListOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<Workspace[]> {
    let result: WorkspacesListResponse;
    result = await this._list(
      resourceGroupName,
      workspaceCollectionName,
      options
    );
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    workspaceCollectionName: string,
    options?: WorkspacesListOptionalParams
  ): AsyncIterableIterator<Workspace> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceCollectionName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves all existing Power BI workspaces in the specified workspace collection.
   * @param resourceGroupName Azure resource group
   * @param workspaceCollectionName Power BI Embedded Workspace Collection name
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceCollectionName: string,
    options?: WorkspacesListOptionalParams
  ): Promise<WorkspacesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceCollectionName, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}/workspaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceCollectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
