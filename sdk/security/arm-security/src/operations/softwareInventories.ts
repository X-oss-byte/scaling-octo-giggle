/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SoftwareInventories } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  Software,
  SoftwareInventoriesListByExtendedResourceNextOptionalParams,
  SoftwareInventoriesListByExtendedResourceOptionalParams,
  SoftwareInventoriesListBySubscriptionNextOptionalParams,
  SoftwareInventoriesListBySubscriptionOptionalParams,
  SoftwareInventoriesListByExtendedResourceResponse,
  SoftwareInventoriesListBySubscriptionResponse,
  SoftwareInventoriesGetOptionalParams,
  SoftwareInventoriesGetResponse,
  SoftwareInventoriesListByExtendedResourceNextResponse,
  SoftwareInventoriesListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SoftwareInventories operations. */
export class SoftwareInventoriesImpl implements SoftwareInventories {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class SoftwareInventories class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Gets the software inventory of the virtual machine.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param resourceNamespace The namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param options The options parameters.
   */
  public listByExtendedResource(
    resourceGroupName: string,
    resourceNamespace: string,
    resourceType: string,
    resourceName: string,
    options?: SoftwareInventoriesListByExtendedResourceOptionalParams
  ): PagedAsyncIterableIterator<Software> {
    const iter = this.listByExtendedResourcePagingAll(
      resourceGroupName,
      resourceNamespace,
      resourceType,
      resourceName,
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
        return this.listByExtendedResourcePagingPage(
          resourceGroupName,
          resourceNamespace,
          resourceType,
          resourceName,
          options
        );
      }
    };
  }

  private async *listByExtendedResourcePagingPage(
    resourceGroupName: string,
    resourceNamespace: string,
    resourceType: string,
    resourceName: string,
    options?: SoftwareInventoriesListByExtendedResourceOptionalParams
  ): AsyncIterableIterator<Software[]> {
    let result = await this._listByExtendedResource(
      resourceGroupName,
      resourceNamespace,
      resourceType,
      resourceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByExtendedResourceNext(
        resourceGroupName,
        resourceNamespace,
        resourceType,
        resourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByExtendedResourcePagingAll(
    resourceGroupName: string,
    resourceNamespace: string,
    resourceType: string,
    resourceName: string,
    options?: SoftwareInventoriesListByExtendedResourceOptionalParams
  ): AsyncIterableIterator<Software> {
    for await (const page of this.listByExtendedResourcePagingPage(
      resourceGroupName,
      resourceNamespace,
      resourceType,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the software inventory of all virtual machines in the subscriptions.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: SoftwareInventoriesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Software> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: SoftwareInventoriesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Software[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: SoftwareInventoriesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<Software> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the software inventory of the virtual machine.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param resourceNamespace The namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param options The options parameters.
   */
  private _listByExtendedResource(
    resourceGroupName: string,
    resourceNamespace: string,
    resourceType: string,
    resourceName: string,
    options?: SoftwareInventoriesListByExtendedResourceOptionalParams
  ): Promise<SoftwareInventoriesListByExtendedResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceNamespace,
        resourceType,
        resourceName,
        options
      },
      listByExtendedResourceOperationSpec
    );
  }

  /**
   * Gets the software inventory of all virtual machines in the subscriptions.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: SoftwareInventoriesListBySubscriptionOptionalParams
  ): Promise<SoftwareInventoriesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Gets a single software data of the virtual machine.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param resourceNamespace The namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param softwareName Name of the installed software.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceNamespace: string,
    resourceType: string,
    resourceName: string,
    softwareName: string,
    options?: SoftwareInventoriesGetOptionalParams
  ): Promise<SoftwareInventoriesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceNamespace,
        resourceType,
        resourceName,
        softwareName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * ListByExtendedResourceNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param resourceNamespace The namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param nextLink The nextLink from the previous successful call to the ListByExtendedResource method.
   * @param options The options parameters.
   */
  private _listByExtendedResourceNext(
    resourceGroupName: string,
    resourceNamespace: string,
    resourceType: string,
    resourceName: string,
    nextLink: string,
    options?: SoftwareInventoriesListByExtendedResourceNextOptionalParams
  ): Promise<SoftwareInventoriesListByExtendedResourceNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceNamespace,
        resourceType,
        resourceName,
        nextLink,
        options
      },
      listByExtendedResourceNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: SoftwareInventoriesListBySubscriptionNextOptionalParams
  ): Promise<SoftwareInventoriesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByExtendedResourceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/softwareInventories",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SoftwaresList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion16],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceNamespace,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/softwareInventories",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SoftwaresList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion16],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/softwareInventories/{softwareName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Software
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion16],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceNamespace,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.softwareName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByExtendedResourceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SoftwaresList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion16],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.resourceNamespace,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SoftwaresList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion16],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
