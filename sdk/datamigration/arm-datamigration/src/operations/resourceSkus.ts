/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ResourceSkus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataMigrationManagementClient } from "../dataMigrationManagementClient";
import {
  ResourceSku,
  ResourceSkusListSkusNextOptionalParams,
  ResourceSkusListSkusOptionalParams,
  ResourceSkusListSkusResponse,
  ResourceSkusListSkusNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ResourceSkus operations. */
export class ResourceSkusImpl implements ResourceSkus {
  private readonly client: DataMigrationManagementClient;

  /**
   * Initialize a new instance of the class ResourceSkus class.
   * @param client Reference to the service client
   */
  constructor(client: DataMigrationManagementClient) {
    this.client = client;
  }

  /**
   * The skus action returns the list of SKUs that DMS supports.
   * @param options The options parameters.
   */
  public listSkus(
    options?: ResourceSkusListSkusOptionalParams
  ): PagedAsyncIterableIterator<ResourceSku> {
    const iter = this.listSkusPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listSkusPagingPage(options);
      }
    };
  }

  private async *listSkusPagingPage(
    options?: ResourceSkusListSkusOptionalParams
  ): AsyncIterableIterator<ResourceSku[]> {
    let result = await this._listSkus(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listSkusNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listSkusPagingAll(
    options?: ResourceSkusListSkusOptionalParams
  ): AsyncIterableIterator<ResourceSku> {
    for await (const page of this.listSkusPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * The skus action returns the list of SKUs that DMS supports.
   * @param options The options parameters.
   */
  private _listSkus(
    options?: ResourceSkusListSkusOptionalParams
  ): Promise<ResourceSkusListSkusResponse> {
    return this.client.sendOperationRequest({ options }, listSkusOperationSpec);
  }

  /**
   * ListSkusNext
   * @param nextLink The nextLink from the previous successful call to the ListSkus method.
   * @param options The options parameters.
   */
  private _listSkusNext(
    nextLink: string,
    options?: ResourceSkusListSkusNextOptionalParams
  ): Promise<ResourceSkusListSkusNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listSkusNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listSkusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSkusResult
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listSkusNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSkusResult
    },
    default: {
      bodyMapper: Mappers.ApiError
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
