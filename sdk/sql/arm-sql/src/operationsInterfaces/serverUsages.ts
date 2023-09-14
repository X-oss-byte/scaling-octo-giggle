/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ServerUsage, ServerUsagesListByServerOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServerUsages. */
export interface ServerUsages {
  /**
   * Returns server usages.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerUsagesListByServerOptionalParams
  ): PagedAsyncIterableIterator<ServerUsage>;
}
