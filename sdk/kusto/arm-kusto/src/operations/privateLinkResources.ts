/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { KustoManagementClient } from "../kustoManagementClient";
import {
  PrivateLinkResource,
  PrivateLinkResourcesListOptionalParams,
  PrivateLinkResourcesListResponse,
  PrivateLinkResourcesGetOptionalParams,
  PrivateLinkResourcesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateLinkResources operations. */
export class PrivateLinkResourcesImpl implements PrivateLinkResources {
  private readonly client: KustoManagementClient;

  /**
   * Initialize a new instance of the class PrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: KustoManagementClient) {
    this.client = client;
  }

  /**
   * Returns the list of private link resources.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    clusterName: string,
    options?: PrivateLinkResourcesListOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource> {
    const iter = this.listPagingAll(resourceGroupName, clusterName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, clusterName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    clusterName: string,
    options?: PrivateLinkResourcesListOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource[]> {
    let result = await this._list(resourceGroupName, clusterName, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    clusterName: string,
    options?: PrivateLinkResourcesListOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      clusterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns the list of private link resources.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    clusterName: string,
    options?: PrivateLinkResourcesListOptionalParams
  ): Promise<PrivateLinkResourcesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      listOperationSpec
    );
  }

  /**
   * Gets a private link resource.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param privateLinkResourceName The name of the private link resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    privateLinkResourceName: string,
    options?: PrivateLinkResourcesGetOptionalParams
  ): Promise<PrivateLinkResourcesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, privateLinkResourceName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/privateLinkResources/{privateLinkResourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId,
    Parameters.privateLinkResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
