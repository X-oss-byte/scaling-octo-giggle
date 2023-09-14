/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { WorkspaceSku, WorkspaceSkusListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WorkspaceSkus. */
export interface WorkspaceSkus {
  /**
   * Lists all skus with associated features
   * @param options The options parameters.
   */
  list(
    options?: WorkspaceSkusListOptionalParams
  ): PagedAsyncIterableIterator<WorkspaceSku>;
}
