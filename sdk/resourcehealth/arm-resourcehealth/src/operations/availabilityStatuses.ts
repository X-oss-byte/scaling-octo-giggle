/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AvailabilityStatuses } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftResourceHealth } from "../microsoftResourceHealth";
import {
  AvailabilityStatus,
  AvailabilityStatusesListBySubscriptionIdNextOptionalParams,
  AvailabilityStatusesListBySubscriptionIdOptionalParams,
  AvailabilityStatusesListByResourceGroupNextOptionalParams,
  AvailabilityStatusesListByResourceGroupOptionalParams,
  AvailabilityStatusesListNextOptionalParams,
  AvailabilityStatusesListOptionalParams,
  AvailabilityStatusesListBySubscriptionIdResponse,
  AvailabilityStatusesListByResourceGroupResponse,
  AvailabilityStatusesGetByResourceOptionalParams,
  AvailabilityStatusesGetByResourceResponse,
  AvailabilityStatusesListResponse,
  AvailabilityStatusesListBySubscriptionIdNextResponse,
  AvailabilityStatusesListByResourceGroupNextResponse,
  AvailabilityStatusesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AvailabilityStatuses operations. */
export class AvailabilityStatusesImpl implements AvailabilityStatuses {
  private readonly client: MicrosoftResourceHealth;

  /**
   * Initialize a new instance of the class AvailabilityStatuses class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftResourceHealth) {
    this.client = client;
  }

  /**
   * Lists the current availability status for all the resources in the subscription. Use the nextLink
   * property in the response to get the next page of availability statuses.
   * @param options The options parameters.
   */
  public listBySubscriptionId(
    options?: AvailabilityStatusesListBySubscriptionIdOptionalParams
  ): PagedAsyncIterableIterator<AvailabilityStatus> {
    const iter = this.listBySubscriptionIdPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionIdPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionIdPagingPage(
    options?: AvailabilityStatusesListBySubscriptionIdOptionalParams
  ): AsyncIterableIterator<AvailabilityStatus[]> {
    let result = await this._listBySubscriptionId(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionIdNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionIdPagingAll(
    options?: AvailabilityStatusesListBySubscriptionIdOptionalParams
  ): AsyncIterableIterator<AvailabilityStatus> {
    for await (const page of this.listBySubscriptionIdPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists the current availability status for all the resources in the resource group. Use the nextLink
   * property in the response to get the next page of availability statuses.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: AvailabilityStatusesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<AvailabilityStatus> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: AvailabilityStatusesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<AvailabilityStatus[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: AvailabilityStatusesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<AvailabilityStatus> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all historical availability transitions and impacting events for a single resource. Use the
   * nextLink property in the response to get the next page of availability status
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API support not nested and one nesting level resource types :
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   *                    and
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param options The options parameters.
   */
  public list(
    resourceUri: string,
    options?: AvailabilityStatusesListOptionalParams
  ): PagedAsyncIterableIterator<AvailabilityStatus> {
    const iter = this.listPagingAll(resourceUri, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceUri, options);
      }
    };
  }

  private async *listPagingPage(
    resourceUri: string,
    options?: AvailabilityStatusesListOptionalParams
  ): AsyncIterableIterator<AvailabilityStatus[]> {
    let result = await this._list(resourceUri, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(resourceUri, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceUri: string,
    options?: AvailabilityStatusesListOptionalParams
  ): AsyncIterableIterator<AvailabilityStatus> {
    for await (const page of this.listPagingPage(resourceUri, options)) {
      yield* page;
    }
  }

  /**
   * Lists the current availability status for all the resources in the subscription. Use the nextLink
   * property in the response to get the next page of availability statuses.
   * @param options The options parameters.
   */
  private _listBySubscriptionId(
    options?: AvailabilityStatusesListBySubscriptionIdOptionalParams
  ): Promise<AvailabilityStatusesListBySubscriptionIdResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionIdOperationSpec
    );
  }

  /**
   * Lists the current availability status for all the resources in the resource group. Use the nextLink
   * property in the response to get the next page of availability statuses.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: AvailabilityStatusesListByResourceGroupOptionalParams
  ): Promise<AvailabilityStatusesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets current availability status for a single resource
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API support not nested and one nesting level resource types :
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   *                    and
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param options The options parameters.
   */
  getByResource(
    resourceUri: string,
    options?: AvailabilityStatusesGetByResourceOptionalParams
  ): Promise<AvailabilityStatusesGetByResourceResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      getByResourceOperationSpec
    );
  }

  /**
   * Lists all historical availability transitions and impacting events for a single resource. Use the
   * nextLink property in the response to get the next page of availability status
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API support not nested and one nesting level resource types :
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   *                    and
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param options The options parameters.
   */
  private _list(
    resourceUri: string,
    options?: AvailabilityStatusesListOptionalParams
  ): Promise<AvailabilityStatusesListResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listOperationSpec
    );
  }

  /**
   * ListBySubscriptionIdNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscriptionId method.
   * @param options The options parameters.
   */
  private _listBySubscriptionIdNext(
    nextLink: string,
    options?: AvailabilityStatusesListBySubscriptionIdNextOptionalParams
  ): Promise<AvailabilityStatusesListBySubscriptionIdNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionIdNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: AvailabilityStatusesListByResourceGroupNextOptionalParams
  ): Promise<AvailabilityStatusesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API support not nested and one nesting level resource types :
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   *                    and
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceUri: string,
    nextLink: string,
    options?: AvailabilityStatusesListNextOptionalParams
  ): Promise<AvailabilityStatusesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/availabilityStatuses",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceHealth/availabilityStatuses",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getByResourceOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.ResourceHealth/availabilityStatuses/current",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.ResourceHealth/availabilityStatuses",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionIdNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilityStatusListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.expand
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
