/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ComputeOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningWorkspaces } from "../azureMachineLearningWorkspaces";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ComputeResource,
  ComputeListNextOptionalParams,
  ComputeListOptionalParams,
  ComputeListResponse,
  AmlComputeNodeInformation,
  ComputeListNodesNextOptionalParams,
  ComputeListNodesOptionalParams,
  ComputeListNodesResponse,
  ComputeGetOptionalParams,
  ComputeGetResponse,
  ComputeCreateOrUpdateOptionalParams,
  ComputeCreateOrUpdateResponse,
  ClusterUpdateParameters,
  ComputeUpdateOptionalParams,
  ComputeUpdateResponse,
  UnderlyingResourceAction,
  ComputeDeleteOptionalParams,
  ComputeListKeysOptionalParams,
  ComputeListKeysResponse,
  ComputeStartOptionalParams,
  ComputeStopOptionalParams,
  ComputeRestartOptionalParams,
  ComputeListNextResponse,
  ComputeListNodesNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ComputeOperations operations. */
export class ComputeOperationsImpl implements ComputeOperations {
  private readonly client: AzureMachineLearningWorkspaces;

  /**
   * Initialize a new instance of the class ComputeOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningWorkspaces) {
    this.client = client;
  }

  /**
   * Gets computes in specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    options?: ComputeListOptionalParams
  ): PagedAsyncIterableIterator<ComputeResource> {
    const iter = this.listPagingAll(resourceGroupName, workspaceName, options);
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
          workspaceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: ComputeListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ComputeResource[]> {
    let result: ComputeListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, workspaceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
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
    workspaceName: string,
    options?: ComputeListOptionalParams
  ): AsyncIterableIterator<ComputeResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the details (e.g IP address, port etc) of all the compute nodes in the compute.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param options The options parameters.
   */
  public listNodes(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    options?: ComputeListNodesOptionalParams
  ): PagedAsyncIterableIterator<AmlComputeNodeInformation> {
    const iter = this.listNodesPagingAll(
      resourceGroupName,
      workspaceName,
      computeName,
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
        return this.listNodesPagingPage(
          resourceGroupName,
          workspaceName,
          computeName,
          options,
          settings
        );
      }
    };
  }

  private async *listNodesPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    options?: ComputeListNodesOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AmlComputeNodeInformation[]> {
    let result: ComputeListNodesResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listNodes(
        resourceGroupName,
        workspaceName,
        computeName,
        options
      );
      let page = result.nodes || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNodesNext(
        resourceGroupName,
        workspaceName,
        computeName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.nodes || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listNodesPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    options?: ComputeListNodesOptionalParams
  ): AsyncIterableIterator<AmlComputeNodeInformation> {
    for await (const page of this.listNodesPagingPage(
      resourceGroupName,
      workspaceName,
      computeName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets computes in specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    options?: ComputeListOptionalParams
  ): Promise<ComputeListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec
    );
  }

  /**
   * Gets compute definition by its name. Any secrets (storage keys, service credentials, etc) are not
   * returned - use 'keys' nested resource to get them.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    options?: ComputeGetOptionalParams
  ): Promise<ComputeGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, computeName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates compute. This call will overwrite a compute if it exists. This is a
   * nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that
   * it does not exist yet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param parameters Payload with Machine Learning compute definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    parameters: ComputeResource,
    options?: ComputeCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ComputeCreateOrUpdateResponse>,
      ComputeCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ComputeCreateOrUpdateResponse> => {
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
      { resourceGroupName, workspaceName, computeName, parameters, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates compute. This call will overwrite a compute if it exists. This is a
   * nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that
   * it does not exist yet.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param parameters Payload with Machine Learning compute definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    parameters: ComputeResource,
    options?: ComputeCreateOrUpdateOptionalParams
  ): Promise<ComputeCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      computeName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates properties of a compute. This call will overwrite a compute if it exists. This is a
   * nonrecoverable operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param parameters Additional parameters for cluster update.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    parameters: ClusterUpdateParameters,
    options?: ComputeUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<ComputeUpdateResponse>, ComputeUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ComputeUpdateResponse> => {
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
      { resourceGroupName, workspaceName, computeName, parameters, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates properties of a compute. This call will overwrite a compute if it exists. This is a
   * nonrecoverable operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param parameters Additional parameters for cluster update.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    parameters: ClusterUpdateParameters,
    options?: ComputeUpdateOptionalParams
  ): Promise<ComputeUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      workspaceName,
      computeName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes specified Machine Learning compute.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param underlyingResourceAction Delete the underlying compute if 'Delete', or detach the underlying
   *                                 compute from workspace if 'Detach'.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    underlyingResourceAction: UnderlyingResourceAction,
    options?: ComputeDeleteOptionalParams
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
      {
        resourceGroupName,
        workspaceName,
        computeName,
        underlyingResourceAction,
        options
      },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes specified Machine Learning compute.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param underlyingResourceAction Delete the underlying compute if 'Delete', or detach the underlying
   *                                 compute from workspace if 'Detach'.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    underlyingResourceAction: UnderlyingResourceAction,
    options?: ComputeDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      workspaceName,
      computeName,
      underlyingResourceAction,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get the details (e.g IP address, port etc) of all the compute nodes in the compute.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param options The options parameters.
   */
  private _listNodes(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    options?: ComputeListNodesOptionalParams
  ): Promise<ComputeListNodesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, computeName, options },
      listNodesOperationSpec
    );
  }

  /**
   * Gets secrets related to Machine Learning compute (storage keys, service credentials, etc).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    options?: ComputeListKeysOptionalParams
  ): Promise<ComputeListKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, computeName, options },
      listKeysOperationSpec
    );
  }

  /**
   * Posts a start action to a compute instance
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param options The options parameters.
   */
  async beginStart(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    options?: ComputeStartOptionalParams
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
      { resourceGroupName, workspaceName, computeName, options },
      startOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Posts a start action to a compute instance
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param options The options parameters.
   */
  async beginStartAndWait(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    options?: ComputeStartOptionalParams
  ): Promise<void> {
    const poller = await this.beginStart(
      resourceGroupName,
      workspaceName,
      computeName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Posts a stop action to a compute instance
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param options The options parameters.
   */
  async beginStop(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    options?: ComputeStopOptionalParams
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
      { resourceGroupName, workspaceName, computeName, options },
      stopOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Posts a stop action to a compute instance
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param options The options parameters.
   */
  async beginStopAndWait(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    options?: ComputeStopOptionalParams
  ): Promise<void> {
    const poller = await this.beginStop(
      resourceGroupName,
      workspaceName,
      computeName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Posts a restart action to a compute instance
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param options The options parameters.
   */
  async beginRestart(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    options?: ComputeRestartOptionalParams
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
      { resourceGroupName, workspaceName, computeName, options },
      restartOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Posts a restart action to a compute instance
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param options The options parameters.
   */
  async beginRestartAndWait(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    options?: ComputeRestartOptionalParams
  ): Promise<void> {
    const poller = await this.beginRestart(
      resourceGroupName,
      workspaceName,
      computeName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: ComputeListNextOptionalParams
  ): Promise<ComputeListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListNodesNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param computeName Name of the Azure Machine Learning compute.
   * @param nextLink The nextLink from the previous successful call to the ListNodes method.
   * @param options The options parameters.
   */
  private _listNodesNext(
    resourceGroupName: string,
    workspaceName: string,
    computeName: string,
    nextLink: string,
    options?: ComputeListNodesNextOptionalParams
  ): Promise<ComputeListNodesNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, computeName, nextLink, options },
      listNodesNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PaginatedComputeResourcesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skip],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ComputeResource
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
    Parameters.workspaceName,
    Parameters.computeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ComputeResource
    },
    201: {
      bodyMapper: Mappers.ComputeResource
    },
    202: {
      bodyMapper: Mappers.ComputeResource
    },
    204: {
      bodyMapper: Mappers.ComputeResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.computeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ComputeResource
    },
    201: {
      bodyMapper: Mappers.ComputeResource
    },
    202: {
      bodyMapper: Mappers.ComputeResource
    },
    204: {
      bodyMapper: Mappers.ComputeResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.computeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.underlyingResourceAction],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.computeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNodesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}/listNodes",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AmlComputeNodesInformation
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
    Parameters.workspaceName,
    Parameters.computeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ComputeSecrets
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
    Parameters.workspaceName,
    Parameters.computeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const startOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}/start",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.computeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const stopOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}/stop",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.computeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const restartOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/computes/{computeName}/restart",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.computeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PaginatedComputeResourcesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skip],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNodesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AmlComputeNodesInformation
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
    Parameters.workspaceName,
    Parameters.nextLink,
    Parameters.computeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
