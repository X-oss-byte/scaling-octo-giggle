/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Secrets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClient } from "../cdnManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Secret,
  SecretsListByProfileNextOptionalParams,
  SecretsListByProfileOptionalParams,
  SecretsListByProfileResponse,
  SecretsGetOptionalParams,
  SecretsGetResponse,
  SecretsCreateOptionalParams,
  SecretsCreateResponse,
  SecretProperties,
  SecretsUpdateOptionalParams,
  SecretsUpdateResponse,
  SecretsDeleteOptionalParams,
  SecretsListByProfileNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Secrets operations. */
export class SecretsImpl implements Secrets {
  private readonly client: CdnManagementClient;

  /**
   * Initialize a new instance of the class Secrets class.
   * @param client Reference to the service client
   */
  constructor(client: CdnManagementClient) {
    this.client = client;
  }

  /**
   * Lists existing AzureFrontDoor secrets.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The options parameters.
   */
  public listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: SecretsListByProfileOptionalParams
  ): PagedAsyncIterableIterator<Secret> {
    const iter = this.listByProfilePagingAll(
      resourceGroupName,
      profileName,
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
        return this.listByProfilePagingPage(
          resourceGroupName,
          profileName,
          options
        );
      }
    };
  }

  private async *listByProfilePagingPage(
    resourceGroupName: string,
    profileName: string,
    options?: SecretsListByProfileOptionalParams
  ): AsyncIterableIterator<Secret[]> {
    let result = await this._listByProfile(
      resourceGroupName,
      profileName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByProfileNext(
        resourceGroupName,
        profileName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByProfilePagingAll(
    resourceGroupName: string,
    profileName: string,
    options?: SecretsListByProfileOptionalParams
  ): AsyncIterableIterator<Secret> {
    for await (const page of this.listByProfilePagingPage(
      resourceGroupName,
      profileName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists existing AzureFrontDoor secrets.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The options parameters.
   */
  private _listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: SecretsListByProfileOptionalParams
  ): Promise<SecretsListByProfileResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, options },
      listByProfileOperationSpec
    );
  }

  /**
   * Gets an existing Secret within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    secretName: string,
    options?: SecretsGetOptionalParams
  ): Promise<SecretsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, secretName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a new Secret within the specified profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param secret The Secret properties.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    profileName: string,
    secretName: string,
    secret: Secret,
    options?: SecretsCreateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<SecretsCreateResponse>, SecretsCreateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SecretsCreateResponse> => {
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
      { resourceGroupName, profileName, secretName, secret, options },
      createOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Creates a new Secret within the specified profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param secret The Secret properties.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    profileName: string,
    secretName: string,
    secret: Secret,
    options?: SecretsCreateOptionalParams
  ): Promise<SecretsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      profileName,
      secretName,
      secret,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing Secret within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param secretProperties Secret properties
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    profileName: string,
    secretName: string,
    secretProperties: SecretProperties,
    options?: SecretsUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<SecretsUpdateResponse>, SecretsUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SecretsUpdateResponse> => {
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
      { resourceGroupName, profileName, secretName, secretProperties, options },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Updates an existing Secret within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param secretProperties Secret properties
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    profileName: string,
    secretName: string,
    secretProperties: SecretProperties,
    options?: SecretsUpdateOptionalParams
  ): Promise<SecretsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      profileName,
      secretName,
      secretProperties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing Secret within profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    profileName: string,
    secretName: string,
    options?: SecretsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      { resourceGroupName, profileName, secretName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Deletes an existing Secret within profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    secretName: string,
    options?: SecretsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      profileName,
      secretName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByProfileNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByProfile method.
   * @param options The options parameters.
   */
  private _listByProfileNext(
    resourceGroupName: string,
    profileName: string,
    nextLink: string,
    options?: SecretsListByProfileNextOptionalParams
  ): Promise<SecretsListByProfileNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, nextLink, options },
      listByProfileNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/secrets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecretListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/secrets/{secretName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Secret
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.secretName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/secrets/{secretName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Secret
    },
    201: {
      bodyMapper: Mappers.Secret
    },
    202: {
      bodyMapper: Mappers.Secret
    },
    204: {
      bodyMapper: Mappers.Secret
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.secret,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.secretName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/secrets/{secretName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Secret
    },
    201: {
      bodyMapper: Mappers.Secret
    },
    202: {
      bodyMapper: Mappers.Secret
    },
    204: {
      bodyMapper: Mappers.Secret
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.secretProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.secretName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/secrets/{secretName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.secretName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByProfileNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecretListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};