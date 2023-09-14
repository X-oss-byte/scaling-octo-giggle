/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/backupProtectedItemsCrrMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a BackupProtectedItemsCrr. */
export class BackupProtectedItemsCrr {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a BackupProtectedItemsCrr.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Provides a pageable list of all items that are backed up within a vault.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupProtectedItemsCrrListResponse>
   */
  list(vaultName: string, resourceGroupName: string, options?: Models.BackupProtectedItemsCrrListOptionalParams): Promise<Models.BackupProtectedItemsCrrListResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.ProtectedItemResourceList>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(vaultName: string, resourceGroupName: string, options: Models.BackupProtectedItemsCrrListOptionalParams, callback: msRest.ServiceCallback<Models.ProtectedItemResourceList>): void;
  list(vaultName: string, resourceGroupName: string, options?: Models.BackupProtectedItemsCrrListOptionalParams | msRest.ServiceCallback<Models.ProtectedItemResourceList>, callback?: msRest.ServiceCallback<Models.ProtectedItemResourceList>): Promise<Models.BackupProtectedItemsCrrListResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.BackupProtectedItemsCrrListResponse>;
  }

  /**
   * Provides a pageable list of all items that are backed up within a vault.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupProtectedItemsCrrListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.BackupProtectedItemsCrrListNextOptionalParams): Promise<Models.BackupProtectedItemsCrrListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProtectedItemResourceList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.BackupProtectedItemsCrrListNextOptionalParams, callback: msRest.ServiceCallback<Models.ProtectedItemResourceList>): void;
  listNext(nextPageLink: string, options?: Models.BackupProtectedItemsCrrListNextOptionalParams | msRest.ServiceCallback<Models.ProtectedItemResourceList>, callback?: msRest.ServiceCallback<Models.ProtectedItemResourceList>): Promise<Models.BackupProtectedItemsCrrListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.BackupProtectedItemsCrrListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupProtectedItems/",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1,
    Parameters.filter,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProtectedItemResourceList
    },
    default: {
      bodyMapper: Mappers.NewErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion1,
    Parameters.filter,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProtectedItemResourceList
    },
    default: {
      bodyMapper: Mappers.NewErrorResponse
    }
  },
  serializer
};