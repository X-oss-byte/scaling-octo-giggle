/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { WorkspaceSkus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningWorkspaces } from "../azureMachineLearningWorkspaces";
import {
  WorkspaceSku,
  WorkspaceSkusListNextOptionalParams,
  WorkspaceSkusListOptionalParams,
  WorkspaceSkusListResponse,
  WorkspaceSkusListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspaceSkus operations. */
export class WorkspaceSkusImpl implements WorkspaceSkus {
  private readonly client: AzureMachineLearningWorkspaces;

  /**
   * Initialize a new instance of the class WorkspaceSkus class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningWorkspaces) {
    this.client = client;
  }

  /**
   * Lists all skus with associated features
   * @param options The options parameters.
   */
  public list(
    options?: WorkspaceSkusListOptionalParams
  ): PagedAsyncIterableIterator<WorkspaceSku> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: WorkspaceSkusListOptionalParams
  ): AsyncIterableIterator<WorkspaceSku[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: WorkspaceSkusListOptionalParams
  ): AsyncIterableIterator<WorkspaceSku> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all skus with associated features
   * @param options The options parameters.
   */
  private _list(
    options?: WorkspaceSkusListOptionalParams
  ): Promise<WorkspaceSkusListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: WorkspaceSkusListNextOptionalParams
  ): Promise<WorkspaceSkusListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.MachineLearningServices/workspaces/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SkuListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SkuListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};