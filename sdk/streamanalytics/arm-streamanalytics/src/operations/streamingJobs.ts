/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { StreamingJobs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StreamAnalyticsManagementClient } from "../streamAnalyticsManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  StreamingJob,
  StreamingJobsListByResourceGroupNextOptionalParams,
  StreamingJobsListByResourceGroupOptionalParams,
  StreamingJobsListNextOptionalParams,
  StreamingJobsListOptionalParams,
  StreamingJobsCreateOrReplaceOptionalParams,
  StreamingJobsCreateOrReplaceResponse,
  StreamingJobsUpdateOptionalParams,
  StreamingJobsUpdateResponse,
  StreamingJobsDeleteOptionalParams,
  StreamingJobsGetOptionalParams,
  StreamingJobsGetResponse,
  StreamingJobsListByResourceGroupResponse,
  StreamingJobsListResponse,
  StreamingJobsStartOptionalParams,
  StreamingJobsStopOptionalParams,
  StreamingJobsScaleOptionalParams,
  StreamingJobsListByResourceGroupNextResponse,
  StreamingJobsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing StreamingJobs operations. */
export class StreamingJobsImpl implements StreamingJobs {
  private readonly client: StreamAnalyticsManagementClient;

  /**
   * Initialize a new instance of the class StreamingJobs class.
   * @param client Reference to the service client
   */
  constructor(client: StreamAnalyticsManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the streaming jobs in the specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: StreamingJobsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<StreamingJob> {
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
    options?: StreamingJobsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<StreamingJob[]> {
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
    options?: StreamingJobsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<StreamingJob> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the streaming jobs in the given subscription.
   * @param options The options parameters.
   */
  public list(
    options?: StreamingJobsListOptionalParams
  ): PagedAsyncIterableIterator<StreamingJob> {
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
    options?: StreamingJobsListOptionalParams
  ): AsyncIterableIterator<StreamingJob[]> {
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
    options?: StreamingJobsListOptionalParams
  ): AsyncIterableIterator<StreamingJob> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Creates a streaming job or replaces an already existing streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param streamingJob The definition of the streaming job that will be used to create a new streaming
   *                     job or replace the existing one.
   * @param options The options parameters.
   */
  async beginCreateOrReplace(
    resourceGroupName: string,
    jobName: string,
    streamingJob: StreamingJob,
    options?: StreamingJobsCreateOrReplaceOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<StreamingJobsCreateOrReplaceResponse>,
      StreamingJobsCreateOrReplaceResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<StreamingJobsCreateOrReplaceResponse> => {
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
      { resourceGroupName, jobName, streamingJob, options },
      createOrReplaceOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates a streaming job or replaces an already existing streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param streamingJob The definition of the streaming job that will be used to create a new streaming
   *                     job or replace the existing one.
   * @param options The options parameters.
   */
  async beginCreateOrReplaceAndWait(
    resourceGroupName: string,
    jobName: string,
    streamingJob: StreamingJob,
    options?: StreamingJobsCreateOrReplaceOptionalParams
  ): Promise<StreamingJobsCreateOrReplaceResponse> {
    const poller = await this.beginCreateOrReplace(
      resourceGroupName,
      jobName,
      streamingJob,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing streaming job. This can be used to partially update (ie. update one or two
   * properties) a streaming job without affecting the rest the job definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param streamingJob A streaming job object. The properties specified here will overwrite the
   *                     corresponding properties in the existing streaming job (ie. Those properties will be updated). Any
   *                     properties that are set to null here will mean that the corresponding property in the existing input
   *                     will remain the same and not change as a result of this PATCH operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    jobName: string,
    streamingJob: StreamingJob,
    options?: StreamingJobsUpdateOptionalParams
  ): Promise<StreamingJobsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, streamingJob, options },
      updateOperationSpec
    );
  }

  /**
   * Deletes a streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    jobName: string,
    options?: StreamingJobsDeleteOptionalParams
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
      { resourceGroupName, jobName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes a streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    jobName: string,
    options?: StreamingJobsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(resourceGroupName, jobName, options);
    return poller.pollUntilDone();
  }

  /**
   * Gets details about the specified streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    jobName: string,
    options?: StreamingJobsGetOptionalParams
  ): Promise<StreamingJobsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, options },
      getOperationSpec
    );
  }

  /**
   * Lists all of the streaming jobs in the specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: StreamingJobsListByResourceGroupOptionalParams
  ): Promise<StreamingJobsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists all of the streaming jobs in the given subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: StreamingJobsListOptionalParams
  ): Promise<StreamingJobsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Starts a streaming job. Once a job is started it will start processing input events and produce
   * output.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  async beginStart(
    resourceGroupName: string,
    jobName: string,
    options?: StreamingJobsStartOptionalParams
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
      { resourceGroupName, jobName, options },
      startOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Starts a streaming job. Once a job is started it will start processing input events and produce
   * output.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  async beginStartAndWait(
    resourceGroupName: string,
    jobName: string,
    options?: StreamingJobsStartOptionalParams
  ): Promise<void> {
    const poller = await this.beginStart(resourceGroupName, jobName, options);
    return poller.pollUntilDone();
  }

  /**
   * Stops a running streaming job. This will cause a running streaming job to stop processing input
   * events and producing output.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  async beginStop(
    resourceGroupName: string,
    jobName: string,
    options?: StreamingJobsStopOptionalParams
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
      { resourceGroupName, jobName, options },
      stopOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Stops a running streaming job. This will cause a running streaming job to stop processing input
   * events and producing output.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  async beginStopAndWait(
    resourceGroupName: string,
    jobName: string,
    options?: StreamingJobsStopOptionalParams
  ): Promise<void> {
    const poller = await this.beginStop(resourceGroupName, jobName, options);
    return poller.pollUntilDone();
  }

  /**
   * Scales a streaming job when the job is running.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  async beginScale(
    resourceGroupName: string,
    jobName: string,
    options?: StreamingJobsScaleOptionalParams
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
      { resourceGroupName, jobName, options },
      scaleOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Scales a streaming job when the job is running.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  async beginScaleAndWait(
    resourceGroupName: string,
    jobName: string,
    options?: StreamingJobsScaleOptionalParams
  ): Promise<void> {
    const poller = await this.beginScale(resourceGroupName, jobName, options);
    return poller.pollUntilDone();
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: StreamingJobsListByResourceGroupNextOptionalParams
  ): Promise<StreamingJobsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: StreamingJobsListNextOptionalParams
  ): Promise<StreamingJobsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrReplaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.StreamingJob,
      headersMapper: Mappers.StreamingJobsCreateOrReplaceHeaders
    },
    201: {
      bodyMapper: Mappers.StreamingJob,
      headersMapper: Mappers.StreamingJobsCreateOrReplaceHeaders
    },
    202: {
      bodyMapper: Mappers.StreamingJob,
      headersMapper: Mappers.StreamingJobsCreateOrReplaceHeaders
    },
    204: {
      bodyMapper: Mappers.StreamingJob,
      headersMapper: Mappers.StreamingJobsCreateOrReplaceHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.streamingJob,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.StreamingJob,
      headersMapper: Mappers.StreamingJobsUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.streamingJob,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StreamingJob,
      headersMapper: Mappers.StreamingJobsGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StreamingJobListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/streamingjobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StreamingJobListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const startOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/start",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.startJobParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const stopOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/stop",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const scaleOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/scale",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.scaleJobParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StreamingJobListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StreamingJobListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
