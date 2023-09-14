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
import { AppConfigurationManagementClient } from "../appConfigurationManagementClient";
import {
  PrivateLinkResource,
  PrivateLinkResourcesListByConfigurationStoreNextOptionalParams,
  PrivateLinkResourcesListByConfigurationStoreOptionalParams,
  PrivateLinkResourcesListByConfigurationStoreResponse,
  PrivateLinkResourcesGetOptionalParams,
  PrivateLinkResourcesGetResponse,
  PrivateLinkResourcesListByConfigurationStoreNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateLinkResources operations. */
export class PrivateLinkResourcesImpl implements PrivateLinkResources {
  private readonly client: AppConfigurationManagementClient;

  /**
   * Initialize a new instance of the class PrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: AppConfigurationManagementClient) {
    this.client = client;
  }

  /**
   * Gets the private link resources that need to be created for a configuration store.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param options The options parameters.
   */
  public listByConfigurationStore(
    resourceGroupName: string,
    configStoreName: string,
    options?: PrivateLinkResourcesListByConfigurationStoreOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource> {
    const iter = this.listByConfigurationStorePagingAll(
      resourceGroupName,
      configStoreName,
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
        return this.listByConfigurationStorePagingPage(
          resourceGroupName,
          configStoreName,
          options
        );
      }
    };
  }

  private async *listByConfigurationStorePagingPage(
    resourceGroupName: string,
    configStoreName: string,
    options?: PrivateLinkResourcesListByConfigurationStoreOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource[]> {
    let result = await this._listByConfigurationStore(
      resourceGroupName,
      configStoreName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByConfigurationStoreNext(
        resourceGroupName,
        configStoreName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByConfigurationStorePagingAll(
    resourceGroupName: string,
    configStoreName: string,
    options?: PrivateLinkResourcesListByConfigurationStoreOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource> {
    for await (const page of this.listByConfigurationStorePagingPage(
      resourceGroupName,
      configStoreName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the private link resources that need to be created for a configuration store.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param options The options parameters.
   */
  private _listByConfigurationStore(
    resourceGroupName: string,
    configStoreName: string,
    options?: PrivateLinkResourcesListByConfigurationStoreOptionalParams
  ): Promise<PrivateLinkResourcesListByConfigurationStoreResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, configStoreName, options },
      listByConfigurationStoreOperationSpec
    );
  }

  /**
   * Gets a private link resource that need to be created for a configuration store.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param groupName The name of the private link resource group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    configStoreName: string,
    groupName: string,
    options?: PrivateLinkResourcesGetOptionalParams
  ): Promise<PrivateLinkResourcesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, configStoreName, groupName, options },
      getOperationSpec
    );
  }

  /**
   * ListByConfigurationStoreNext
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param nextLink The nextLink from the previous successful call to the ListByConfigurationStore
   *                 method.
   * @param options The options parameters.
   */
  private _listByConfigurationStoreNext(
    resourceGroupName: string,
    configStoreName: string,
    nextLink: string,
    options?: PrivateLinkResourcesListByConfigurationStoreNextOptionalParams
  ): Promise<PrivateLinkResourcesListByConfigurationStoreNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, configStoreName, nextLink, options },
      listByConfigurationStoreNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByConfigurationStoreOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
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
    Parameters.configStoreName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/privateLinkResources/{groupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResource
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
    Parameters.configStoreName,
    Parameters.groupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByConfigurationStoreNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
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
    Parameters.configStoreName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
