/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftStorageSync } from "../microsoftStorageSync";
import {
  PrivateLinkResourcesListByStorageSyncServiceOptionalParams,
  PrivateLinkResourcesListByStorageSyncServiceResponse
} from "../models";

/** Class containing PrivateLinkResources operations. */
export class PrivateLinkResourcesImpl implements PrivateLinkResources {
  private readonly client: MicrosoftStorageSync;

  /**
   * Initialize a new instance of the class PrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftStorageSync) {
    this.client = client;
  }

  /**
   * Gets the private link resources that need to be created for a storage sync service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName The name of the storage sync service name within the specified
   *                               resource group.
   * @param options The options parameters.
   */
  listByStorageSyncService(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: PrivateLinkResourcesListByStorageSyncServiceOptionalParams
  ): Promise<PrivateLinkResourcesListByStorageSyncServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, storageSyncServiceName, options },
      listByStorageSyncServiceOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByStorageSyncServiceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
