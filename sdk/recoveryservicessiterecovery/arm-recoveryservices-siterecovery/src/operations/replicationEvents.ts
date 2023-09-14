/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ReplicationEvents } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient";
import {
  Event,
  ReplicationEventsListNextOptionalParams,
  ReplicationEventsListOptionalParams,
  ReplicationEventsListResponse,
  ReplicationEventsGetOptionalParams,
  ReplicationEventsGetResponse,
  ReplicationEventsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReplicationEvents operations. */
export class ReplicationEventsImpl implements ReplicationEvents {
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class ReplicationEvents class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Gets the list of Azure Site Recovery events for the vault.
   * @param options The options parameters.
   */
  public list(
    options?: ReplicationEventsListOptionalParams
  ): PagedAsyncIterableIterator<Event> {
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
    options?: ReplicationEventsListOptionalParams
  ): AsyncIterableIterator<Event[]> {
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
    options?: ReplicationEventsListOptionalParams
  ): AsyncIterableIterator<Event> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the list of Azure Site Recovery events for the vault.
   * @param options The options parameters.
   */
  private _list(
    options?: ReplicationEventsListOptionalParams
  ): Promise<ReplicationEventsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * The operation to get the details of an Azure Site recovery event.
   * @param eventName The name of the Azure Site Recovery event.
   * @param options The options parameters.
   */
  get(
    eventName: string,
    options?: ReplicationEventsGetOptionalParams
  ): Promise<ReplicationEventsGetResponse> {
    return this.client.sendOperationRequest(
      { eventName, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ReplicationEventsListNextOptionalParams
  ): Promise<ReplicationEventsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationEvents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventCollection
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationEvents/{eventName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Event
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.eventName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventCollection
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
