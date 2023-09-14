/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DigitalTwins } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureDigitalTwinsManagementClient } from "../azureDigitalTwinsManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DigitalTwinsDescription,
  DigitalTwinsListNextOptionalParams,
  DigitalTwinsListOptionalParams,
  DigitalTwinsListByResourceGroupNextOptionalParams,
  DigitalTwinsListByResourceGroupOptionalParams,
  DigitalTwinsGetOptionalParams,
  DigitalTwinsGetResponse,
  DigitalTwinsCreateOrUpdateOptionalParams,
  DigitalTwinsCreateOrUpdateResponse,
  DigitalTwinsPatchDescription,
  DigitalTwinsUpdateOptionalParams,
  DigitalTwinsUpdateResponse,
  DigitalTwinsDeleteOptionalParams,
  DigitalTwinsDeleteResponse,
  DigitalTwinsListResponse,
  DigitalTwinsListByResourceGroupResponse,
  CheckNameRequest,
  DigitalTwinsCheckNameAvailabilityOptionalParams,
  DigitalTwinsCheckNameAvailabilityResponse,
  DigitalTwinsListNextResponse,
  DigitalTwinsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DigitalTwins operations. */
export class DigitalTwinsImpl implements DigitalTwins {
  private readonly client: AzureDigitalTwinsManagementClient;

  /**
   * Initialize a new instance of the class DigitalTwins class.
   * @param client Reference to the service client
   */
  constructor(client: AzureDigitalTwinsManagementClient) {
    this.client = client;
  }

  /**
   * Get all the DigitalTwinsInstances in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: DigitalTwinsListOptionalParams
  ): PagedAsyncIterableIterator<DigitalTwinsDescription> {
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
    options?: DigitalTwinsListOptionalParams
  ): AsyncIterableIterator<DigitalTwinsDescription[]> {
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
    options?: DigitalTwinsListOptionalParams
  ): AsyncIterableIterator<DigitalTwinsDescription> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get all the DigitalTwinsInstances in a resource group.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DigitalTwinsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DigitalTwinsDescription> {
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
    options?: DigitalTwinsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DigitalTwinsDescription[]> {
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
    options?: DigitalTwinsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DigitalTwinsDescription> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get DigitalTwinsInstances resource.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: DigitalTwinsGetOptionalParams
  ): Promise<DigitalTwinsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update the metadata of a DigitalTwinsInstance. The usual pattern to modify a property is
   * to retrieve the DigitalTwinsInstance and security metadata, and then combine them with the modified
   * values in a new body to update the DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param digitalTwinsCreate The DigitalTwinsInstance and security metadata.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    digitalTwinsCreate: DigitalTwinsDescription,
    options?: DigitalTwinsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DigitalTwinsCreateOrUpdateResponse>,
      DigitalTwinsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DigitalTwinsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, resourceName, digitalTwinsCreate, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Create or update the metadata of a DigitalTwinsInstance. The usual pattern to modify a property is
   * to retrieve the DigitalTwinsInstance and security metadata, and then combine them with the modified
   * values in a new body to update the DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param digitalTwinsCreate The DigitalTwinsInstance and security metadata.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    digitalTwinsCreate: DigitalTwinsDescription,
    options?: DigitalTwinsCreateOrUpdateOptionalParams
  ): Promise<DigitalTwinsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      resourceName,
      digitalTwinsCreate,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update metadata of DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param digitalTwinsPatchDescription The DigitalTwinsInstance and security metadata.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    resourceName: string,
    digitalTwinsPatchDescription: DigitalTwinsPatchDescription,
    options?: DigitalTwinsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DigitalTwinsUpdateResponse>,
      DigitalTwinsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DigitalTwinsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        resourceName,
        digitalTwinsPatchDescription,
        options
      },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Update metadata of DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param digitalTwinsPatchDescription The DigitalTwinsInstance and security metadata.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    digitalTwinsPatchDescription: DigitalTwinsPatchDescription,
    options?: DigitalTwinsUpdateOptionalParams
  ): Promise<DigitalTwinsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      resourceName,
      digitalTwinsPatchDescription,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    resourceName: string,
    options?: DigitalTwinsDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DigitalTwinsDeleteResponse>,
      DigitalTwinsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DigitalTwinsDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, resourceName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Delete a DigitalTwinsInstance.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param resourceName The name of the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: DigitalTwinsDeleteOptionalParams
  ): Promise<DigitalTwinsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      resourceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get all the DigitalTwinsInstances in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: DigitalTwinsListOptionalParams
  ): Promise<DigitalTwinsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Get all the DigitalTwinsInstances in a resource group.
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DigitalTwinsListByResourceGroupOptionalParams
  ): Promise<DigitalTwinsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Check if a DigitalTwinsInstance name is available.
   * @param location Location of DigitalTwinsInstance.
   * @param digitalTwinsInstanceCheckName Set the name parameter in the DigitalTwinsInstanceCheckName
   *                                      structure to the name of the DigitalTwinsInstance to check.
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    digitalTwinsInstanceCheckName: CheckNameRequest,
    options?: DigitalTwinsCheckNameAvailabilityOptionalParams
  ): Promise<DigitalTwinsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { location, digitalTwinsInstanceCheckName, options },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: DigitalTwinsListNextOptionalParams
  ): Promise<DigitalTwinsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group that contains the DigitalTwinsInstance.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DigitalTwinsListByResourceGroupNextOptionalParams
  ): Promise<DigitalTwinsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsDescription
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
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    201: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    202: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    204: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.digitalTwinsCreate,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    201: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    202: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    204: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.digitalTwinsPatchDescription,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    201: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    202: {
      bodyMapper: Mappers.DigitalTwinsDescription
    },
    204: {
      bodyMapper: Mappers.DigitalTwinsDescription
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
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DigitalTwins/digitalTwinsInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsDescriptionListResult
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
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsDescriptionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DigitalTwins/locations/{location}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.digitalTwinsInstanceCheckName,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsDescriptionListResult
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
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DigitalTwinsDescriptionListResult
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
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
