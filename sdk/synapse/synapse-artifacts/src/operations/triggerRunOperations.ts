/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { TriggerRunOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClientContext } from "../artifactsClientContext";
import {
  TriggerRunOperationsRerunTriggerInstanceOptionalParams,
  TriggerRunOperationsCancelTriggerInstanceOptionalParams,
  RunFilterParameters,
  TriggerRunOperationsQueryTriggerRunsByWorkspaceOptionalParams,
  TriggerRunOperationsQueryTriggerRunsByWorkspaceResponse
} from "../models";

/** Class representing a TriggerRunOperations. */
export class TriggerRunOperationsImpl implements TriggerRunOperations {
  private readonly client: ArtifactsClientContext;

  /**
   * Initialize a new instance of the class TriggerRunOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClientContext) {
    this.client = client;
  }

  /**
   * Rerun single trigger instance by runId.
   * @param triggerName The trigger name.
   * @param runId The pipeline run identifier.
   * @param options The options parameters.
   */
  async rerunTriggerInstance(
    triggerName: string,
    runId: string,
    options?: TriggerRunOperationsRerunTriggerInstanceOptionalParams
  ): Promise<void> {
    const { span } = createSpan(
      "ArtifactsClient-rerunTriggerInstance",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { triggerName, runId, options },
        rerunTriggerInstanceOperationSpec
      );
      return result as void;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Cancel single trigger instance by runId.
   * @param triggerName The trigger name.
   * @param runId The pipeline run identifier.
   * @param options The options parameters.
   */
  async cancelTriggerInstance(
    triggerName: string,
    runId: string,
    options?: TriggerRunOperationsCancelTriggerInstanceOptionalParams
  ): Promise<void> {
    const { span } = createSpan(
      "ArtifactsClient-cancelTriggerInstance",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { triggerName, runId, options },
        cancelTriggerInstanceOperationSpec
      );
      return result as void;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Query trigger runs.
   * @param filterParameters Parameters to filter the pipeline run.
   * @param options The options parameters.
   */
  async queryTriggerRunsByWorkspace(
    filterParameters: RunFilterParameters,
    options?: TriggerRunOperationsQueryTriggerRunsByWorkspaceOptionalParams
  ): Promise<TriggerRunOperationsQueryTriggerRunsByWorkspaceResponse> {
    const { span } = createSpan(
      "ArtifactsClient-queryTriggerRunsByWorkspace",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { filterParameters, options },
        queryTriggerRunsByWorkspaceOperationSpec
      );
      return result as TriggerRunOperationsQueryTriggerRunsByWorkspaceResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const rerunTriggerInstanceOperationSpec: coreClient.OperationSpec = {
  path: "/triggers/{triggerName}/triggerRuns/{runId}/rerun",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.runId,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelTriggerInstanceOperationSpec: coreClient.OperationSpec = {
  path: "/triggers/{triggerName}/triggerRuns/{runId}/cancel",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.runId,
    Parameters.triggerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const queryTriggerRunsByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/queryTriggerRuns",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerRunsQueryResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.filterParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
