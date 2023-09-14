/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ProductApi } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  ApiContract,
  ProductApiListByProductNextOptionalParams,
  ProductApiListByProductOptionalParams,
  ProductApiListByProductResponse,
  ProductApiCheckEntityExistsOptionalParams,
  ProductApiCheckEntityExistsResponse,
  ProductApiCreateOrUpdateOptionalParams,
  ProductApiCreateOrUpdateResponse,
  ProductApiDeleteOptionalParams,
  ProductApiListByProductNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ProductApi operations. */
export class ProductApiImpl implements ProductApi {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class ProductApi class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of the APIs associated with a product.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  public listByProduct(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductApiListByProductOptionalParams
  ): PagedAsyncIterableIterator<ApiContract> {
    const iter = this.listByProductPagingAll(
      resourceGroupName,
      serviceName,
      productId,
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
        return this.listByProductPagingPage(
          resourceGroupName,
          serviceName,
          productId,
          options,
          settings
        );
      }
    };
  }

  private async *listByProductPagingPage(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductApiListByProductOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ApiContract[]> {
    let result: ProductApiListByProductResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByProduct(
        resourceGroupName,
        serviceName,
        productId,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByProductNext(
        resourceGroupName,
        serviceName,
        productId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByProductPagingAll(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductApiListByProductOptionalParams
  ): AsyncIterableIterator<ApiContract> {
    for await (const page of this.listByProductPagingPage(
      resourceGroupName,
      serviceName,
      productId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of the APIs associated with a product.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  private _listByProduct(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductApiListByProductOptionalParams
  ): Promise<ProductApiListByProductResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, productId, options },
      listByProductOperationSpec
    );
  }

  /**
   * Checks that API entity specified by identifier is associated with the Product entity.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  checkEntityExists(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    apiId: string,
    options?: ProductApiCheckEntityExistsOptionalParams
  ): Promise<ProductApiCheckEntityExistsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, productId, apiId, options },
      checkEntityExistsOperationSpec
    );
  }

  /**
   * Adds an API to the specified product.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    apiId: string,
    options?: ProductApiCreateOrUpdateOptionalParams
  ): Promise<ProductApiCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, productId, apiId, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes the specified API from the specified product.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    apiId: string,
    options?: ProductApiDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, productId, apiId, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByProductNext
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param nextLink The nextLink from the previous successful call to the ListByProduct method.
   * @param options The options parameters.
   */
  private _listByProductNext(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    nextLink: string,
    options?: ProductApiListByProductNextOptionalParams
  ): Promise<ProductApiListByProductNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, productId, nextLink, options },
      listByProductNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProductOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/apis",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.productId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkEntityExistsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/apis/{apiId}",
  httpMethod: "HEAD",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.productId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/apis/{apiId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApiContract
    },
    201: {
      bodyMapper: Mappers.ApiContract
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.productId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/apis/{apiId}",
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
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.productId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByProductNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.productId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
