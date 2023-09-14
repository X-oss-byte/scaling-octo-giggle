/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ProtectableContainers } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClient } from "../recoveryServicesBackupClient";
import {
  ProtectableContainerResource,
  ProtectableContainersListNextOptionalParams,
  ProtectableContainersListOptionalParams,
  ProtectableContainersListResponse,
  ProtectableContainersListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ProtectableContainers operations. */
export class ProtectableContainersImpl implements ProtectableContainers {
  private readonly client: RecoveryServicesBackupClient;

  /**
   * Initialize a new instance of the class ProtectableContainers class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesBackupClient) {
    this.client = client;
  }

  /**
   * Lists the containers that can be registered to Recovery Services Vault.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName
   * @param options The options parameters.
   */
  public list(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    options?: ProtectableContainersListOptionalParams
  ): PagedAsyncIterableIterator<ProtectableContainerResource> {
    const iter = this.listPagingAll(
      vaultName,
      resourceGroupName,
      fabricName,
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
        return this.listPagingPage(
          vaultName,
          resourceGroupName,
          fabricName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    options?: ProtectableContainersListOptionalParams
  ): AsyncIterableIterator<ProtectableContainerResource[]> {
    let result = await this._list(
      vaultName,
      resourceGroupName,
      fabricName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        vaultName,
        resourceGroupName,
        fabricName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    options?: ProtectableContainersListOptionalParams
  ): AsyncIterableIterator<ProtectableContainerResource> {
    for await (const page of this.listPagingPage(
      vaultName,
      resourceGroupName,
      fabricName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the containers that can be registered to Recovery Services Vault.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName
   * @param options The options parameters.
   */
  private _list(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    options?: ProtectableContainersListOptionalParams
  ): Promise<ProtectableContainersListResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, fabricName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    nextLink: string,
    options?: ProtectableContainersListNextOptionalParams
  ): Promise<ProtectableContainersListNextResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, fabricName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectableContainers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectableContainerResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectableContainerResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
