/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  RecoverableDatabase,
  RecoverableDatabasesListByServerOptionalParams,
  RecoverableDatabasesGetOptionalParams,
  RecoverableDatabasesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RecoverableDatabases. */
export interface RecoverableDatabases {
  /**
   * Gets a list of recoverable databases
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: RecoverableDatabasesListByServerOptionalParams
  ): PagedAsyncIterableIterator<RecoverableDatabase>;
  /**
   * Gets a recoverable database, which is a resource representing a database's geo backup
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: RecoverableDatabasesGetOptionalParams
  ): Promise<RecoverableDatabasesGetResponse>;
}
