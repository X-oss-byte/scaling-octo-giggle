/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ApiVersionSet } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  ApiVersionSetContract,
  ApiVersionSetListByServiceNextOptionalParams,
  ApiVersionSetListByServiceOptionalParams,
  ApiVersionSetListByServiceResponse,
  ApiVersionSetGetEntityTagOptionalParams,
  ApiVersionSetGetEntityTagResponse,
  ApiVersionSetGetOptionalParams,
  ApiVersionSetGetResponse,
  ApiVersionSetCreateOrUpdateOptionalParams,
  ApiVersionSetCreateOrUpdateResponse,
  ApiVersionSetUpdateParameters,
  ApiVersionSetUpdateOptionalParams,
  ApiVersionSetUpdateResponse,
  ApiVersionSetDeleteOptionalParams,
  ApiVersionSetListByServiceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApiVersionSet operations. */
export class ApiVersionSetImpl implements ApiVersionSet {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class ApiVersionSet class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of API Version Sets in the specified service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiVersionSetListByServiceOptionalParams
  ): PagedAsyncIterableIterator<ApiVersionSetContract> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      serviceName,
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
        return this.listByServicePagingPage(
          resourceGroupName,
          serviceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiVersionSetListByServiceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ApiVersionSetContract[]> {
    let result: ApiVersionSetListByServiceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByService(
        resourceGroupName,
        serviceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServiceNext(
        resourceGroupName,
        serviceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServicePagingAll(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiVersionSetListByServiceOptionalParams
  ): AsyncIterableIterator<ApiVersionSetContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of API Version Sets in the specified service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiVersionSetListByServiceOptionalParams
  ): Promise<ApiVersionSetListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listByServiceOperationSpec
    );
  }

  /**
   * Gets the entity state (Etag) version of the Api Version Set specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management service
   *                     instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    versionSetId: string,
    options?: ApiVersionSetGetEntityTagOptionalParams
  ): Promise<ApiVersionSetGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, versionSetId, options },
      getEntityTagOperationSpec
    );
  }

  /**
   * Gets the details of the Api Version Set specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management service
   *                     instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    versionSetId: string,
    options?: ApiVersionSetGetOptionalParams
  ): Promise<ApiVersionSetGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, versionSetId, options },
      getOperationSpec
    );
  }

  /**
   * Creates or Updates a Api Version Set.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management service
   *                     instance.
   * @param parameters Create or update parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    versionSetId: string,
    parameters: ApiVersionSetContract,
    options?: ApiVersionSetCreateOrUpdateOptionalParams
  ): Promise<ApiVersionSetCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, versionSetId, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Updates the details of the Api VersionSet specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management service
   *                     instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    versionSetId: string,
    ifMatch: string,
    parameters: ApiVersionSetUpdateParameters,
    options?: ApiVersionSetUpdateOptionalParams
  ): Promise<ApiVersionSetUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        versionSetId,
        ifMatch,
        parameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Deletes specific Api Version Set.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param versionSetId Api Version Set identifier. Must be unique in the current API Management service
   *                     instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    versionSetId: string,
    ifMatch: string,
    options?: ApiVersionSetDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, versionSetId, ifMatch, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: ApiVersionSetListByServiceNextOptionalParams
  ): Promise<ApiVersionSetListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listByServiceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apiVersionSets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiVersionSetCollection
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
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apiVersionSets/{versionSetId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.ApiVersionSetGetEntityTagHeaders
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
    Parameters.versionSetId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apiVersionSets/{versionSetId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiVersionSetContract,
      headersMapper: Mappers.ApiVersionSetGetHeaders
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
    Parameters.versionSetId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apiVersionSets/{versionSetId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApiVersionSetContract,
      headersMapper: Mappers.ApiVersionSetCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.ApiVersionSetContract,
      headersMapper: Mappers.ApiVersionSetCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters14,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.versionSetId
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apiVersionSets/{versionSetId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ApiVersionSetContract,
      headersMapper: Mappers.ApiVersionSetUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters15,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.versionSetId
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apiVersionSets/{versionSetId}",
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
    Parameters.versionSetId
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiVersionSetCollection
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
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
