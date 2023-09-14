/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { TemplateSpecVersions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { TemplateSpecsClient } from "../templateSpecsClient";
import {
  TemplateSpecVersion,
  TemplateSpecVersionsListNextOptionalParams,
  TemplateSpecVersionsListOptionalParams,
  TemplateSpecVersionsListResponse,
  TemplateSpecVersionsCreateOrUpdateOptionalParams,
  TemplateSpecVersionsCreateOrUpdateResponse,
  TemplateSpecVersionsUpdateOptionalParams,
  TemplateSpecVersionsUpdateResponse,
  TemplateSpecVersionsGetOptionalParams,
  TemplateSpecVersionsGetResponse,
  TemplateSpecVersionsDeleteOptionalParams,
  TemplateSpecVersionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing TemplateSpecVersions operations. */
export class TemplateSpecVersionsImpl implements TemplateSpecVersions {
  private readonly client: TemplateSpecsClient;

  /**
   * Initialize a new instance of the class TemplateSpecVersions class.
   * @param client Reference to the service client
   */
  constructor(client: TemplateSpecsClient) {
    this.client = client;
  }

  /**
   * Lists all the Template Spec versions in the specified Template Spec.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param templateSpecName Name of the Template Spec.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    templateSpecName: string,
    options?: TemplateSpecVersionsListOptionalParams
  ): PagedAsyncIterableIterator<TemplateSpecVersion> {
    const iter = this.listPagingAll(
      resourceGroupName,
      templateSpecName,
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
          templateSpecName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    templateSpecName: string,
    options?: TemplateSpecVersionsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<TemplateSpecVersion[]> {
    let result: TemplateSpecVersionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, templateSpecName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        templateSpecName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    templateSpecName: string,
    options?: TemplateSpecVersionsListOptionalParams
  ): AsyncIterableIterator<TemplateSpecVersion> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      templateSpecName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates or updates a Template Spec version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param templateSpecName Name of the Template Spec.
   * @param templateSpecVersion The version of the Template Spec.
   * @param templateSpecVersionModel Template Spec Version supplied to the operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    templateSpecName: string,
    templateSpecVersion: string,
    templateSpecVersionModel: TemplateSpecVersion,
    options?: TemplateSpecVersionsCreateOrUpdateOptionalParams
  ): Promise<TemplateSpecVersionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        templateSpecName,
        templateSpecVersion,
        templateSpecVersionModel,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Updates Template Spec Version tags with specified values.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param templateSpecName Name of the Template Spec.
   * @param templateSpecVersion The version of the Template Spec.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    templateSpecName: string,
    templateSpecVersion: string,
    options?: TemplateSpecVersionsUpdateOptionalParams
  ): Promise<TemplateSpecVersionsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, templateSpecName, templateSpecVersion, options },
      updateOperationSpec
    );
  }

  /**
   * Gets a Template Spec version from a specific Template Spec.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param templateSpecName Name of the Template Spec.
   * @param templateSpecVersion The version of the Template Spec.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    templateSpecName: string,
    templateSpecVersion: string,
    options?: TemplateSpecVersionsGetOptionalParams
  ): Promise<TemplateSpecVersionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, templateSpecName, templateSpecVersion, options },
      getOperationSpec
    );
  }

  /**
   * Deletes a specific version from a Template Spec. When operation completes, status code 200 returned
   * without content.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param templateSpecName Name of the Template Spec.
   * @param templateSpecVersion The version of the Template Spec.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    templateSpecName: string,
    templateSpecVersion: string,
    options?: TemplateSpecVersionsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, templateSpecName, templateSpecVersion, options },
      deleteOperationSpec
    );
  }

  /**
   * Lists all the Template Spec versions in the specified Template Spec.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param templateSpecName Name of the Template Spec.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    templateSpecName: string,
    options?: TemplateSpecVersionsListOptionalParams
  ): Promise<TemplateSpecVersionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, templateSpecName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param templateSpecName Name of the Template Spec.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    templateSpecName: string,
    nextLink: string,
    options?: TemplateSpecVersionsListNextOptionalParams
  ): Promise<TemplateSpecVersionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, templateSpecName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Resources/templateSpecs/{templateSpecName}/versions/{templateSpecVersion}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TemplateSpecVersion
    },
    201: {
      bodyMapper: Mappers.TemplateSpecVersion
    },
    default: {
      bodyMapper: Mappers.TemplateSpecsError
    }
  },
  requestBody: Parameters.templateSpecVersionModel,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.templateSpecName,
    Parameters.templateSpecVersion
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Resources/templateSpecs/{templateSpecName}/versions/{templateSpecVersion}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.TemplateSpecVersion
    },
    default: {
      bodyMapper: Mappers.TemplateSpecsError
    }
  },
  requestBody: Parameters.templateSpecVersionUpdateModel,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.templateSpecName,
    Parameters.templateSpecVersion
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Resources/templateSpecs/{templateSpecName}/versions/{templateSpecVersion}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TemplateSpecVersion
    },
    default: {
      bodyMapper: Mappers.TemplateSpecsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.templateSpecName,
    Parameters.templateSpecVersion
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Resources/templateSpecs/{templateSpecName}/versions/{templateSpecVersion}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.TemplateSpecsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.templateSpecName,
    Parameters.templateSpecVersion
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Resources/templateSpecs/{templateSpecName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TemplateSpecVersionsListResult
    },
    default: {
      bodyMapper: Mappers.TemplateSpecsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.templateSpecName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TemplateSpecVersionsListResult
    },
    default: {
      bodyMapper: Mappers.TemplateSpecsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.templateSpecName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
