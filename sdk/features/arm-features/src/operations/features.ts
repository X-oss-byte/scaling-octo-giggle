/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Features } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { FeatureClientContext } from "../featureClientContext";
import {
  FeatureResult,
  FeaturesListAllNextOptionalParams,
  FeaturesListAllOptionalParams,
  FeaturesListNextOptionalParams,
  FeaturesListOptionalParams,
  FeaturesListAllResponse,
  FeaturesListResponse,
  FeaturesGetOptionalParams,
  FeaturesGetResponse,
  FeaturesRegisterOptionalParams,
  FeaturesRegisterResponse,
  FeaturesUnregisterOptionalParams,
  FeaturesUnregisterResponse,
  FeaturesListAllNextResponse,
  FeaturesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a Features. */
export class FeaturesImpl implements Features {
  private readonly client: FeatureClientContext;

  /**
   * Initialize a new instance of the class Features class.
   * @param client Reference to the service client
   */
  constructor(client: FeatureClientContext) {
    this.client = client;
  }

  /**
   * Gets all the preview features that are available through AFEC for the subscription.
   * @param options The options parameters.
   */
  public listAll(
    options?: FeaturesListAllOptionalParams
  ): PagedAsyncIterableIterator<FeatureResult> {
    const iter = this.listAllPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAllPagingPage(options);
      }
    };
  }

  private async *listAllPagingPage(
    options?: FeaturesListAllOptionalParams
  ): AsyncIterableIterator<FeatureResult[]> {
    let result = await this._listAll(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAllNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAllPagingAll(
    options?: FeaturesListAllOptionalParams
  ): AsyncIterableIterator<FeatureResult> {
    for await (const page of this.listAllPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets all the preview features in a provider namespace that are available through AFEC for the
   * subscription.
   * @param resourceProviderNamespace The namespace of the resource provider for getting features.
   * @param options The options parameters.
   */
  public list(
    resourceProviderNamespace: string,
    options?: FeaturesListOptionalParams
  ): PagedAsyncIterableIterator<FeatureResult> {
    const iter = this.listPagingAll(resourceProviderNamespace, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceProviderNamespace, options);
      }
    };
  }

  private async *listPagingPage(
    resourceProviderNamespace: string,
    options?: FeaturesListOptionalParams
  ): AsyncIterableIterator<FeatureResult[]> {
    let result = await this._list(resourceProviderNamespace, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceProviderNamespace,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceProviderNamespace: string,
    options?: FeaturesListOptionalParams
  ): AsyncIterableIterator<FeatureResult> {
    for await (const page of this.listPagingPage(
      resourceProviderNamespace,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all the preview features that are available through AFEC for the subscription.
   * @param options The options parameters.
   */
  private _listAll(
    options?: FeaturesListAllOptionalParams
  ): Promise<FeaturesListAllResponse> {
    return this.client.sendOperationRequest({ options }, listAllOperationSpec);
  }

  /**
   * Gets all the preview features in a provider namespace that are available through AFEC for the
   * subscription.
   * @param resourceProviderNamespace The namespace of the resource provider for getting features.
   * @param options The options parameters.
   */
  private _list(
    resourceProviderNamespace: string,
    options?: FeaturesListOptionalParams
  ): Promise<FeaturesListResponse> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, options },
      listOperationSpec
    );
  }

  /**
   * Gets the preview feature with the specified name.
   * @param resourceProviderNamespace The resource provider namespace for the feature.
   * @param featureName The name of the feature to get.
   * @param options The options parameters.
   */
  get(
    resourceProviderNamespace: string,
    featureName: string,
    options?: FeaturesGetOptionalParams
  ): Promise<FeaturesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, featureName, options },
      getOperationSpec
    );
  }

  /**
   * Registers the preview feature for the subscription.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param featureName The name of the feature to register.
   * @param options The options parameters.
   */
  register(
    resourceProviderNamespace: string,
    featureName: string,
    options?: FeaturesRegisterOptionalParams
  ): Promise<FeaturesRegisterResponse> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, featureName, options },
      registerOperationSpec
    );
  }

  /**
   * Unregisters the preview feature for the subscription.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param featureName The name of the feature to unregister.
   * @param options The options parameters.
   */
  unregister(
    resourceProviderNamespace: string,
    featureName: string,
    options?: FeaturesUnregisterOptionalParams
  ): Promise<FeaturesUnregisterResponse> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, featureName, options },
      unregisterOperationSpec
    );
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  private _listAllNext(
    nextLink: string,
    options?: FeaturesListAllNextOptionalParams
  ): Promise<FeaturesListAllNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAllNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceProviderNamespace The namespace of the resource provider for getting features.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceProviderNamespace: string,
    nextLink: string,
    options?: FeaturesListNextOptionalParams
  ): Promise<FeaturesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listAllOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Features/features",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FeatureOperationsListResult
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
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FeatureOperationsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features/{featureName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FeatureResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace,
    Parameters.featureName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const registerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features/{featureName}/register",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.FeatureResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace,
    Parameters.featureName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const unregisterOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features/{featureName}/unregister",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.FeatureResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace,
    Parameters.featureName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAllNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FeatureOperationsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FeatureOperationsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace
  ],
  headerParameters: [Parameters.accept],
  serializer
};
