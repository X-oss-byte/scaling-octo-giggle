/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { NetworkFunction } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureTrafficCollectorClient } from "../azureTrafficCollectorClient";
import {
  Operation,
  NetworkFunctionListOperationsOptionalParams,
  NetworkFunctionListOperationsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing NetworkFunction operations. */
export class NetworkFunctionImpl implements NetworkFunction {
  private readonly client: AzureTrafficCollectorClient;

  /**
   * Initialize a new instance of the class NetworkFunction class.
   * @param client Reference to the service client
   */
  constructor(client: AzureTrafficCollectorClient) {
    this.client = client;
  }

  /**
   * Lists all of the available NetworkFunction Rest API operations.
   * @param options The options parameters.
   */
  public listOperations(
    options?: NetworkFunctionListOperationsOptionalParams
  ): PagedAsyncIterableIterator<Operation> {
    const iter = this.listOperationsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listOperationsPagingPage(options);
      }
    };
  }

  private async *listOperationsPagingPage(
    options?: NetworkFunctionListOperationsOptionalParams
  ): AsyncIterableIterator<Operation[]> {
    let result = await this._listOperations(options);
    yield result.value || [];
  }

  private async *listOperationsPagingAll(
    options?: NetworkFunctionListOperationsOptionalParams
  ): AsyncIterableIterator<Operation> {
    for await (const page of this.listOperationsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all of the available NetworkFunction Rest API operations.
   * @param options The options parameters.
   */
  private _listOperations(
    options?: NetworkFunctionListOperationsOptionalParams
  ): Promise<NetworkFunctionListOperationsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listOperationsOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationsOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.NetworkFunction/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};